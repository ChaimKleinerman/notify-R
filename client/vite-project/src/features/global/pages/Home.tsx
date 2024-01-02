import {Wrapper,Container,Span,Overlap,TextWrapper} from '../../../components-style/global.js'
import {ManageYourTask,OverlapGroup,WorkInProgress,LogoNotifyR} from '../../../components-style/homePage.js'

const Home = () => {
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
        <Overlap>
          <TextWrapper>Let’s Start</TextWrapper>
        </Overlap>
        <OverlapGroup>
          <WorkInProgress alt="Work in progress" src="./a.jpg"/>
        </OverlapGroup>
      </Container>
      <LogoNotifyR alt="Urgent bro" src="notify-R.jpg"/>
    </Wrapper>
  );
};

export default Home;
