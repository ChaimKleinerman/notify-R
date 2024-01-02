import styled from "styled-components";

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

export const Overlap = styled.div`
  background-color: #fed36a;
  height: 67px;
  left: 126px;
  position: absolute;
  top: 809px;
  width: 476px;
`;

export const TextWrapper = styled.div`
color: #000000;
font-family: "Inter-SemiBold", Helvetica;
font-size: 18px;
font-weight: 600;
left: 185px;
letter-spacing: 0;
line-height: 38px;
position: absolute;
top: 14px;
white-space: nowrap;
`;
