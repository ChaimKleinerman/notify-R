import styled from "styled-components";
import { FrameProps } from "./types/globalTypes";

export const Input = styled.div<FrameProps>`
  width: ${(props) => props.width || "300px"};
  height: ${(props) => props.height || "45px"};
  left: ${(props) => props.left || "40px"};
  top: ${(props) => props.top || "280px"};
  position: ${(props) => props.position || "absolute"};
  background: ${(props) => props.background || "#455A64"};
  @media(min-width: 780px){
    width: 476px;
    height: 40px;
    left:126px
    
  }
`;