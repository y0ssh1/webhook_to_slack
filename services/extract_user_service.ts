import { AppBrewUser, users } from "../types/appbrew_user"

export const extractUserService = () => {
  const userRegexp = /@[A-Za-z0-9-/]+/g;

  const abstractComment = (text: string) => {
    const replyIds = text.match(userRegexp);
    if (replyIds === null) {
      return [];
    }
    return users.filter((user: AppBrewUser) => replyIds.includes(`@${user.abstractName}`));
  }

  const githubComment = (text: string) => {
    const replyIds = text.match(userRegexp);
    if (replyIds === null) {
      return [];
    }
    //TODO: filter githubId
    return users;
  }

  return {
    abstractComment,
    githubComment
  }
}