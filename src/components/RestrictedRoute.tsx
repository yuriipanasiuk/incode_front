import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCustomSelector } from '../redux/selectors';
import { IRouteProps } from '../type/types';

export const RestrictedRoute: React.FC<IRouteProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { getIsLoggedIn: isLoggedIn } = useCustomSelector();
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
