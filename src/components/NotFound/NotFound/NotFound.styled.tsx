import styled from '@emotion/styled';

import { Link as LinkHome } from 'react-router-dom';

export const Link = styled(LinkHome)`
  text-transform: uppercase;
  font-weight: 700;
  color: black;
  :hover {
    color: silver;
    scale: 1.1;
  }
`;

export const ErrorPageText = styled('p')`
  font-size: 200px;
  text-align: center;
  margin-bottom: 20px;
`;

export const NoticeText = styled('p')`
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 48px;
  margin-bottom: 20px;
`;

export const DirectionText = styled('p')`
  margin-right: 20px;
`;

export const Layout = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
`;
