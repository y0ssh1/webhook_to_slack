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
  icon: 'https://pbs.twimg.com/profile_images/1145737312837545984/MrfJUSa4_400x400.png'
} 