import * as Constants from '@lib/Constants';
import * as zlib from 'zlib';
import { isString, getTableData } from "@lib/util";

// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dynamodb/interfaces/querycommandinput.html
// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html
import { ddbDocClient } from "@lib/ddbDocClient";
import {
  QueryCommand,
  BatchGetCommand,
  GetCommand,
} from "@aws-sdk/lib-dynamodb";

import { s3Client, streamToBuffer } from "@lib/s3Client";
import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";

const facilityTable = 'ceremore_facility';
const facilityProjectionExpression = 'id,facilityName,images,areaId,pref,city,area,address,seats,parking,leadText,ceremore,crematorium,parkingAvl,napping,mortuary,closeStation,barrierFree,companyFuneral,privateFuneral,publicFuneral,train,bus,priority'
const minimumFacilityProperty = facilityProjectionExpression.split(',').filter(v=>v!='priority')
const nearbyTable = 'ceremore_nearby_facility';
const batchSize = 100;

/* 斎場・葬儀場の情報を取得 */
export async function getFacilityData(facilityId: string | string[] | number | undefined) {
  try {
    if(!facilityId) return {error:'ValidationError'};
    const fid: string | number = Array.isArray(facilityId)? facilityId[0] : facilityId;
    // バリデーション
    if(isString(fid) && /[^\d]/.test(fid as string)){
      return {error:'ValidationError'};
    }
    const id: number = isString(fid)? parseInt(fid as string) : fid as number;
    let facilities:{[key:string]:any}[] = await getTableData(facilityTable, Constants.Bucket, Constants.cacheFolder);
    facilities = facilities.filter(d=>d.id==id);
    if(!facilities.length){
      return {error:'NotFound'};
    }
    const item = facilities[0];
    delete item.displayRank;
    delete item.priority;
    return item;

    // const result = await ddbDocClient.send(new GetCommand({
    //   TableName: facilityTable,
    //   Key: {id},
    // }));
    // const item = result.Item;
    // if(!item){
    //   return {error:'NotFound'};
    // }
    // // delete item.legacyImg;
    // delete item.displayRank;
    // delete item.priority;
    // return item;
  } catch (err) {
    console.error(err);
    // const { requestId, cfId, extendedRequestId } = err.$metadata;
    // console.log({ requestId, cfId, extendedRequestId });
    return {error:'ExceptionError'};
  }
}

/* 市区町村から斎場・葬儀場の一覧を取得 */
export async function searchFacilityFromAreas(areaIds: string | string[] | number[] | undefined) {
  try {
    if(!areaIds) return {error:'ValidationError'};
    const areaIdStrs: string[] | number[] = Array.isArray(areaIds)? areaIds : [areaIds];
    if(areaIdStrs.length>0 && isString(areaIdStrs[0])){
      // バリデーション
      for(const areaIdStr of areaIdStrs){
        if(/[^\d]/.test(areaIdStr as string)){
          return {error:'ValidationError'};
        }
      }
      areaIds = areaIdStrs.map(v=>parseInt(v as string));
    }else{
      areaIds = areaIdStrs as number[];
    }

    // 斎場・葬儀場の一覧を取得
    const facilityAll:{[key:string]:any}[] = await getTableData(facilityTable, Constants.Bucket, Constants.cacheFolder);
    const facilities = facilityAll.filter(d=>(areaIds as number[]).includes(d.areaId));
    facilities.sort((a,b)=>b.priority-a.priority);
    for(const item of facilities) delete item.priority;

    // 近隣の葬儀場を取得
    const nearbyAll:{[key:string]:any}[] = await getTableData(nearbyTable, Constants.Bucket, Constants.cacheFolder);
    const facilityIds: number[] = facilities.map(d=>d.id);
    const nearbyIds: number[] = [];
    for(const item of nearbyAll){
      if(areaIds.includes(item.areaId)){
        const ids = item.ids;
        for(const id of ids){
          // 一覧に含まれているものを除外する
          if(facilityIds.includes(id) || nearbyIds.includes(id)) continue;
          nearbyIds.push(id);
        }
      }
    }
    const nearby = facilityAll.filter(d=>nearbyIds.includes(d.id));
    nearby.sort((a,b)=>b.priority-a.priority);
    for(const item of nearby) delete item.priority;


    // // 斎場・葬儀場の一覧を取得
    // const promises: Promise<any>[] = [];
    // for(const areaId of areaIds){
    //   promises.push(getFacilityFromArea(areaId));
    // }
    // // 近隣の葬儀場を取得
    // const getRequests = areaIds.map(areaId=>({areaId}))
    // for(let i=0;i*batchSize<getRequests.length;i++){
    //   promises.push(ddbDocClient.send(new BatchGetCommand({
    //     RequestItems: {
    //       [nearbyTable]: {
    //         Keys: getRequests.slice(i*batchSize,Math.min((i+1)*batchSize,getRequests.length)),
    //       }
    //     }
    //   })));
    // }

    // const facilities = [];
    // const facilityIds: string[] = [];
    // const nearbyIds: string[] = [];
    // const results = await Promise.all(promises);
    // for(const result of results){
    //   if(result.Items){
    //     // 斎場・葬儀場の一覧
    //     const items = result.Items;
    //     if(!items) continue;
    //     for(const item of items){
    //       facilityIds.push(item.id);
    //       facilities.push(item);
    //     }
    //   }else if(result.Responses){
    //     // 近隣の葬儀場
    //     const items = result.Responses[nearbyTable];
    //     if(!items) continue;
    //     for(const item of items){
    //       const ids = item.ids;
    //       for(const id of ids){
    //         // 一覧に含まれているものを除外する
    //         if(facilityIds.includes(id) || nearbyIds.includes(id)) continue;
    //         nearbyIds.push(id);
    //       }
    //     }
    //   }
    // }
    // facilities.sort((a,b)=>b.priority-a.priority);
    // for(const item of facilities) delete item.priority;

    // let nearby = [];
    // if(nearbyIds.length>0){
    //   // 近隣の葬儀場の情報を取得
    //   const promises: Promise<any>[] = [];
    //   const getRequests = nearbyIds.map(id=>({id}))
    //   for(let i=0;i*batchSize<getRequests.length;i++){
    //     promises.push(ddbDocClient.send(new BatchGetCommand({
    //       RequestItems: {
    //         [facilityTable]: {
    //           Keys: getRequests.slice(i*batchSize,Math.min((i+1)*batchSize,getRequests.length)),
    //           // ProjectionExpression: facilityProjectionExpression,
    //           // ExpressionAttributeNames: facilityExpressionAttributeNames,
    //         }
    //       }
    //     })));
    //   }
    //   const rs = await Promise.all(promises);
    //   // ランク順に並び替える
    //   nearby = rs.map(result=>result.Responses[facilityTable]).flat(1).sort((a,b)=>b.priority-a.priority);
    //   for(const item of nearby) delete item.priority;
    // }
    
    return {facilities,nearby};
  } catch (err) {
    console.error(err);
    return {error:'ExceptionError'};
  }
}


