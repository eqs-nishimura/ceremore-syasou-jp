import { S3Client } from "@aws-sdk/client-s3";

// AWSリージョンを設定します。
const REGION = "ap-northeast-1"; //e.g. "us-east-1"
// S3のクライアントオブジェクトを作成します。
// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/interfaces/s3clientconfig.html
const s3Client = new S3Client({ region: REGION });

export { s3Client };

// ReadableStream からバイトデータを読み出して Bufferに結合して返します。
export function streamToBuffer(stream: any): Promise<Buffer> {
    // const buf: Buffer[] = []
    // for await (const chunk of yieldUint8Chunks(stream)) {
    //     buf.push(Buffer.from(chunk as Uint8Array))
    // }
    // return Buffer.concat(buf)
    return new Promise((resolve, reject) => {
        try{
            const chunks: Uint8Array[] = [];
            stream.on("data", (chunk:Uint8Array) => chunks.push(chunk));
            stream.on("error", reject);
            stream.on("end", () => resolve(Buffer.concat(chunks)));
        }catch(e){
            reject(e);
        }
    });
}

// async function* yieldUint8Chunks(stream: ReadableStream<Uint8Array>) {
//     const reader = stream.getReader()
//     try {
//         while (true) {
//             const { done, value } = await reader.read()
//             if (done) return
//             yield value
//         }
//     } finally {
//         reader.releaseLock()
//     }
// }