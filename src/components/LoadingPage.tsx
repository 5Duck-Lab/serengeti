import styled from 'styled-components';
import { observer } from 'mobx-react';
import loadingStore from '@/store/loading.store.ts';

const LoadingPage = () => {
  const { loading } = loadingStore;

  if (loading === 100) {
    return null;
  }

  return (
    <FullScreenLoader>
      <h1>{loading}%</h1>
    </FullScreenLoader>
  );
};

const Observer = observer(LoadingPage);
export default Observer;

const FullScreenLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  z-index: 1000;
`;
