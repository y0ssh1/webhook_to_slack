export type AbstractEventType = 'project.created'
  | 'project.updated'
  | 'project.deleted'
  | 'branch.created'
  | 'branch.updated'
  | 'branch.statusUpdated'
  | 'commits.created'
  | 'comment.created'
  | 'comment.updated'
  | 'comment.deleted'

export interface AbstractWebHookMessage {
  createdAt: string;
  event: AbstractEventType;
  description: string;
  data: { object: AbstractWebHookMessageData }
}

export interface AbstractWebHookMessageData {
  about: string | null
  createdAt: string,
  createdByUser: AbstractUser
}

export interface AbstractUser {
  avatarUrl: string;
  name: string;
  username: string;
}