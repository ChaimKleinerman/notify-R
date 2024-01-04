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
    console.log('login');
    navigate('/');
  };
  

  return (
    <Wrapper>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledDiv
            width="250px"
            height="39px"
            left="34px"
            top="132px"
            position="absolute"
            color="white"
            fontSize="36px"
            fontFamily="Inter"
            fontWeight="600"
            lineHeight="27.5px"
            wordWrap="break-word"
          >
            Welcome Back!
          </StyledDiv>
          
          <TextFrame color="#8CAAB9" fontSize="16px" top="250px">
            Email Address
          </TextFrame>
          <Input
            top="300px"
            {...register("email")}

          />
          
          <TextFrame color="#8CAAB9" fontSize="16px" top="350px">
            Password
          </TextFrame>
          <Input
            type="password"
            top="400px"
            {...register("password")}
          />
            <TextFrame color="#8CAAB9" fontSize="12px" top="500px">
         Don't have an account? 
        </TextFrame>
        <TextFrame fontSize="16px" top="500px" color='#fed36a' left='255px' cursor='pointer' onClick={()=>{navigate('/register')}} >Sign Up</TextFrame>
          <ButtonY type="submit">
            <TextWrapper>Log in</TextWrapper>
          </ButtonY>
        </form>
      
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