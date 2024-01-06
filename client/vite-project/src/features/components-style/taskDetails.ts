import styled from "styled-components";
import  {StyledDivProps, image} from './types/globalTypes.js';
import { FrameTaskProps } from "./types/taskTypes.js";

export const ImageProfile = styled.img<image>`
  height: ${(props) => props.height || "320px"};
  left: ${(props) => props.left || "5px"};
  position: absolute;
  top: ${(props) => props.top || "5px"};
  width: ${(props) => props.width || "330px"};
  border-radius: ${(props) => props.borderRadius || "0px"};
`;

export const FrameTask1 = styled.div<FrameTaskProps>`
  width: ${(props) => props.width || "168px"};
  height: ${(props) => props.height || "56px"};
  left: ${(props) => props.left || "97px"};
  top: ${(props) => props.top || "713px"};
  position: ${(props) => props.position || "absolute"};
  background: ${(props) => props.background || "#455A64"};
  @media (max-width: 781px) {
    width: 140px;
    height: 100px;
  }
`;

export const FrameTask2 = styled.div<FrameTaskProps>`
  width: ${(props) => props.width || "51px"};
  height: ${(props) => props.height || "56px"};
  left: ${(props) => props.left || "46px"};
  top: ${(props) => props.top || "713px"};
  position: ${(props) => props.position || "absolute"};
  background: ${(props) => props.background || "#FED36A"};
  display: flex;
  
`;