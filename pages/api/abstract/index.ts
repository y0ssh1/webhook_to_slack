import { NextApiRequest, NextApiResponse } from 'next'
import { AbstractWebHookMessage } from '../../../types/abstract_types'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == 'POST') {
    const requestBody = req.body as AbstractWebHookMessage;
    console.log(requestBody.event);
    if (requestBody.event == 'comment.created') {
      console.log(requestBody.data.object);
      res.status(200).json(requestBody.data.object);
    } else {
      res.status(200);
    }
  }
}

export default handler
