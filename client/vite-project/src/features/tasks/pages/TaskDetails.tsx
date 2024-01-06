import React from 'react';
import { useNavigate } from "react-router-dom";
import {Wrapper,LogoNotifyR,Container,Image,StyledDiv,Frame, TextFrame} from '../../components-style/global.js';
import { FrameTask1, FrameTask2, ImageProfile } from '../../components-style/taskDetails.js';

const taskDetails: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
      <StyledDiv left="149px" top="38px" position="absolute" color="white" fontSize="18px" fontFamily="Inter" fontWeight="400" lineHeight="18.86px" wordWrap="break-word">
     Buy Milk
      </StyledDiv>
      <StyledDiv width="231px" height="39px" left="34px" top="132px" position="absolute" color="white" fontSize="36px" fontFamily="Inter" fontWeight="600" lineHeight="27.5px" wordWrap="break-word">
        Task Details
      </StyledDiv>
      <Frame width="944px" height="196px" left="30px" top="213px" position="absolute" background="#455A64" />
      <TextFrame width="700px" height="64px" left="60px" top="221px" position="absolute" color="white" fontSize="20px" fontFamily="Inter" fontWeight="400" lineHeight="52px" wordWrap="break-word">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </TextFrame>
      <StyledDiv left="31px" top="450px" position="absolute" color="white" fontSize="20px" fontFamily="Inter" fontWeight="600" lineHeight="27.5px" wordWrap="break-word">
        Team Members
      </StyledDiv>
      <StyledDiv width="158px" height="47px" left="40px" top="532px" position="absolute" background="#455A64" />
      <StyledDiv width="48px" height="32px" left="78px" top="538px" position="absolute" color="white" fontSize="14px" fontFamily="Inter" fontWeight="500" lineHeight="27.5px" wordWrap="break-word">
          Robert
          <ImageProfile src="/avatar2.jpg" alt = 'avatar' height='21px' width = '23px' borderRadius='9999px' left='50px'/>
        </StyledDiv>

      <StyledDiv width="158px" height="47px" left="209px" top="531px" position="absolute" background="#455A64" />
      <StyledDiv width="49px" height="32px" left="254px" top="537px" position="absolute" color="white" fontSize="14px" fontFamily="Inter" fontWeight="500" lineHeight="27.5px" wordWrap="break-word">
        Sophia
        <ImageProfile src="/avatar1.jpg" alt = 'avatar' height='21px' width = '23px' borderRadius='9999px' left='50px'/>
      </StyledDiv>
      <StyledDiv left="44px" top="641px" position="absolute" color="white" fontSize="36px" fontFamily="Inter" fontWeight="600" lineHeight="27.5px" wordWrap="break-word">
        Time & Date
      </StyledDiv>

<FrameTask2 background='#455A64' left='90px' width='160px'/>
<FrameTask2/>
      <TextFrame width="101px" height="38px" left="131px" top="723px" position="absolute"  color="white" fontSize="18px" fontFamily="Inter" fontWeight="500" lineHeight="27.5px" wordWrap="break-word">
        10:30 AM
      </TextFrame>
      <FrameTask2 width="51px" height="56px" left="272px" top="713px" position="absolute" background="#FED36A" />

     <FrameTask2 width="168px" height="56px" left="323px" top="713px" position="absolute" background="#455A64" />
      <TextFrame width="118px" height="38px" left="349px" top="723px" position="absolute"  color="white" fontSize="18px" fontFamily="Inter" fontWeight="500" lineHeight="27.5px" wordWrap="break-word">
        15/11/2022
      </TextFrame>

      </Container>
      <LogoNotifyR alt="Urgent bro" src="notify-R.jpg" onClick={()=>{navigate(-1)}}/>
    </Wrapper>
  );
};

export default taskDetails;
