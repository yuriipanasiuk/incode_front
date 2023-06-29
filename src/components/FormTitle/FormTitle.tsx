import React from 'react';
import { IChildren } from '../../type/types';
import * as Styled from './FormTitle.styled';

const FormTitle: React.FC<IChildren> = ({ children }) => {
  return <Styled.Title>{children}</Styled.Title>;
};

export default FormTitle;
