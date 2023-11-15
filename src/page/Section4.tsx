import Spacing from '@/components/Spacing';
import styled from 'styled-components';

const Section4 = () => {
  return (
    <div style={{ position: 'relative', zIndex: 2 }}>
      <h1> Welcome to Section4</h1>
      <h1> Welcome to Section4</h1>
      <h1> Welcome to Section4</h1>
      <h1> Welcome to Section4</h1>
      <Spacing size={100} />
      {/* <RightContainer>
        <h3> Welcome to Section4😃😃😃😃😃</h3>
        <h3> Welcome to Section4😁😁😁😁😁</h3>
        <h3> Welcome to Section4😙😙😙😙😙</h3>
        <h3> Welcome to Section4😃😃😃😃😃</h3>
        <h3> Welcome to Section4😁😁😁😁😁</h3>
        <h3> Welcome to Section4😙😙😙😙😙</h3>
        <h3> Welcome to Section4😃😃😃😃😃</h3>
        <h3> Welcome to Section4😁😁😁😁😁</h3>
        <h3> Welcome to Section4😙😙😙😙😙</h3>
      </RightContainer> */}
      <Spacing size={2000} />
    </div>
  );
};

export default Section4;

const RightContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;
