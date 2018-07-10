import React from 'react';
import { useAnother } from '../contexts/another';

const Counter = ({ number, increment}) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increment}>더하기</button>
    </div>
  );
};

// mapContextToProps 객체를 생성하여 Consumer 가 이미 셋팅된 고차 함수에 넣어 생성된 함수에 일반 컴포넌트를 넣어 컨테이너 컨포넌트를 export 한다
export default useAnother(
  ({ state, actions }) => ({
    number: state.number,
    increment: actions.increment
  })
)(Counter);