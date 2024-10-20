export interface IUser {
  id: number;
  username: string;
  email: string;
  _count: {
    following: number;
    follower: number;
  };
  profile: IProfile;
}

export interface IProfile {
  id: number;
  fullname?: string;
  avatar?: string;
  background?: string;
  bio?: string;
  userId?: number;
  followers?: number;
  following?: number;
}
