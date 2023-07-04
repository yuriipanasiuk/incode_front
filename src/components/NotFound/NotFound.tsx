import HomeContainer from '../HomeContainer/HomeContainer';
import * as Styled from './NotFound/NotFound.styled';

export const NotFound = () => (
  <HomeContainer>
    <Styled.ErrorPageText>404</Styled.ErrorPageText>
    <Styled.NoticeText>Opps, we have an error</Styled.NoticeText>
    <Styled.Layout>
      <Styled.DirectionText>go back to</Styled.DirectionText>
      <Styled.Link to="/"> Home page</Styled.Link>
    </Styled.Layout>
  </HomeContainer>
);
