import { useNavigate } from "react-router-dom";
import {Wrapper,LogoNotifyR,Container,Image,StyledDiv,} from '../../components-style/global.js';

export default function Login() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
      <StyledDiv
     width="312px"
     height="19px"
    >
      Welcome Back!
    </StyledDiv>
      </Container>
      <LogoNotifyR alt="Urgent bro" src="notify-R.jpg" onClick={()=>{navigate(-1)}}/>
          </Wrapper>
  )
}
