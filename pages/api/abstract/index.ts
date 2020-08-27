import { NextApiRequest, NextApiResponse } from 'next'
import { AbstractWebHookMessage } from '../../../types/abstract_types'
import { slackRequestBodyService } from '../../../services/slack_request_body_service';
import { extractUserService } from '../../../services/extract_user_service';
import { SlackRequestBody } from '../../../types/slack_request_body';
import { postToSlack } from '../../../networking/slack_client';

const { abstractComment } = extractUserService();
const { convertFromAbstractComment } = slackRequestBodyService();

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == 'POST') {
    const requestBody = req.body as AbstractWebHookMessage;
    if (requestBody.event == 'comment.created') {
      const users = abstractComment(requestBody.data.object.body);
      Promise.all(users.
        map((u) => convertFromAbstractComment(req.body.object, u.slackChannel)).
        map((body: SlackRequestBody) => postToSlack(body)));
      res.status(200).json({ ok: true });
    } else {
      res.status(200);
    }
  }
}

export default handler
