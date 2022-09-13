import type { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
// import Script from 'next/script'
import { useForm, Controller, EventType } from "react-hook-form";
import { css } from '@emotion/react'
import { Footer } from "@components/footer"
import { SEMINARS } from '@lib/seminars'

const path = 'form'

export type Props = {
  activeStep: number,
}

/**
 * 確認画面からブラウザバックで戻れるようにするため、
 * useStateではなく、動的ルーティングで実装
 */
export const getStaticProps: GetStaticProps<any> = async ({ params }) => {
  const activeStep = (()=>{
    try{
      return params?.step? parseInt(params.step as string) : 0;
    }catch(e){
      return 0;
    }
  })();
  return {props:{activeStep}}
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['1','2'].map(d=>`/contact/${path}/${d}`),
    fallback: false
  }
}

const Page: NextPage<Props> = (props) => {
  const router = useRouter();
  const [inputData, setInputData] = useState<any>(null);
  const [mode, setMode] = useState<"1" | "2" | "3">("1");
  const [res, setRes] = useState<any>(null);

  useEffect(() => {
    if(router.isReady && router.query.mode) {
      let val = "1";
      if(router.query.mode === "1" || router.query.mode === "2" || router.query.mode === "3") {
        val = router.query.mode;
      }
      setMode(val as "1" | "2" | "3")
    }
  }, [router.isReady]);

  useEffect(() => {
    reset({
      mode: mode,
    });
  }, [mode]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    // control,
    reset,
    formState: { errors }
  } = useForm();

  watch(["mode", "address", "zipcode"], {mode: mode});

  const send = async (data:any) => {
    if(props.activeStep==0){
      // 入力内容を保持
      setInputData(data);
      // 確認画面を表示
      router.push(`/contact/${path}/1`);
    }else if(props.activeStep==1){
      // event.preventDefault();
      console.log(inputData);

      const res = await fetch(`/api/${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputData),
      });
      const result = await res.json();
      console.log(result);
      setRes(result);

      // 完了画面を表示
      router.push(`/contact/${path}/2`);
    }
  }

  const watchHelper = async (value: {[x: string]: any}, name?: string, type?: EventType) => {
    setInputData(value);
    if(name === "zipcode" && value[name]?.length >= 7) {
      let input = value[name];
      input = input.replaceAll("-", "");
      if(input.length > 7) {
        input = input.substring(0,7);
      }

      if(input.length !== 7) return;

      const response = await fetch(`${process.env.NEXT_PUBLIC_ZIPCLOUD_API_URL!}?zipcode=${input}`);
      if(response.status === 200) {
        const result = await response.json();
        console.log(result);
        const info = result.results[0];
        setValue("address", `${info.address1}${info.address2}${info.address3}`);
      }
    } else if(name === "zipcode" && value[name]?.length < 7) {
      setValue("address", "");
    }
  }

  useEffect(() => {
    // console.log(props,inputData);
    if(props.activeStep!=0 && !inputData){
      router.replace(`/contact/${path}`)
    }else if(props.activeStep==2){
      // 入力内容をクリア
      setInputData(null);
    }
    if (props.activeStep==0 && typeof window !== 'undefined' && window.jQuery) {
      window.sptoggle();
      window.pagetop();
      window.smoothscroll();
    }
  },[props]);

  useEffect(() => {
    const subscription = watch(async (value, {name, type}) => await watchHelper(value, name, type));
    return () => subscription.unsubscribe();
  }, [watch])

  return (
    <>
      <Head>
        <title>資料請求・お問い合わせ │ 社葬・お別れの会・合同葬ならセレモアの社葬</title>
        <meta name="description" content={"セレモアの「資料請求・お問い合わせ」ページです。社葬・合同葬・お別れの会は首都圏随一の実績、信頼と安心のセレモアへお任せください。社葬・お別れの会・合同葬・公葬の受注実績に基づいた豊富な経験と知識であらゆるお葬儀に対応いたします。社葬の事前相談からお急ぎのご依頼まで24時間365日深夜早朝いつでもご連絡ください。"} />
      </Head>

      <div id="page-contact-form">
        <main className={"step"+(props.activeStep+1)}>
          <section className="s01">
            <div className="wrapper">
              <h3 className="mincho sylogo">
                <span className="tategaki">資料請求<br />お問い合わせ</span>
              </h3>
              <ul className="flow">
                <li className={props.activeStep==0?'active':''}><span>1</span><div>ご入力</div></li>
                <li className={props.activeStep==1?'active':''}><span>2</span><div>ご確認</div></li>
                <li className={props.activeStep==2?'active':''}><span>3</span><div>完了</div></li>
              </ul>
              {props.activeStep==2
              ?<>
                <div className="contact-thanks-msg">
                  {res?.mode === 1 && <>
                    <h1>お問い合わせありがとうございます</h1>

                    <p>この度は、お問い合わせいただきありがとうございます。</p>
                    <p>お送りいただきました内容を確認の上、折り返し担当者よりご連絡させていただきます。</p>
                    <p>数日経過しても連絡がない場合やお急ぎの場合、ご質問やご不明な点がある場合には、お電話にてお問い合わせください。</p>

                    <p>また、ご入力いただいたメールアドレス宛に受付確認メールをお送りしましたのでご確認ください。</p>
                    <p>万が一、確認メールが届いていない場合には、入力いただいたメールアドレスに間違いがあった可能性がございます。メールアドレスをご確認の上、もう一度フォームよりお問い合わせいただくか、お電話にてお問い合わせをお願い申し上げます。</p>
                  </>}

                  {res?.mode === 2 && <>
                    <h1>資料のご請求ありがとうございます</h1>

                    <p>この度は、資料をご請求いただきありがとうございます。</p>
                    <p>ご入力頂いたご住所宛に近日中に資料をご郵送させていただきます。</p>

                    <p>また、ご入力いただいたメールアドレス宛に受付確認メールをお送りしましたのでご確認ください。</p>
                    <p>万が一、確認メールが届いていない場合には、入力いただいたメールアドレスに間違いがあった可能性がございます。メールアドレスをご確認の上、もう一度フォームよりご請求いただくか、お電話にてご請求をお願い申し上げます。</p>
                  </>}

                  {res?.mode === 3 && <>
                    <h1>セミナーのお申し込みありがとうございます</h1>

                    <p>この度は社葬セミナーにお申込みいただき、誠にありがとうございます。</p>
                    <p>近日中に当社担当者よりご連絡させていただきます。</p>
                    <p>何卒宜しくお願い申し上げます。</p>
                  </>}
                </div>
              </>
              :<>
                <form onSubmit={handleSubmit(send)}>
                <div className="f01">
                  {props.activeStep==0 &&
                    <>
                      <div className="inline-radio">
                        <div>
                          <input type="radio"{...register("mode")} value="1" defaultChecked={inputData?.mode === "1"} />
                          <label>お問い合わせ</label>
                        </div>
                        <div>
                          <input type="radio"{...register("mode")} value="2" defaultChecked={inputData?.mode === "2"} />
                          <label>資料請求</label>
                        </div>
                        <div>
                          <input type="radio"{...register("mode")} value="3" defaultChecked={inputData?.mode === "3"} />
                          <label>セミナー申込</label>
                        </div>
                      </div>
                    </>
                  }
                  {props.activeStep==1 && <>
                    <div className="tr01">
                      <div className="th01">お問い合わせ種別</div>
                      <div className='td02'>
                        <div className="crmr-conf-msg heading">
                          {inputData?.mode === "1"
                            ? "お問い合わせ"
                            : inputData?.mode === "2"
                              ? "資料請求"
                              : "セミナー申込"
                          }
                        </div>
                      </div>
                    </div>
                  </>}
                  {inputData?.mode === "3"
                    && <div className="tr01">
                        <div className="th01">受講日<span>必須</span></div>
                        <div className="td02">
                          {props.activeStep==0 && <>
                            <div className="m-inputTxt-1">
                              <select {...register("classDate", {
                                required: true,
                              })} className={errors?.classDate && "crmr-error"}>
                                <option value="">選択してください</option>
                                {SEMINARS.map(item => {
                                  const dateStr = item.date.split(' ')[0];
                                  const dateComponents = dateStr.split('-');
                                  const date = new Date(Number(dateComponents[0]), Number(dateComponents[1])-1, Number(dateComponents[2]), 0, 0, 0);
                                  if(new Date().getTime() >= date.getTime()) return false;

                                  return <option key={item.id} value={item.date.replaceAll("-", "/")}>{item.date.replaceAll("-", "/")}</option>;
                                })}
                              </select>
                            </div>
                            {errors?.classDate &&
                              <div className="crmr-error-msg">
                                {errors.classDate.type === "required" && "受講日を選択してください。"}
                              </div>
                            }
                          </>}
                          {props.activeStep==1 && <>
                            <div className="crmr-conf-msg">{SEMINARS.find(item => item.date.replaceAll("-", "/") === inputData?.classDate)!.date.replaceAll("-", "/")}</div>
                          </>}
                        </div>
                      </div>
                  }

                  <div className="tr01">
                    <div className="th01">貴社名<span className={`${inputData?.mode !== "3" && "optional"}`}>{inputData?.mode !== "3" ? "任意" : "必須"}</span></div>
                    <div className="td02">
                      {props.activeStep==0 && <>
                        <div className="m-inputTxt-1">
                          <input {...register("company", {
                            required: inputData?.mode === "3",
                            maxLength: 1000,
                          })} className={errors?.company && "crmr-error"} type="text" />
                        </div>
                        {errors?.company &&
                          <div className="crmr-error-msg">
                            {errors.company.type === "required" && "貴社名を入力してください。"}
                            {errors.company.type === "maxLength" && "貴社名は1000文字以内で入力してください。"}
                          </div>
                        }
                      </>}
                      {props.activeStep==1 && <>
                        <div className="crmr-conf-msg">{inputData?.company}</div>
                      </>}
                    </div>
                  </div>
                  <div className="tr01">
                    <div className="th01">部署名<span className='optional'>任意</span></div>
                    <div className="td02">
                      {props.activeStep==0 && <>
                        <div className="m-inputTxt-1">
                          <input {...register("department", {
                            required: false,
                            maxLength: 1000,

                          })} className={errors?.department && "crmr-error"} type="text" />
                        </div>
                        {errors?.department &&
                          <div className="crmr-error-msg">
                            {errors.department.type === "required" && "部署名を入力してください。"}
                            {errors.department.type === "maxLength" && "部署名は1000文字以内で入力してください。"}
                          </div>
                        }
                      </>}
                      {props.activeStep==1 && <>
                        <div className="crmr-conf-msg">{inputData?.department}</div>
                      </>}
                    </div>
                  </div>
                  <div className="tr01">
                    <div className="th01">ご担当者名（漢字）<span>必須</span></div>
                    <div className='td-wrapper'>
                      <div className="td02">
                        {props.activeStep==0 && <>
                          <div className="m-inputTxt-1">
                            <input {...register("surname", {
                              required: true,
                              maxLength: 1000,
                            })} className={errors?.surname && "crmr-error"} type="text" />
                          </div>
                          {errors?.surname
                            ? <div className="crmr-error-msg">
                                {errors.surname.type === "required" && "姓（漢字）を入力してください。"}
                                {errors.surname.type === "maxLength" && "姓（漢字）は1000文字以内で入力してください。"}
                              </div>
                            : <div className='crmr-helper'>
                                姓
                              </div>
                          }
                        </>}
                        {props.activeStep==1 && <>
                          <div className="crmr-conf-msg">{inputData?.surname}</div>
                        </>}
                      </div>
                      <div className="td02">
                        {props.activeStep==0 && <>
                          <div className="m-inputTxt-1">
                            <input {...register("givenName", {
                              required: true,
                              maxLength: 1000,
                            })} className={errors?.givenName && "crmr-error"} type="text" />
                          </div>
                          {errors?.givenName
                            ? <div className="crmr-error-msg">
                                {errors.givenName.type === "required" && "名（漢字）を入力してください。"}
                                {errors.givenName.type === "maxLength" && "名（漢字）は1000文字以内で入力してください。"}
                              </div>
                            : <div className='crmr-helper'>
                                名
                              </div>
                          }
                        </>}
                        {props.activeStep==1 && <>
                          <div className="crmr-conf-msg">{inputData?.givenName}</div>
                        </>}
                      </div>
                    </div>
                  </div>
                  <div className="tr01">
                    <div className="th01">ご担当者名（ふりがな）<span>必須</span></div>
                    <div className='td-wrapper'>
                      <div className="td02">
                        {props.activeStep==0 && <>
                          <div className="m-inputTxt-1">
                            <input {...register("surnameKana", {
                              required: true,
                              maxLength: 1000,
                            })} className={errors?.surnameKana && "crmr-error"} type="text" />
                          </div>
                          {errors?.surnameKana
                            ? <div className="crmr-error-msg">
                                {errors.surnameKana.type === "required" && "姓（ふりがな）を入力してください。"}
                                {errors.surnameKana.type === "maxLength" && "姓（ふりがな）は1000文字以内で入力してください。"}
                              </div>
                            : <div className='crmr-helper'>
                                せい
                              </div>
                          }
                        </>}
                        {props.activeStep==1 && <>
                          <div className="crmr-conf-msg">{inputData?.surnameKana}</div>
                        </>}
                      </div>

                      <div className="td02">
                        {props.activeStep==0 && <>
                          <div className="m-inputTxt-1">
                            <input {...register("givenNameKana", {
                              required: true,
                              maxLength: 1000,
                            })} className={errors?.givenNameKana && "crmr-error"} type="text" />
                          </div>
                          {errors?.givenNameKana
                            ? <div className="crmr-error-msg">
                                {errors.givenNameKana.type === "required" && "名（ふりがな）を入力してください。"}
                                {errors.givenNameKana.type === "maxLength" && "名（ふりがな）1000文字以内で入力してください。"}
                              </div>
                            : <div className='crmr-helper'>
                                めい
                              </div>
                          }
                        </>}
                        {props.activeStep==1 && <>
                          <div className="crmr-conf-msg">{inputData?.givenNameKana}</div>
                        </>}
                      </div>
                    </div>
                  </div>

                  <div className="tr01">
                    <div className="th01">ご住所<span className={`${inputData?.mode !== "2" && "optional"}`}>{`${inputData?.mode !== "2" ? "任意" : "必須"}`}</span></div>
                    <div className="td02">
                      {props.activeStep==0 && <>
                        <div css={css`
                          display: flex;
                          align-items: center;
                          margin-bottom: 8px;
                        `}>
                          <div css={css`margin-right: 8px;`}>〒</div>
                          <div css={css`width: 50%;`}>
                            <input className={`p-postal-code${errors?.zipcode ? " crmr-error" : ""}`} size={8} maxLength={8} type="tel" {...register("zipcode", {
                              required: inputData?.mode === "2",
                              maxLength: 8,
                              pattern: {
                                value: /^(\d{3,3}-\d{4,4})|(\d{7,7})$/,
                                message: "郵便番号は半角数字でハイフンを入れて8文字、または入れずに7文字で入力してください。",
                              },
                            })} />
                          </div>
                        </div>
                        {(errors?.zipcode) &&
                          <div css={css`
                            margin-bottom: 8px;
                          `} className="crmr-error-msg">
                            {(errors.zipcode?.type === "required") && "ご住所の郵便番号を入力してください。"}
                            {(errors.zipcode?.type === "pattern") && "郵便番号は半角数字でハイフンを入れて8文字、または入れずに7文字で入力してください。"}
                          </div>
                        }
                        <div className="m-inputTxt-1">
                          <input {...register("address", {
                            required: inputData?.mode === "2",
                            maxLength: 1000,
                          })} className={`p-region p-locality p-street-address p-extended-address${errors?.address ? " crmr-error" : ""}`} type="text" />
                        </div>
                        {errors?.address &&
                          <div className="crmr-error-msg">
                            {errors.address.type === "required" && "ご住所を入力してください。"}
                            {errors.address.type === "maxLength" && "ご住所は1000文字以内で入力してください。"}
                          </div>
                        }
                      </>}
                      {props.activeStep==1 && <>
                        <div className="crmr-conf-msg">{inputData?.zipcode && <>〒{inputData?.zipcode}</>}</div>
                      </>}
                      {props.activeStep==1 && <>
                        <div className="crmr-conf-msg">{inputData?.address}</div>
                      </>}
                    </div>
                  </div>

                  {inputData?.mode === "3"
                    && <div className="tr01">
                        <div className="th01">ご参加者様 お名前1<span>必須</span></div>
                        <div className='td-wrapper'>
                          <div className="td02">
                            {props.activeStep==0 && <>
                              <div className="m-inputTxt-1">
                                <input {...register("attendanceSurname", {
                                  required: true,
                                  maxLength: 1000,
                                })} className={errors?.attendanceSurname && "crmr-error"} type="text" />
                              </div>
                              {errors?.attendanceSurname
                                ? <div className="crmr-error-msg">
                                    {errors.attendanceSurname.type === "required" && "ご参加者様の姓（漢字）を入力してください。"}
                                    {errors.attendanceSurname.type === "maxLength" && "ご参加者様の姓（漢字）は1000文字以内で入力してください。"}
                                  </div>
                                : <div className='crmr-helper'>
                                    姓
                                  </div>
                              }
                            </>}
                            {props.activeStep==1 && <>
                              <div className="crmr-conf-msg">{inputData?.attendanceSurname}</div>
                            </>}
                          </div>
                          <div className="td02">
                            {props.activeStep==0 && <>
                              <div className="m-inputTxt-1">
                                <input {...register("attendanceGivenName", {
                                  required: true,
                                  maxLength: 1000,
                                })} className={errors?.attendanceGivenName && "crmr-error"} type="text" />
                              </div>
                              {errors?.attendanceGivenName
                                ? <div className="crmr-error-msg">
                                    {errors.attendanceGivenName.type === "required" && "ご参加者様の名（漢字）を入力してください。"}
                                    {errors.attendanceGivenName.type === "maxLength" && "ご参加者様の名（漢字）は1000文字以内で入力してください。"}
                                  </div>
                                : <div className='crmr-helper'>
                                    名
                                  </div>
                              }
                            </>}
                            {props.activeStep==1 && <>
                              <div className="crmr-conf-msg">{inputData?.attendanceGivenName}</div>
                            </>}
                          </div>
                        </div>
                      </div>
                  }

                  {inputData?.mode === "3"
                    && <div className="tr01">
                        <div className="th01">ご参加者様 ふりがな1<span>必須</span></div>
                        <div className='td-wrapper'>
                          <div className="td02">
                            {props.activeStep==0 && <>
                              <div className="m-inputTxt-1">
                                <input {...register("attendanceSurnameKana", {
                                  required: true,
                                  maxLength: 1000,
                                })} className={errors?.attendanceSurnameKana && "crmr-error"} type="text" />
                              </div>
                              {errors?.attendanceSurnameKana
                                ? <div className="crmr-error-msg">
                                    {errors.attendanceSurnameKana.type === "required" && "ご参加者様の姓（ふりがな）を入力してください。"}
                                    {errors.attendanceSurnameKana.type === "maxLength" && "ご参加者様の姓（ふりがな）は1000文字以内で入力してください。"}
                                  </div>
                                : <div className='crmr-helper'>
                                    せい
                                  </div>
                              }
                            </>}
                            {props.activeStep==1 && <>
                              <div className="crmr-conf-msg">{inputData?.attendanceSurnameKana}</div>
                            </>}
                          </div>
                          <div className="td02">
                            {props.activeStep==0 && <>
                              <div className="m-inputTxt-1">
                                <input {...register("attendanceGivenNameKana", {
                                  required: true,
                                  maxLength: 1000,
                                })} className={errors?.attendanceGivenNameKana && "crmr-error"} type="text" />
                              </div>
                              {errors?.attendanceGivenNameKana
                                ? <div className="crmr-error-msg">
                                    {errors.attendanceGivenNameKana.type === "required" && "ご参加者様の名（ふりがな）を入力してください。"}
                                    {errors.attendanceGivenNameKana.type === "maxLength" && "ご参加者様の名（ふりがな）は1000文字以内で入力してください。"}
                                  </div>
                                : <div className='crmr-helper'>
                                    めい
                                  </div>
                              }
                            </>}
                            {props.activeStep==1 && <>
                              <div className="crmr-conf-msg">{inputData?.attendanceGivenNameKana}</div>
                            </>}
                          </div>
                        </div>
                      </div>
                  }

                  {inputData?.mode === "3"
                    && <div className="tr01">
                        <div className="th01">ご参加者様 お名前2<span className='optional'>任意</span></div>
                        <div className='td-wrapper'>
                          <div className="td02">
                            {props.activeStep==0 && <>
                              <div className="m-inputTxt-1">
                                <input {...register("attendanceSurname2", {
                                  required: false,
                                  maxLength: 1000,
                                })} className={errors?.attendanceSurname2 && "crmr-error"} type="text" />
                              </div>
                              {errors?.attendanceSurname2
                                ? <div className="crmr-error-msg">
                                    {errors.attendanceSurname2.type === "required" && "ご参加者様の姓（漢字）を入力してください。"}
                                    {errors.attendanceSurname2.type === "maxLength" && "ご参加者様の姓（漢字）は1000文字以内で入力してください。"}
                                  </div>
                                : <div className='crmr-helper'>
                                    姓
                                  </div>
                              }
                            </>}
                            {props.activeStep==1 && <>
                              <div className="crmr-conf-msg">{inputData?.attendanceSurname2}</div>
                            </>}
                          </div>
                          <div className="td02">
                            {props.activeStep==0 && <>
                              <div className="m-inputTxt-1">
                                <input {...register("attendanceGivenName2", {
                                  required: false,
                                  maxLength: 1000,
                                })} className={errors?.attendanceGivenName2 && "crmr-error"} type="text" />
                              </div>
                              {errors?.attendanceGivenName2
                                ? <div className="crmr-error-msg">
                                    {errors.attendanceGivenName2.type === "required" && "ご参加者様の名（漢字）を入力してください。"}
                                    {errors.attendanceGivenName2.type === "maxLength" && "ご参加者様の名（漢字）は1000文字以内で入力してください。"}
                                  </div>
                                : <div className='crmr-helper'>
                                    名
                                  </div>
                              }
                            </>}
                            {props.activeStep==1 && <>
                              <div className="crmr-conf-msg">{inputData?.attendanceGivenName2}</div>
                            </>}
                          </div>
                        </div>
                      </div>
                  }

                  {inputData?.mode === "3"
                    && <div className="tr01">
                        <div className="th01">ご参加者様 ふりがな2<span className='optional'>任意</span></div>
                        <div className='td-wrapper'>
                          <div className="td02">
                            {props.activeStep==0 && <>
                              <div className="m-inputTxt-1">
                                <input {...register("attendanceSurnameKana2", {
                                  required: false,
                                  maxLength: 1000,
                                })} className={errors?.attendanceSurnameKana2 && "crmr-error"} type="text" />
                              </div>
                              {errors?.attendanceSurnameKana2
                                ? <div className="crmr-error-msg">
                                    {errors.attendanceSurnameKana2.type === "required" && "ご参加者様の姓（ふりがな）を入力してください。"}
                                    {errors.attendanceSurnameKana2.type === "maxLength" && "ご参加者様の姓（ふりがな）は1000文字以内で入力してください。"}
                                  </div>
                                : <div className='crmr-helper'>
                                    せい
                                  </div>
                              }
                            </>}
                            {props.activeStep==1 && <>
                              <div className="crmr-conf-msg">{inputData?.attendanceSurnameKana2}</div>
                            </>}
                          </div>
                          <div className="td02">
                            {props.activeStep==0 && <>
                              <div className="m-inputTxt-1">
                                <input {...register("attendanceGivenNameKana2", {
                                  required: false,
                                  maxLength: 1000,
                                })} className={errors?.attendanceGivenNameKana2 && "crmr-error"} type="text" />
                              </div>
                              {errors?.attendanceGivenNameKana2
                                ? <div className="crmr-error-msg">
                                    {errors.attendanceGivenNameKana2.type === "required" && "ご参加者様の名（ふりがな）を入力してください。"}
                                    {errors.attendanceGivenNameKana2.type === "maxLength" && "ご参加者様の名（ふりがな）は1000文字以内で入力してください。"}
                                  </div>
                                : <div className='crmr-helper'>
                                    めい
                                  </div>
                              }
                            </>}
                            {props.activeStep==1 && <>
                              <div className="crmr-conf-msg">{inputData?.attendanceGivenNameKana2}</div>
                            </>}
                          </div>
                        </div>
                      </div>
                  }

                  <div className="tr01">
                    <div className="th01">電話番号<span>必須</span></div>
                    <div className="td02">
                      {props.activeStep==0 && <>
                        <div className="m-inputTxt-1">
                          <input {...register("tel", {
                            required: true,
                            pattern: {
                              value: /^0[-0-9]{9,12}$/,
                              message: "不正な電話番号です。",
                            }
                          })} className={errors?.tel && "crmr-error"} type="tel" />
                        </div>
                        {errors?.tel &&
                          <div className="crmr-error-msg">
                            {errors.tel.type === "required" && "電話番号を入力してください。"}
                            {errors.tel.type === "pattern" && "不正な電話番号です。"}
                          </div>
                        }
                      </>}
                      {props.activeStep==1 && <>
                        <div className="crmr-conf-msg">{inputData?.tel}</div>
                      </>}
                    </div>
                  </div>

                  <div className="tr01">
                    <div className="th01">メールアドレス<span>必須</span></div>
                    <div className="td02">
                      {props.activeStep==0 && <>
                        <div className="m-inputTxt-1">
                          <input {...register("email", {
                            required: true,
                            pattern: {
                              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                              message: "不正なメールアドレスです。",
                            },
                          })} className={errors?.email && "crmr-error"} type="email" />
                        </div>
                        {errors?.email &&
                          <div className="crmr-error-msg">
                            {errors.email.type === "required" && "メールアドレスを入力してください。"}
                            {errors.email.type === "pattern" && "不正なメールアドレスです。"}
                          </div>
                        }
                      </>}
                      {props.activeStep==1 && <>
                        <div className="crmr-conf-msg">{inputData?.email}</div>
                      </>}
                    </div>
                  </div>

                  {inputData?.mode === "3"
                    && <div className="tr01">
                        <div className="th01">お申込みの経緯<span>必須</span></div>
                        <div className="td02">
                          {props.activeStep==0 && <>
                            <div className="m-inputTxt-1">
                              <select {...register("background", {
                                required: true,
                              })} className={errors?.background && "crmr-error"}>
                                <option value="">選択してください</option>
                                <option value="DMにてセミナーのご案内を受けて">DMにてセミナーのご案内を受けて</option>
                                <option value="当社営業担当よりセミナーのご案内を受けて">当社営業担当よりセミナーのご案内を受けて</option>
                                <option value="メルマガでセミナーのご案内を受けて">メルマガでセミナーのご案内を受けて</option>
                                <option value="ホームぺージのセミナー案内を見て">ホームぺージのセミナー案内を見て</option>
                                <option value="セミナーの広告をみて">セミナーの広告をみて</option>
                                <option value="その他">その他</option>
                              </select>
                            </div>
                            {errors?.background &&
                              <div className="crmr-error-msg">
                                {errors.background.type === "required" && "参加のご経緯を選択してください。"}
                              </div>
                            }
                          </>}
                          {props.activeStep==1 && <>
                            <div className="crmr-conf-msg">{inputData?.background}</div>
                          </>}
                        </div>
                      </div>
                  }

                  <div className="tr01">
                    <div className="th01">{inputData?.mode !== "3" ? "お問い合わせ内容" : "予めご質問がございましたらご記入ください"}<span className={inputData?.mode === "3" ? "optional" : undefined}>{inputData?.mode !== "3" ? "必須" : "任意"}</span></div>
                    <div className="td02">
                      {props.activeStep==0 && <>
                        <div className="m-textarea-1">
                          <textarea {...register("details", {
                            required: inputData?.mode !== "3",
                            maxLength: 20000,
                          })} className={errors?.details && "crmr-error"}
                          cols={30} rows={10}></textarea>
                        </div>
                        {errors?.details &&
                          <div className="crmr-error-msg">
                            {errors.details.type === "required" && "お問い合わせ内容を入力してください。"}
                            {errors.details.type === "maxLength" && "お問い合わせ内容は20000文字以内で入力してください。"}
                          </div>
                        }
                      </>}
                      {props.activeStep==1 && <>
                        <div className="crmr-conf-msg">{inputData?.details}</div>
                      </>}
                    </div>
                  </div>

                  {inputData?.mode === "3"
                    && <div className="tr01">
                        <div className="th01">セミナーの参加方法<span>必須</span></div>
                        <div className="td02">
                          {props.activeStep==0 && <>
                            <div className="m-inputTxt-1">
                              <select {...register("method", {
                                required: true,
                              })} className={errors?.method && "crmr-error"}>
                                <option value="">選択してください</option>
                                <option value="セミナー会場へ来場し参加する">セミナー会場へ来場し参加する</option>
                                <option value="Webオンラインにて参加する">Webオンラインにて参加する</option>
                              </select>
                            </div>
                            {errors?.method &&
                              <div className="crmr-error-msg">
                                {errors.method.type === "required" && "参加方法を選択してください。"}
                              </div>
                            }
                          </>}
                          {props.activeStep==1 && <>
                            <div className="crmr-conf-msg">{inputData?.method}</div>
                          </>}
                        </div>
                      </div>
                  }

                  {inputData?.mode !== "3"
                    && <div className="tr01">
                        <div className="th01">お見積り作成<span className='optional'>任意</span></div>
                        <div className="td02">
                          {props.activeStep==0 && <>
                            <div className="m-checkbox-1">
                              <input {...register("estimate")} type="checkbox" id="estimate" />
                              <label htmlFor="estimate">希望する　<span css={css`font-size: 14px;`}>※お見積内容の確認のため、ご連絡をさせていただきます。</span></label>
                            </div>
                          </>}
                          {props.activeStep==1 && <>
                            <div className="crmr-conf-msg">{inputData?.estimate ? "希望する" : "希望しない"}</div>
                          </>}
                        </div>
                      </div>
                  }

                  {props.activeStep==0 &&
                    <>
                      <p className="policy">
                      <p className="t02">個人情報の取扱いについて</p>
                      1.基本方針<br />株式会社セレモア（以下、「弊社」といいます）は、お客様の個人情報の重要性を認識し、個人情報の適切な管理を行うことが、弊社の事業活動の基本であると共に、弊社の社会的責務であると考えており、責任を持って個人情報を保護する為、以下の取り組みを行っております。<br />2.個人情報の定義<br />本プライバシーポリシーにおける「個人情報」とは、弊社が取り扱う業務（葬祭関連業務、ご遺体搬送業務、法事・法要、生花・花輪承り業務、仏壇・仏具販売業務、会員制運営業務等、以下、「弊社取り扱い業務」といいます）を通じてお客様からお預かりさせていただく、氏名、住所、電話番号、生年月日、メールアドレス等、お客様個人を識別できる情報を意味します。<br />3.安全管理措置<br />弊社は、お客様よりお預かりさせていただいた個人情報を適切にまた厳正に運用するため、個人情報を厳重に保管・管理し、第三者の不正なアクセスによる個人情報の漏洩・流用・改ざん及び紛失等を防止するセキュリティ対策を講じています。<br />4.組織体制<br />弊社は、個人情報の取扱いに関する規程に基づき、各部署に個人情報管理責任者を任命し、弊社内における個人情報保護を遵守するための組織体制を整備しております。<br />5.利用目的<br />弊社は、弊社取り扱い業務におけるサービス及び商品の提供、アドバイザーとしてのご案内、社内業務処理等を行うために利用いたします。また、弊社は、業務を円滑に進めるため、業務の一部を委託し、委託先に対して必要な範囲で個人情報を提供することがありますが、この場合、弊社は業務委託先との間で取り扱いに関する契約の締結をはじめ適切な監督を行います。<br />6.第三者への非公開<br />弊社は、お客様の個人情報を第三者に対して開示もしくは提供いたしません。ただし、次のいずれかの場合は開示もしくは提供することがあります。<br />1.お客様の同意がある場合。<br />2.弊社取り扱い業務に関連し、アドバイザー業務の一環としてお客様の個人情報を記載した書面を業務提携している企業（デパート、ギフト専門店、墓地・墓石専門店等、以下「提携企業」といいます）に送付して提供する場合。<br />なお、お客様が提携企業からのご案内を希望されない場合は、弊社にご連絡いただければ速やかに提供を停止いたします。<br />3.統計的なデータなど本人を識別できない状態で開示・提供する場合。<br />4.法令に定めのある場合。<br />7.共同利用<br />弊社がお預かりさせていただいている個人情報は、弊社のグループ会社が関連する事業のサービス・商品の提供及び情報提供のために共同利用させていただく場合がございます。この場合、弊社が責任をもって個人情報を管理いたします。<br />8.正確性の確保<br />お客様の個人情報は、正確かつ最新の状態を保つよう、適正な措置を講じております。<br />9.個人情報の開示・訂正・削除<br />弊社がお預かりするお客様の個人情報に関して、照会、訂正、削除等をご希望される場合には、速やかに対応させていただきます。<br />10.関係法令、ガイドライン等の遵守<br />弊社が保有する個人情報に関して適用される法令、ガイドライン及び規範等を遵守するとともに、本プライバシーポリシーにおける取り組みを適宜見直し、改善に努めます。<br />11.個人情報に関するお問い合わせ窓口<br />個人情報に関するお問い合わせは、下記窓口までお願い申し上げます。<br /><br />株式会社セレモア　個人情報管理担当<br />フリーダイヤル　0120-470-470</p>
                      <div className="tr01">
                        <div className="td02">
                          <div className="m-checkbox-1 agreement">
                            <input {...register("agree", {required: true})} className={errors?.agree && "crmr-error"} type="checkbox" id="agreement" />
                            <label htmlFor="agreement">個人情報保護方針に同意する</label>
                          </div>
                          {errors?.agree &&
                            <div className="crmr-error-msg agreement">
                              {errors.agree.type === "required" && "個人情報保護方針に同意してください"}
                            </div>
                          }
                        </div>
                      </div>
                    </>
                  }

                  {props.activeStep==0 && <>
                    <p className="submit m-btn-6">
                      {/* <input type="submit" value="入力内容を確認する" className="btn_submit" /> */}
                      <button type="submit" className="btn_submit" css={css`position: relative;`}>
                        <svg viewBox="0 0 359 63.53" preserveAspectRatio='none'>
                          <rect fill="#801a42" x="6.03" y="6.32" width="352.97" height="57.21"/>
                          <rect fill="none" x="0.07" y="0.25" width="352.39" height="57.21"/>
                          <rect fill="none" stroke="#801a42" x="0.5" y="0.5" width="351.53" height="56.7"/>
                          <rect fill="none" x="6.03" y="6.32" width="346.9" height="51.13"/>
                          <rect fill="none" stroke="#fff" x="6.47" y="6.58" width="346.03" height="50.63"/>
                          {/* <text fill="#fff" transform="translate(143.7 42.01)">確認する</text>
                          <path fill="#fff" d="M130.63,35.69l-7.09,3.54V32.14Z"/> */}
                        </svg>
                        <div css={css`
                          position: absolute;
                          top: 50%;
                          left: 50%;
                          margin-top: -16px;
                          margin-left: -63px;
                          @media screen and (max-width: 880px) {
                            margin-top: -11px;
                            margin-left: -56px;
                          }
                          @media screen and (max-width: 600px) {
                            margin-top: -8px;
                          }
                        `}>
                          ▶　確認する
                        </div>
                      </button>
                    </p>
                  </>}
                  {props.activeStep==1 && <>
                    <p className="submit m-btn-6">
                      <div className="conf-buttons">
                        <div className="u-hide-sp">
                          <Link href={`/contact/${path}`}>
                            <a><img src="/images/icon_arrow06.svg" alt="photo" /><span>入力に戻る</span></a>
                          </Link>
                        </div>
                        <div className="u-hide-pc">
                          <Link href={`/contact/${path}`}>
                            <a><img src="/images/icon_arrow01.svg" alt="photo" /><span>戻る</span></a>
                          </Link>
                        </div>
                        <button type="submit" className="btn_submit confirm-page">送信する</button>
                      </div>
                    </p>
                  </>}

                  </div>
                </form>
              </>}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Page

declare global {
  interface Window{
    [key: string]: any,
  }
}
