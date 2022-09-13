import { createTransport } from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  success: boolean;
  mode: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const transporter = createTransport({
    host: process.env.EMAIL_HOST!,
    secure: false,
    auth: {
      user: process.env.EMAIL!,
      pass: process.env.EMAIL_PASSWORD!,
    },
  });

  let usrSbj = "【社葬のセレモア】";
  let adminSbj = "【社葬のセレモア】社葬サイトより";
  if(req.body.mode === "1") {
    usrSbj += "お問い合わせありがとうございます";
    adminSbj += "お問い合わせがありました";
  } else if(req.body.mode === "2") {
    usrSbj += "資料請求ありがとうございます";
    adminSbj += "資料請求がありました";
  } else {
    usrSbj += "社葬セミナーお申し込みありがとうございます";
    adminSbj += "社葬セミナー申し込みがありました";
  }

  // // お客さんに送信
  await transporter.sendMail({
    from: process.env.EMAIL!,
    to: req.body.email,
    subject: usrSbj,
    text: toUserMsg(req),
  });

  // // 管理者に送信
  await transporter.sendMail({
    from: process.env.EMAIL!,
    to: process.env.EMAIL!,
    subject: adminSbj,
    text: toAdminMsg(req),
  });

  res.status(200).json({
    success: true,
    mode: parseInt(req.body.mode),
  });
};

function toUserMsg(req: NextApiRequest): string {
  let msg = "";

  if(req.body.mode === "1") {
    msg = `このたびはお問い合わせを頂きまして、誠にありがとうございます。

お問い合わせに関しましては、
なるべく早くご対応させていただきますので、お待ち頂けますでしょうか。
何卒宜しくお願い申し上げます。
    `;
  } else if(req.body.mode === "2") {
    msg = `このたびは資料請求、誠にありがとうございます。

ご入力頂いたご住所宛に近日中に資料をご郵送させていただきます。
何卒宜しくお願い申し上げます。
    `;
  } else {
    msg = `このたびは社葬セミナーにお申込みいただき、誠にありがとうございます。

近日中にこちらよりご連絡させていただきます。
何卒宜しくお願い申し上げます。
`;
  }

  msg += `
-----------------------------------------------------
${req.body.mode === "3" ? `
【受講日】
${req.body.classDate}

` : ""}
【貴社名】
${req.body.company}

【部署名】
${req.body.company}

【ご担当者名】
${req.body.surname} ${req.body.givenName}

【ふりがな】
${req.body.surnameKana} ${req.body.givenNameKana}

【ご住所】
${req.body.zipcode && `〒${req.body.zipcode}　`}${req.body.address}

${req.body.mode === "3" ? `
【ご参加者様 お名前1】
${req.body.attendanceSurname} ${req.body.attendanceGivenName}

【ご参加者様 ふりがな1】
${req.body.attendanceSurname} ${req.body.attendanceGivenName}

【ご参加者様 お名前2】
${req.body.attendanceSurname2} ${req.body.attendanceGivenName2}

【ご参加者様 ふりがな2】
${req.body.attendanceSurname2} ${req.body.attendanceGivenName2}

` : ""}
【電話番号】
${req.body.tel}

【メールアドレス】
${req.body.email}
${req.body.mode === "2" ? `
【資料を希望する】
希望する

` : ""}${req.body.mode === "3" ? `
【お申込みの経緯】
${req.body.background}

` : ""}
【${req.body.mode !== "3" ? "お問い合わせ内容" : "予めご質問がございましたらご記入ください"}】
${req.body.details}
${req.body.mode === "3" ? `
【セミナーの参加方法】
${req.body.method}

` : ""}
【お見積り作成】
${req.body.estimate ? "希望する　※お見積内容の確認のため、ご連絡をさせていただきます。" : "希望しない"}

-----------------------------------------------------
株式会社セレモア
〒190-8566
東京都立川市柏町1-26-4
TEL：042-534-1111　FAX：042-534-2333
メール：info@ceremore.co.jp
ホームページ：https://www.ceremore.co.jp/
`;

  return msg;
}

function toAdminMsg(req: NextApiRequest): string {
  let msg = `${req.body.mode === "3" ? `社葬サイトよりセミナーの参加希望を受け付けました。` : req.body.mode === "1" ? `社葬サイトよりお問い合わせを受け付けました。` : `社葬サイトより資料請求を受け付けました。`}
-----------------------------------------------------
${req.body.mode === "3" ? `
【受講日】
${req.body.classDate}

` : ""}
【貴社名】
${req.body.company}

【部署名】
${req.body.company}

【ご担当者名】
${req.body.surname} ${req.body.givenName}

【ふりがな】
${req.body.surnameKana} ${req.body.givenNameKana}

【ご住所】
${req.body.zipcode && `〒${req.body.zipcode}　`}${req.body.address}

${req.body.mode === "3" ? `
【ご参加者様 お名前1】
${req.body.attendanceSurname} ${req.body.attendanceGivenName}

【ご参加者様 ふりがな1】
${req.body.attendanceSurname} ${req.body.attendanceGivenName}

【ご参加者様 お名前2】
${req.body.attendanceSurname2} ${req.body.attendanceGivenName2}

【ご参加者様 ふりがな2】
${req.body.attendanceSurname2} ${req.body.attendanceGivenName2}

` : ""}
【電話番号】
${req.body.tel}

【メールアドレス】
${req.body.email}
${req.body.mode === "2" ? `
【資料を希望する】
希望する

` : ""}${req.body.mode === "3" ? `
【お申込みの経緯】
${req.body.background}

` : ""}
【${req.body.mode !== "3" ? "お問い合わせ内容" : "予めご質問がございましたらご記入ください"}】
${req.body.details}
${req.body.mode === "3" ? `
【セミナーの参加方法】
${req.body.method}

` : ""}
【お見積り作成】
${req.body.estimate ? "希望する　※お見積内容の確認のため、ご連絡をさせていただきます。" : "希望しない"}
`;
  return msg;
}