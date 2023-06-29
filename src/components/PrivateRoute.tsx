import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCustomSelector } from '../redux/selectors';
import { IRouteProps } from '../type/types';

export const PrivateRoute: React.FC<IRouteProps> = ({ component: Component, redirectTo = '/' }) => {
  const { getIsLoggedIn: isLoggedIn, getIsRefreshing: isRefreshing } = useCustomSelector();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
