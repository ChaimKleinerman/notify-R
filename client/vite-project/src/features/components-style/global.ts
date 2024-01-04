import styled from "styled-components";
import  {StyledDivProps, image,FrameProps, TextFrameProps} from './types/globalTypes.js';
import { UseFormRegisterReturn } from 'react-hook-form';
export const Wrapper = styled.div`
  background-color: #212832;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
export const Container = styled.div`
  background-color: #212832;
  height: 926px;
  overflow: hidden;
  position: relative;
  width: 800px;
`;
export const Span = styled.span`
color: ${(props) => props.color || "#ffffff"};
`;

export const ButtonY = styled.button<StyledDivProps>`
  background-color: #fed36a;
  height: 40px;
  left: 40px;
  position: absolute;
  top: ${(props) => props.top || "750px"};
  width: 300px;
  
  @media (min-width: 781px) {
    width: 476px;
    height: 67px;
    left: 126px;

  }
`;
export const LogoNotifyR = styled.img`
  height: 48px;
  left: 20px;
  position: absolute;
  top: 20px;
  width: 61px;
  border-radius: 50px;
`;

export const TextWrapper = styled.div`
color: #000000;
font-family: "Inter-SemiBold", Helvetica;
font-size: 18px;
font-weight: 600;
left: 110px;
letter-spacing: 0;
line-height: 38px;
position: absolute;
top: 4px;
white-space: nowrap;
@media (min-width: 781px) {
  left: 185px;
  top: 14px;
}
`;

export const Image = styled.img<image>`
  height: ${(props) => props.height || "320px"};
  left: ${(props) => props.left || "5px"};
  position: absolute;
  top: ${(props) => props.top || "5px"};
  width: ${(props) => (props.width && window.innerWidth > 780) ? props.width : (props.width || "330px")};
  border-radius: ${(props) => props.borderRadius || "0px"};

  @media (min-width: 781px) {
    width: 430px;
  }
`;
export const StyledDiv = styled.div<StyledDivProps>`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  left: ${(props) => props.left || 'auto'};
  top: ${(props) => props.top || 'auto'};
  position: ${(props) => props.position || 'static'};
  background: ${(props) => props.background || 'transparent'};
  color: ${(props) => props.color || '#ffffff'};
  font-size: ${(props) => props.fontSize || 'inherit'};
  font-family: ${(props) => props.fontFamily || 'inherit'};
  font-weight: ${(props) => props.fontWeight || 'inherit'};
  line-height: ${(props) => props.lineHeight || 'inherit'};
  word-wrap: ${(props) => props.wordWrap || 'normal'};
  text-align: ${(props) => props.textAlign || 'center'};
  display:flex;
`;

export const Frame = styled.div<FrameProps>`
  width: ${(props) => props.width || "158px"};
  height: ${(props) => props.height || "47px"};
  left: ${(props) => props.left || "40px"};
  top: ${(props) => props.top || "532px"};
  position: ${(props) => props.position || "absolute"};
  background: ${(props) => props.background || "#455A64"};
  @media(max-width: 780px){
    width: 340px;
    height: 150px;
    
  }
`;

export const TextFrame = styled.div<TextFrameProps>`
  width: ${(props) => props.width || "700px"};
  height: ${(props) => props.height || "64px"};
  left: ${(props) => props.left || "126px"};
  top: ${(props) => props.top || "240px"};
  position: ${(props) => props.position || "absolute"};
  color: ${(props) => props.color || "white"};
  font-size: ${(props) => props.fontSize || "20px"};
  font-family: ${(props) => props.fontFamily || "Inter"};
  font-weight: ${(props) => props.fontWeight || "400"};
  line-height: ${(props) => props.lineHeight || "52px"};
  word-wrap: ${(props) => props.wordWrap || "break-word"};
  cursor: ${(props) => props.cursor || 'auto'};
  @media(max-width: 780px){
    width: 200px;
    font-size: 12px;
    line-height: 26px;
   
  }
`;



export const Input = styled.input<FrameProps>`
  width: ${(props) => props.width || '300px'};
  height: ${(props) => props.height || '45px'};
  left: ${(props) => props.left || '40px'};
  top: ${(props) => props.top || '280px'};
  position: ${(props) => props.position || 'absolute'};
  background: ${(props) => props.background || '#455A64'};
  padding: 10px;
  border: 1px solid #ccc;

  @media (min-width: 780px) {
    width: 476px;
    height: 40px;
    left: 80px;
  }
`;
