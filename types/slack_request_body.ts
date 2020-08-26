export interface SlackRequestBody {
  type: SourceService;
  channel: string;
  title: string;
  link: string;
  text: string;
  footer: string;
  user: User;
}

export interface User {
  avatarUrl: string;
  name: string;
  link?: string;
}

export interface SourceService {
  name: string;
  icon: string;
}

export const abstract: SourceService = {
  name: 'abstract',
  icon: 'https://storage.googleapis.com/telepa-4bfc1.appspot.com/avatar_0.png'
} 