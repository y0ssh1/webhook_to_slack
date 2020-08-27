import { SlackRequestBody, abstract } from "../types/slack_request_body";
import { AbstractWebHookCommentData } from "../types/abstract_types";

export interface SlackRequestBodyService {
  convertFromAbstractComment: (message: AbstractWebHookCommentData) => SlackRequestBody;
}

export const slackRequestBodyService = () => {

  const convertFromAbstractComment = (message: AbstractWebHookCommentData, channel: string) => {
    return {
      type: abstract,
      channel,
      title: `Comment on ${message.layerName}`,
      link: `https://app.abstract.com/projects/${message.projectId}/branches/${message.branchId}/commits/${message.commitSha}/files/${message.fileId}/layers/${message.layerName}`,
      text: message.body,
      footer: message.commenter.name,
      user: {
        avatarUrl: message.commenter.avatarUrl,
        name: message.commenter.name,
      },
    }
  }

  return {
    convertFromAbstractComment
  }
}