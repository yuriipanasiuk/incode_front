import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCustomSelector } from '../redux/selectors';
import { IRouteProps } from '../type/types';

export const RestrictedRegisterRoute: React.FC<IRouteProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { getIsRegiser: isRegister } = useCustomSelector();
  return isRegister ? <Navigate to={redirectTo} /> : <Component />;
};
