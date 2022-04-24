import { NextApiResponse } from 'next';
import { NextApiRequest } from 'next';
type Method = "GET" | "POST" | "DELETE"

export default function withHandler(method: Method, fn:(req:NextApiRequest,res:NextApiResponse) => void) {


    return async function(req:NextApiRequest,res:NextApiResponse) {

        if(req.method !== method) {
            return res.status(405).end()
        }
        try {
            return await fn(req,res);
        } catch(e) {
            console.log(e)
            return res.status(500).json(e)
        }
    }

}