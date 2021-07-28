/* eslint-disable */
import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

// 특정 컴포넌트를 만들어서 스타일링 하는 것이 아니라 글로벌 스타일 추가하고 싶은 경우 createGlobalStyle 사용
const BodyStyled = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <React.Fragment>
      <BodyStyled />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </React.Fragment>
  )
}
export default App;
