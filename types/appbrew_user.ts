export interface AppBrewUser {
  abstractName: string;
  slackChannel: string;
}

export const users: AppBrewUser[] = [
  {
    abstractName: 'yosshi',
    slackChannelSuffix: 'katsuki'
  },
  {
    abstractName: 'retoruto_carry',
    slackChannelSuffix: 'retoruto_carry',
  },
  {
    abstractName: 'ha1f',
    slackChannelSuffix: 'ha1f'
  },
  {
    abstractName: 'yrmts',
    slackChannelSuffix: 'yuri'
  },
  {
    abstractName: 'fukatsu',
    slackChannelSuffix: 'fukatsu'
  },
  {
    abstractName: 'natpenguin',
    slackChannelSuffix: 'natpenguin'
  },
  {
    abstractName:'yoko326',
    slackChannelSuffix: 'yoko'
  },
  {
    abstractName: 'takuyamukohira',
    slackChannelSuffix: 'mktakuya'
  },
  {
    abstractName: 'takuyamukohira1',
    slackChannelSuffix: 'mktakuya'
  },
  {
    abstractName: 'narazaka',
    slackChannelSuffix: 'narazaka'
  },
  {
    abstractName: 'taikikomaba',
    slackChannelSuffix: 'komaba'
  },
  {
    abstractName: 'anoworl',
    slackChannelSuffix: 'sota'
  },
  {
    abstractName: 'sglv',
    slackChannelSuffix: 'shogo'
  },
  {
    abstractName: 'abehsi',
    slackChannelSuffix: 'abeshi'
  },
  {
    abstractName: 'spinute',
    slackChannelSuffix: 'pin'
  },
  {
    abstractName: 'satomiarie',
    slackChannelSuffix: 'arie'
  },
  {
    abstractName: 'itosaki',
    slackChannelSuffix: 'itosaki'
  },
  {
    abstractName: 'pstsb',
    slackChannelSuffix: 'saki'
  },
  {
    abstractName: 'nishisuke',
    slackChannelSuffix: 'nishisuke'
  },
  {
    abstractName: 'raimufujio',
    slackChannelSuffix: 'raimu'
  },
  {
    abstractName: 'oyuk',
    slackChannelSuffix: 'oyuk'
  },
  {
    abstractName: 'natsumisasaki',
    slackChannelSuffix: 'naruse'
  },
  {
    abstractName: 'majello',
    slackChannelSuffix: 'majello'
  },
  {
    abstractName: 'jumpeimatsuda',
    slackChannelSuffix: 'daruma'
  },
  {
    abstractName: 'hiroshikikuchi',
    slackChannelSuffix: 'kikuchy'
  },
  {
    abstractName: 'fujinosuita1',
    slackChannelSuffix: 'fujino'
  },
  {
    abstractName: 'chihiroshiroku',
    slackChannelSuffix: 'shiroku'
  }
].map((u) => ({ ...u, slackChannel: `#misc_time_${u.slackChannelSuffix}` }))