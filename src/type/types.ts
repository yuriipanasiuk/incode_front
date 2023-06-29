import { ReactNode } from 'react';

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
