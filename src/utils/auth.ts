import LocalStorageCache from '@/utils/cache';
import { TOKEN_NAME } from '../constants/index';
export const isUserAuth = () => {
  const isAuth = LocalStorageCache.getCache(TOKEN_NAME);
  return isAuth ? true : false;
};
