import { createClient } from '@/shared/http';

import { ServerErrors } from '../types';

const authClient = createClient();

const register = async (email: string, password: string) => {
  return await authClient
    .post('/register', {
      email,
      password,
    })
    .catch((serverErrors) => {
      const { fieldErrors, formErrors }: ServerErrors =
        serverErrors.response.data;

      throw { fieldErrors, formErrors };
    });
};

const verify = async (activationToken: string) => {
  return await authClient
    .get(`/verify/${activationToken}`)
    .catch((serverErrors) => {
      const { fieldErrors, formErrors }: ServerErrors =
        serverErrors.response.data;

      throw { fieldErrors, formErrors };
    });
};

const login = async (email: string, password: string) => {
  return await authClient
    .post('/login', {
      email,
      password,
    })
    .catch((serverErrors) => {
      const { fieldErrors, formErrors }: ServerErrors =
        serverErrors.response.data;

      throw { fieldErrors, formErrors };
    });
};

const refresh = async () => {
  return authClient.get('/refresh');
};

const logout = async () => {
  return await authClient.post('/logout');
};

export const authClientActions = {
  register,
  verify,
  login,
  refresh,
  logout,
};
