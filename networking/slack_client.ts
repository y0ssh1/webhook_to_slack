import { SlackRequestBody } from "../types/slack_request_body";
import axios from "axios";

export const postToSlack = (body: SlackRequestBody) => {
  const data = {
    username: body.type.name,
    icon_url: body.type.icon,
    channel: '#misc_time_katsuki',
    as_user: false,
    attachments: {
      fallback: body.text,
      color: "#ffb432",
      author_link: body.user.link || '',
      author_icon: body.user.avatarUrl,
      title: body.title,
      title_link: body.link,
      text: body.text,
      footer: body.footer,
      footer_icon: body.type.icon,
      ts: Math.floor(new Date().getTime() / 1000),
    }
  }
  
  axios.post('https://slack.com/api/chat.postMessage', data, {
    headers: {
      'Authorization': `Bearer ${process.env.SLACK_TOKEN}`,
      'Content-Type': 'application/json',
    }
  })
}