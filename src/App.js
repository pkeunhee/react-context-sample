import React from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import { SampleProvider } from './contexts/sample';
import { AnotherProvider } from './contexts/another';
import Counter from './components/Counter';

// Provider 가 여러개인 경우 Provider 컴포넌트 태그가 중첩되는 모양을 개선하기 위해 하나의 컴포넌트로 만들어 주는 로직
const AppProvider = ({ contexts, children }) => contexts.reduce(
  (prev, context) => React.createElement(context, {
    children: prev
  }), 
  children
);

const App = () => {
  return (
    <AppProvider contexts={[SampleProvider, AnotherProvider]}>
      <div className="panes">
        <LeftPane />
        <RightPane />
      </div>
      <Counter />
    </AppProvider>
  );
};

export default App;