/* 都道府県から斎場・葬儀場の一覧を取得 */
export async function searchFacilityFromPref(pref: string | string[] | number | undefined) {
  try {
    if(!pref) return {error:'ValidationError'};
    const pid: string | number = Array.isArray(pref)? pref[0] : pref;
    // バリデーション
    if(isString(pid) && /[^\d]/.test(pid as string)){
      return {error:'ValidationError'};
    }
    pref = isString(pid)? parseInt(pid as string) : pid as number;
    let facilities:{[key:string]:any}[] = await getTableData(facilityTable, Constants.Bucket, Constants.cacheFolder);
    facilities = facilities.filter(d=>d.pref==pref);
    facilities.sort((a, b) => b.priority - a.priority);
    for(const item of facilities) delete item.priority;
    return {facilities};

    // let facilities:{[key:string]:any}[] = [];
    // let exclusiveStartKey = null;
    // for(let i=0;i<100;i++){
    //   const result:any = await ddbDocClient.send(new QueryCommand({
    //     TableName: facilityTable,
    //     IndexName: 'pref-priority-index',
    //     // ProjectionExpression: facilityProjectionExpression,
    //     KeyConditionExpression: 'pref = :pref',
    //     ScanIndexForward: false,
    //     // ExpressionAttributeNames: facilityExpressionAttributeNames,
    //     ExpressionAttributeValues: {
    //       ':pref': pref,
    //     },
    //     ExclusiveStartKey: exclusiveStartKey,
    //   }))
    //   if(result.Items){
    //     facilities = facilities.concat(result.Items);
    //   }
    //   exclusiveStartKey = result.LastEvaluatedKey;
    //   if(!exclusiveStartKey) break;
    // }
    // for(const item of facilities) delete item.priority;
    // return {facilities};
  } catch (err) {
    console.error(err);
    return {error:'ExceptionError'};
  }
}

/* 全ての斎場・葬儀場の一覧を取得 */
export async function getFacilityAll() {
  const facilities:{[key:string]:any}[] = await getTableData(facilityTable, Constants.Bucket, Constants.cacheFolder);
  facilities.sort((a, b) => b.priority - a.priority);
  for(const item of facilities) delete item.priority;
  return facilities;
}

export function slimFacilities(facilityData:any){
  if(facilityData.facilities){
    for(let i=0;i<facilityData.facilities.length;i++){
      const d:any = {};
      for(const k in facilityData.facilities[i]){
        if(minimumFacilityProperty.indexOf(k)>=0)
          d[k] = facilityData.facilities[i][k];
      }
      facilityData.facilities[i] = d;
    }
  }
  if(facilityData.nearby){
    for(let i=0;i<facilityData.nearby.length;i++){
      const d:any = {};
      for(const k in facilityData.nearby[i]){
        if(minimumFacilityProperty.indexOf(k)>=0)
          d[k] = facilityData.nearby[i][k];
      }
      facilityData.nearby[i] = d;
    }
  }
  return facilityData;
}

export async function getFacilityFromArea(areaId: number) {
  const Key = `${Constants.cacheFolder}facility/area/${areaId}.json.br`
  try {
    const result = await s3Client.send(new GetObjectCommand({
      Bucket: Constants.Bucket,
      Key,
    }));
    const buffer = await streamToBuffer(result.Body)
    const binary: Buffer | undefined = await new Promise((resolve) => {
      zlib.brotliDecompress(buffer, (error, result)=>{
        resolve(error? undefined : result)
      })
    })
    if(binary){
      const Items = JSON.parse(binary.toString('utf-8'));
      return {Items}
    }
  } catch (err) {
  }
  const result = await ddbDocClient.send(new QueryCommand({
    TableName: facilityTable,
    IndexName: 'areaId-priority-index',
    // ProjectionExpression: facilityProjectionExpression,
    KeyConditionExpression: 'areaId = :areaId',
    ScanIndexForward: false,
    // ExpressionAttributeNames: facilityExpressionAttributeNames,
    ExpressionAttributeValues: {
      ':areaId': areaId,
    },
  }))
  const Items = result.Items;
  const binary: Buffer | undefined = await new Promise((resolve) => {
    zlib.brotliCompress(JSON.stringify(Items), (error, result)=>{
        resolve(error? undefined : result);
    })
  })
  if(binary){
    const output = await s3Client.send(
      new PutObjectCommand({
        Bucket: Constants.Bucket,
        Key,
        Body: binary
      })
    );
  }
  return {Items}
}