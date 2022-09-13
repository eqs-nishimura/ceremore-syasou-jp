import * as Constants from '@lib/Constants';
import { getTableData } from "@lib/util";
// import { ddbDocClient } from "@lib/ddbDocClient";
// import {
//   ScanCommand,
//   QueryCommand,
// } from "@aws-sdk/lib-dynamodb";

export type Area = {
  areaFull: string  // "chiba_yachimata"
  area: string      // "yachimata"
  prefId: string    // "chiba"
  prefName: string  // "千葉県"
  pref: number      // 12
  areaId: number    // 154
  areaName: string  // "八街市"
}

export type Pref = {
  prefId: string    // "chiba"
  prefName: string  // "千葉県"
  pref: number      // 12
}

export type AreaData = {
  area?: Area
  error?: 'ValidationError' | 'NotFound' | 'ExceptionError'
}

export type AreaDataAll = {
  area?: Area[]
  error?: 'ExceptionError'
}

/* エリア情報の取得 */
export async function getAreaData(prefName: string | string[] | undefined, area: string | string[] | undefined) : Promise<AreaData> {
  try {
    if(!prefName || !area) return {error:'ValidationError'};
    prefName = Array.isArray(prefName)? prefName[0] : prefName;
    if(prefName in Constants.PREF_CODE_A === false){
      return {error:'ValidationError'};
    }
    area = Array.isArray(area)? area[0] : area;

    const areaFull = `${prefName}_${area}`;
    let areas:Area[] = await getTableData("ceremore_area", Constants.Bucket, Constants.cacheFolder);
    areas = areas.filter(d=>d.areaFull==areaFull);
    if(areas.length){
      return {area:areas[0]};
    }else{
      return {error:'NotFound'};
    }
    // const result = await ddbDocClient.send(new QueryCommand({
    //   TableName: "ceremore_area",
    //   IndexName: 'areaFull-index',
    //   KeyConditionExpression: 'areaFull = :areaFull',
    //   ExpressionAttributeValues: {
    //     ':areaFull': `${prefName}_${area}`,
    //   },
    // }));
    // if(result.Items?.length){
    //   return {area:result.Items[0] as Area};
    // }else{
    //   return {error:'NotFound'};
    // }
  } catch (err) {
    console.error(err);
    // const { requestId, cfId, extendedRequestId } = err.$metadata;
    // console.log({ requestId, cfId, extendedRequestId });
    return {error:'ExceptionError'};
  }
}

export async function getAreaDataAll(): Promise<AreaDataAll>{
  try {
    const area:Area[] = await getTableData("ceremore_area", Constants.Bucket, Constants.cacheFolder);
    // let area:Area[] = [];
    // let exclusiveStartKey = null;
    // for(let i=0;i<100;i++){
    //   const result:any = await ddbDocClient.send(new ScanCommand({
    //     TableName: "ceremore_area",
    //     ExclusiveStartKey: exclusiveStartKey,
    //   }))
    //   if(result.Items){
    //     area = area.concat(result.Items);
    //   }
    //   exclusiveStartKey = result.LastEvaluatedKey;
    //   if(!exclusiveStartKey) break;
    // }
    return {area};
  } catch (err) {
    console.error(err);
    // const { requestId, cfId, extendedRequestId } = err.$metadata;
    // console.log({ requestId, cfId, extendedRequestId });
    return {error:'ExceptionError'};
  }
}