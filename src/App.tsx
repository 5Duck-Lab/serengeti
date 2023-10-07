import styled from 'styled-components';
import Scene from './components/THREE/Scene';

function App() {
  return (
    <Wrapper>
      <Scene />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;
