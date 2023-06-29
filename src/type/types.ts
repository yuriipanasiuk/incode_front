import { ComponentType, ReactNode } from 'react';

export interface IChildren {
  children: ReactNode;
}

export interface IRegister {
  fullName: string;
  userName: string;
  password: string;
  confirmPassword: string;
}

export interface ILogin {
  userName: string;
  password: string;
}

export type RootState = {
  auth: {
    user: {
      fullName: string;
      userName: string;
    };
    accessToken: string | null;
    refreshToken: string | null;
    isLoggedIn: boolean;
    isRefreshing: boolean;
    isRegistered: boolean;
  };
};

export type LoginCredential = {
  fullName?: string;
  userName: string;
  password: string;
  confirmPassword?: string;
};

export type RegisterCredential = {
  fullName: string;
  userName: string;
  password: string;
  confirmPassword: string;
};

export interface IRouteProps {
  component: ComponentType;
  redirectTo?: string;
}
