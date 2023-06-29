import HomeContainer from '../../components/HomeContainer/HomeContainer';
import HomeLayout from '../../components/HomeLayout/HomeLayout';
import Logo from '../../components/Logo/Logo';
import decorImg from '../../assets/Decor.png';
import image from '../../assets/Image.png';
import * as Styled from './Home.styled';

const Home = () => {
  return (
    <HomeLayout>
      <HomeContainer>
        <Logo />
        <Styled.Container>
          <Styled.WelcomeWraper>
            <Styled.Title>Congratulations</Styled.Title>
            <Styled.DecorImg src={decorImg} alt="decor" />
          </Styled.WelcomeWraper>
          <Styled.TextWtaper>
            <Styled.Text>
              Now you are on the main page. Soon we will provide you with detailed feedback on the
              result of your work
            </Styled.Text>
          </Styled.TextWtaper>
          <Styled.Button type="button">Log Out</Styled.Button>
          <Styled.Image src={image} alt="image" />
        </Styled.Container>
      </HomeContainer>
    </HomeLayout>
  );
};

export default Home;
