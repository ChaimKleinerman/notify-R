import {Container,Span,ButtonY,TextWrapper,LogoNotifyR,Image, Paragraph} from '../../components-style/global.js'
import {OverlapGroup} from '../../components-style/homePage.js'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Paragraph>
          <Span>
            Manage 
            your
            Task with 
          </Span>
          <Span color = '#fed36a'> Notify-R</Span>
        </Paragraph>
        <ButtonY>
          <TextWrapper onClick={()=>{navigate('/tasks')}}>Let’s Start</TextWrapper>
        </ButtonY>
        <OverlapGroup>
          <Image alt="Work in progress" src="./a.jpg"/>
        </OverlapGroup>
      </Container>
      <LogoNotifyR alt="Urgent bro" src="notify-R.jpg"/>
      </>
  );
};

export default Home;
