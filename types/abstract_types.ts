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
  data: { object: AbstractWebHookCommentData }
}

export interface AbstractWebHookCommentData {
  body: string;
  createdAt: string;
  commenter: AbstractUser;
  fileId: string;
  branchId: string;
  projectId: string;
  layerName: string;
  commitSha: string;
}

export interface AbstractUser {
  avatarUrl: string;
  name: string;
  username: string;
}