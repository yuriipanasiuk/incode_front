import { useAppSelector } from '../hooks/authHook';

export const useCustomSelector = () => {
  return {
    getIsLoggedIn: useAppSelector(state => state.auth.isLoggedIn),
    getUser: useAppSelector(state => state.auth.user),
    getIsRefreshing: useAppSelector(state => state.auth.isRefreshing),
    getIsRegiser: useAppSelector(state => state.auth.isRegister),
  };
};
