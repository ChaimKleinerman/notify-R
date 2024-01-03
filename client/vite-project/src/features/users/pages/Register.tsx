import { useNavigate } from "react-router-dom";
import {Wrapper,LogoNotifyR,Container,Image,StyledDiv, TextFrame, Frame,TextWrapper,ButtonY} from '../../components-style/global.js';
import { Input } from "../../components-style/register.js";

export default function Register() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
      <StyledDiv width="231px" height="39px" left="34px" top="132px" position="absolute" color="white" fontSize="36px" fontFamily="Inter" fontWeight="600" lineHeight="27.5px" wordWrap="break-word">
        Create your account
      </StyledDiv>
      <TextFrame color="#8CAAB9" fontSize="16px"
  >
    Full Name
  </TextFrame>
  <Input />
  <TextFrame color="#8CAAB9" fontSize="16px"
  top="340px"  >
    Email Address
  </TextFrame>
  <Input top="380px"/>
  <TextFrame color="#8CAAB9" fontSize="16px"
  top="440px"  >
    Password
  </TextFrame>
  <Input top="480px"/>
  <ButtonY>
          <TextWrapper onClick={()=>{navigate('/register')}}>Let’s Start</TextWrapper>
        </ButtonY>
      </Container>
      <LogoNotifyR alt="Urgent bro" src="notify-R.jpg" onClick={()=>{navigate(-1)}}/>
          </Wrapper>
  )
}