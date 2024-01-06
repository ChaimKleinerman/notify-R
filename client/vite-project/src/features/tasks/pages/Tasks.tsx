import React from 'react';
import { useNavigate } from "react-router-dom";
import {Wrapper,LogoNotifyR,Container,Image,StyledDiv,Frame, TextFrame, Input, ButtonY, TextWrapper} from '../../components-style/global.js';
import { FrameTask1, FrameTask2, ImageProfile } from '../../components-style/taskDetails.js';

export default function Tasks() {
    const navigate = useNavigate();

    return (
      <>
        <Container>
        <StyledDiv fontSize='20px'>
     Chaim Kleinerman
      </StyledDiv>
      <Input
            type="password"
            top="190px"
            placeholder='Search'
            
          />          
          <StyledDiv left="80px" top="260px"  fontSize="18px">
     your real time notify
      </StyledDiv>
      <FrameTask1 top='350px' left='80px' width='190px' height='120px'>
      <StyledDiv left="8px" top="4px" position="absolute"  fontSize="18px" >
     Buy Milk
      </StyledDiv>
      <TextFrame  fontSize="12px" top="18px" left='8px' color='white'>
            team members
            <ImageProfile src="/avatar2.jpg" alt = 'avatar' height='21px' width = '23px' borderRadius='9999px' left='1px' top='43px'/>
            <ImageProfile src="/avatar1.jpg" alt = 'avatar' height='21px' width = '23px' borderRadius='9999px' left='20px' top='43px'/>

          </TextFrame>
          <TextFrame  fontSize="12px" top="70px" left='8px'>
            alert event: 12:00
            
          </TextFrame>
     </FrameTask1>
      
      <FrameTask1 top='350px' left='280px' width='190px' height='120px'>
      <TextFrame left="8px" top="8px" position="absolute" color="white" fontSize="18px" fontFamily="Inter" fontWeight="400" lineHeight="18.86px" wordWrap="break-word">
     Take the Child to school
      </TextFrame>
      <TextFrame  fontSize="12px" top="16px" left='8px'>
            team members
            <ImageProfile src="/avatar2.jpg" alt = 'avatar' height='21px' width = '23px' borderRadius='9999px' left='1px' top='43px'/>

          </TextFrame>
          <TextFrame  fontSize="12px" top="69px" left='8px' >
            alert event: 12:45
            
          </TextFrame>
        </FrameTask1>
      
          <ButtonY type="submit" top='600px' onClick={()=>navigate('/taskDetails')}>
            <TextWrapper>Add Notify</TextWrapper>
          </ButtonY>
            </Container>
            <LogoNotifyR alt="Urgent bro" src="notify-R.jpg" onClick={()=>{navigate(-1)}}/>
            </>
  )
}
