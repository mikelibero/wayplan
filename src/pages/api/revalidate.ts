import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  return res.json({ revalidated: true })

  // if (req.headers['x-secret'] !== process.env.MY_SECRET_TOKEN) {
  //   return res.status(401).json({ message: 'Invalid token' })
  // }
  // try {
  //   await res.revalidate("/")
  //   return res.json({ revalidated: true })
  // } catch (err) {
  //   return res.status(500).send('Error revalidating')
  // }
}