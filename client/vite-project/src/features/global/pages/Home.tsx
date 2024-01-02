import styled from "styled-components";
const SplashWrapper = styled.div`
  background-color: #212832;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const SplashContainer = styled.div`
  background-color: #212832;
  height: 926px;
  overflow: hidden;
  position: relative;
  width: 428px;
`;

const ManageYourTask = styled.p`
  color: transparent;
  font-family: "Pilat Extended-Regular", Helvetica;
  font-size: 61px;
  font-weight: 400;
  left: 26px;
  letter-spacing: 0;
  line-height: 60px;
  position: absolute;
  top: 504px;
`;

const TextWrapper = styled.span`
  color: #ffffff;
`;

const Span = styled.span`
  color: #fed36a;
`;

const Overlap = styled.div`
  background-color: #fed36a;
  height: 67px;
  left: 26px;
  position: absolute;
  top: 809px;
  width: 376px;
`;

const Rectangle = styled.div`
  background-color: #fed36a;
  height: 67px;
  left: 0;
  position: absolute;
  top: 0;
  width: 376px;
`;

const TextWrapper2 = styled.div`
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 18px;
  font-weight: 600;
  left: 143px;
  letter-spacing: 0;
  line-height: 38px;
  position: absolute;
  top: 14px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  background-color: #ffffff;
  height: 330px;
  left: 26px;
  position: absolute;
  top: 123px;
  width: 369px;
`;

const WorkInProgress = styled.img`
  height: 320px;
  left: 25px;
  position: absolute;
  top: 5px;
  width: 321px;
`;

const Group = styled.div`
  height: 62px;
  left: 26px;
  position: absolute;
  top: 23px;
  width: 95px;
`;

const OverlapGroup2 = styled.div`
  height: 62px;
  position: relative;
  width: 93px;
`;

const DayTask = styled.p`
  color: transparent;
  font-family: "Pilat Extended-Regular", Helvetica;
  font-size: 16.3px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: 15.3px;
  position: absolute;
  top: 46px;
  white-space: nowrap;
`;

const UrgentBro = styled.img`
  height: 48px;
  left: 15px;
  position: absolute;
  top: 0;
  width: 61px;
`;

const CreateNewTask = styled.img`
  height: 926px;
  left: -348px;
  position: absolute;
  top: 1048px;
  width: 428px;
`;

const Home = () => {
  return (
    <SplashWrapper>
      <SplashContainer>
        <ManageYourTask>
          <TextWrapper>
            Manage <br />
            your
            <br />
            Task with
            <br />
          </TextWrapper>
          <Span>DayTask</Span>
        </ManageYourTask>
        <Overlap>
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <TextWrapper2>Let’s Start</TextWrapper2>
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <TextWrapper2>Let’s Start</TextWrapper2>
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <TextWrapper2>Let’s Start</TextWrapper2>
        </Overlap>
        <OverlapGroup>
          <WorkInProgress alt="Work in progress" src="pana.png" />
        </OverlapGroup>
        <Group>
          <OverlapGroup2>
            <DayTask>
              <TextWrapper>Day</TextWrapper>
              <Span>Task</Span>
            </DayTask>
            <UrgentBro alt="Urgent bro" src="bro.png" />
          </OverlapGroup2>
        </Group>
        <CreateNewTask alt="Create new task" src="create-new-task.jpg" />
      </SplashContainer>
    </SplashWrapper>
  );
};

export default Home;
