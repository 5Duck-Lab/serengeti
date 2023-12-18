import Spacing from '@/components/Spacing';
import styled from 'styled-components';

const Section7 = () => {
  return (
    <div style={{ position: 'relative', zIndex: 2 }}>
      <Spacing size={5000} />
    </div>
  );
};

export default Section7;
const Content = styled.span`
  color: #fffdd0;
  white-space: pre-wrap;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  display: block;
  line-height: 1.5;
`;
