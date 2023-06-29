import React from 'react';
import { IChildren } from '../../type/types';
import * as Styled from './Layout.styled';

const Layout: React.FC<IChildren> = ({ children }) => {
  return <Styled.Wraper>{children}</Styled.Wraper>;
};

export default Layout;
