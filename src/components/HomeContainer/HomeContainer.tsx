import React from 'react';
import { IChildren } from '../../type/types';
import * as Styled from './HomeContainer.styled';

const HomeContainer: React.FC<IChildren> = ({ children }) => {
  return <Styled.Wraper>{children}</Styled.Wraper>;
};

export default HomeContainer;
