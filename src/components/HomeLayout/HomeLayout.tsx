import React from 'react';
import { IChildren } from '../../type/types';
import * as Styled from './HomeLayout.styled';

const HomeLayout: React.FC<IChildren> = ({ children }) => {
  return <Styled.Wraper>{children}</Styled.Wraper>;
};

export default HomeLayout;
