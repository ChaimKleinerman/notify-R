import { useNavigate } from "react-router-dom";
import {Wrapper,LogoNotifyR,Container,Image,StyledDiv,} from '../../components-style/global.js';

export default function Register() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
      <StyledDiv
     width="403px"
     height="18px"
     top="400px"
     fontWeight="600"
    >
      Welcome Back!
    </StyledDiv>
      </Container>
      <LogoNotifyR alt="Urgent bro" src="notify-R.jpg" onClick={()=>{navigate(-1)}}/>
          </Wrapper>
  )
}