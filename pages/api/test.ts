import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  [key:string]: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(req.headers);
};