import {Wrapper,Container,Span,ButtonY,TextWrapper,LogoNotifyR,Image} from '../../components-style/global.js'
import {ManageYourTask,OverlapGroup} from '../../components-style/homePage.js'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <ManageYourTask>
          <Span>
            Manage 
            your
            Task with 
          </Span>
          <Span color = '#fed36a'> Notify-R</Span>
        </ManageYourTask>
        <ButtonY>
          <TextWrapper onClick={()=>{navigate('/register')}}>Let’s Start</TextWrapper>
        </ButtonY>
        <OverlapGroup>
          <Image alt="Work in progress" src="./a.jpg"/>
        </OverlapGroup>
      </Container>
      <LogoNotifyR alt="Urgent bro" src="notify-R.jpg"/>
    </Wrapper>
  );
};

export default Home;
