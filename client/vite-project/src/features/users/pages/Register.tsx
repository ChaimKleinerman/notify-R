import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  Wrapper,
  LogoNotifyR,
  Container,
  StyledDiv,
  TextFrame,
  TextWrapper,
  ButtonY,
  Input
} from '../../components-style/global.js';
import { User } from '../types/UserInfo.js';
export default function Register() {
  const { register, handleSubmit} = useForm();
  const navigate = useNavigate();

  const onSubmit = (data:any) => {
    console.log(data);
    navigate('/login');
  };

  return (
    <Wrapper>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledDiv
          >
            Create your account
          </StyledDiv>
          <TextFrame color="#8CAAB9" fontSize="16px">
            Full Name
          </TextFrame>
          <Input
            {...register("fullName")}
          />
          <TextFrame color="#8CAAB9" fontSize="16px" top="340px">
            Email Address
          </TextFrame>
          <Input
            top="380px"
            {...register("email")}

          />
          
          <TextFrame color="#8CAAB9" fontSize="16px" top="440px">
            Password
          </TextFrame>
          <Input
            type="password"
            top="480px"
            {...register("password")}
          />
          <ButtonY type="submit">
            <TextWrapper>Let’s Start</TextWrapper>
          </ButtonY>
        </form>
        <TextFrame color="#8CAAB9" fontSize="12px" top="550px">
         Already have an account? 
        </TextFrame>
        <TextFrame fontSize="16px" top="550px" color='#fed36a' left='255px' cursor='pointer' onClick={()=>{navigate('/login')}} >Log in</TextFrame>
      </Container>
      <LogoNotifyR
        alt="Urgent bro"
        src="notify-R.jpg"
        onClick={() => {
          navigate(-1);
        }}
      />
    </Wrapper>
  );
}