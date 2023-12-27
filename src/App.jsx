import React from 'react'; // React 라이브러리를 사용하기 위해서는 항상 React를 임포트해야 함
import './App.css'; // App.css 파일을 임포트하고 있음
import Todo from './components/Todo'; // Todo컴포넌트를 components폴더 안에 있는 Todo.jsx파일로부터 임포트하고 있음

// App이라는 함수형 컴포넌트 : React 애플리케이션의 진입점(entry point)
// 이 컴포넌트는 <Todo></Todo>라는 JSX를 반환 (Todo 컴포넌트를 렌더링하는 역할을 함)
function App() {
    return <Todo></Todo>;
}
// App 컴포넌트를 모듈의 기본으로 내보냄
export default App;
// App 컴포넌트는 Todo 컴포넌트를 렌더링하고, 
// 애플리케이션의 최상위 레벨에 위치하여 
// 각 컴포넌트들을 조합하고 화면에 보여주는 역할을 함 
