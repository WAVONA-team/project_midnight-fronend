import { type AxiosResponse } from 'axios';
import { NormalizedUser, UserWithAccessToken } from 'project_midnight/types';

export type UserState = {
  user: NormalizedUser | null;
  isChecked: boolean;
  register: (email: string, password: string) => Promise<NormalizedUser>;
  verify: (activationToken: string) => Promise<UserWithAccessToken>;
  registerSpotify: () => Window | null;
  login: (email: string, password: string) => Promise<UserWithAccessToken>;
  logout: () => Promise<AxiosResponse>;
  checkAuth: () => Promise<UserWithAccessToken | void>;
};
