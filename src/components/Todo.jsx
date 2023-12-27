// React는 React애플리케이션을 구성하는 핵심 라이브러리
// React라이브러리에서 React와 useState를 가져옴.
// useState는 React컴포넌트에서 상태관리를 위한 Hook 중 하나
import React, { useState } from 'react'; 
// 현재 디렉토리에서 ./User경로로 지정된 파일에서 User컴포넌트를 가져옴
// 다른 파일에 정의된 User컴포넌트를 현재 파일에서 사용하겠다는 의미 
import User from './User';

// 메인 컴퍼넌트
// React 함수형 컴포넌트
// 함수형 컴포넌트 Todo를 선언(화살표 함수 문법)
const Todo = () => {  
    // 초기 상태 설정
    // useState 훅(Hook)을 사용하여 컴포넌트의 상태를 초기화
    // useState는 배열 형태의 반환값을 가지며 
    //--- 첫번째 원소 users(상태 변수의 이름)는 상태값 자체, 두번째 원소 setUsers는 해당 상태를 업데이트하는 함수 
    const [users, setUsers] = useState([
        // 초기 상태로 지정된 값은 배열
        // 각 원소는 하나의 Todo를 나타내는 객체
        // 객체에는 id(고유 식별자), title, text, isDine 속성
        { id: 1, title: '[과제] React Lv.1', text: 'My Todo List 제출', isDone: false },
        { id: 2, title: '[강의] 리액트 입문주차', text: '2회독_개발 블로그 정리', isDone: true },
    ]); // = 이 코드는 초기 화면에 렌더링될 때 users 상태가 초기화되고 해당 상태는 title과 text라는 2개의 Todo 객체를 가지고 있음
    // 이후에 이 상태를 업데이트하거나 활용하여 React 컴포넌트를 동적으로 변경할 수 있음  

    // React 함수형 컴포넌트에서 useState 훅을 사용하여 2개의 상태 변수를 선언
    // 첫번째 상태 변수인 title을 선언하고 초기값을 빈 문자열로 설정(title은 현재 상태의 값, setTitle 함수를 사용해 이 상태를 업데이트)
    // 두번째 상태 변수인 text을 선언하고 초기값을 빈 문자열로 설정(text는 현재 상태의 값, setText 함수를 사용해 이 상태를 업데이트)
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    // = 이렇게 선언된 상태 변수들은 주로 사용자의 입력을 받거나, 컴포넌트 내에서의 상태를 관리하는 데 사용 

    // 제목 입력값 변경 핸들러
    // React 함수형 컴포넌트에서 사용되는 event 핸들러 함수
    // titleChangeHandler라는 이름의 '함수형 변수'를 선언
    // 주로 입력 필드에서 발생하는 event(일반적으로 입력 내용이 변경될 때 발생하는 'onChange' event)를 처리
    const titleChangeHandler = (event) => { // 화살표 함수 문법을 사용하여 이벤트 핸들러 함수 정의(이벤트(event) 객체를 받아들이는 매개변수)
        setTitle(event.target.value); // setTitle 함수 호출(React 컴포넌트에서 title 상태 업데이트) ->   
        // event.target.value 값을 setTitle 함수에 전달하여 컴포넌트의 title 상태 업데이트
    }; // event.target은 이벤트가 발생한 HTML 요소(주로 입력 필드)/.value는 해당 요소의 현재 값, 즉 사용자가 입력한 내용을 나타냄
    // = 주로 사용자가 입력 필드에 텍스트를 입력할 때마다 호출되어, 입력된 텍스트를 컴포넌트의 title 상태로 업데이트하는 역할
    // = 입력된 값을 상태로 관리하고, 필요에 따라 화면을 다시 렌더링하여 반영

    // 내용 입력값 변경 핸들러
    //textChangeHandler라는 이름의 함수형 변수를 선언 
    // 주로 입력 필드에서 발생하는 이벤트(일반적으로 입력 내용이 변경될 때 발생하는 'onChange' 이벤트) 처리
    const textChangeHandler = (event) => { // 화살표 함수 문법을 사용하여 이벤트 핸들러 함수 정의 
        // 매개변수 event는 이벤트 객체를 받아들이는 매개변수
        setText(event.target.value); // event.target.value는 이벤트가 발생한 HTML 요소(주로 입력 필드)의 현재 값, 
        // 즉 사용자가 입력한 내용을 나타냄(이 값을 setText 함수에 전달하여 컴포넌트의 text 상태를 업데이트)
    }; // 사용자가 입력 필드에 텍스트를 입력할 때마다 호출되어, 입력된 텍스트를 컴포넌트의 text 상태로 업데이트하는 역할

    // 버튼 컴포넌트(함수형 컴포넌트)
    // Button이라는 이름의 함수형 컴포넌트 선언
    // 이 컴포넌트는 주로 버튼 역할을 하며, 두 개의 속성(props)을 받아들임
    // clickAddButtonHandler: 이는 버튼이 클릭되었을 때 실행될 이벤트 핸들러 함수
    // children: 이는 버튼 내에 포함될 내용(일반적으로 텍스트 또는 다른 React 엘리먼트)
    const Button = ({ clickAddButtonHandler, children }) => {
        // 이 부분은 컴포넌트의 렌더링을 정의
        // <button> HTML 엘리먼트 반환
        // onClick={clickAddButtonHandler}는 버튼이 클릭되었을 때 실행될 이벤트 핸들러를 정의 
        // clickAddButtonHandler로 전달된 함수가 클릭 이벤트에 바인딩되어 해당 함수가 실행됨
        // {children}: 이는 버튼 내에 포함될 내용을 나타냄(버튼 내의 텍스트로 표시됨)
        return <button onClick={clickAddButtonHandler}>{children}</button>;
    }; // =  Button 컴포넌트를 정의하여, 버튼을 렌더링하고 클릭 이벤트에 대한 핸들러를 받아 처리할 수 있는 컴포넌트

    // <추가> 버튼 클릭시 카드 추가하기
    // clickAddButtonHandler 함수가 호출될 때마다, 새로운 사용자 정보를 만듦
    const clickAddButtonHandler = () => { 
        const newUser = { //  newUser 객체를 생성하는데, 이 객체에는 다음과 같은 속성 포함(id, title, text, isDone)
            id: users.length + 1, // users 배열의 길이에 1을 더한 값으로 설정
            title: title,  // title 변수에서 가져온 값으로 설정
            text: text,  // text 변수에서 가져온 값으로 설정
            isDone: false, // 새로운 사용자의 상태를 나타냄(아직 완료되지 않았다는 것을 의미)
        };
        // setUsers 함수를 호출하여 users 배열 업데이트
        setUsers([...users, newUser]); 
        // 기존 users 배열과 새로 생성된 newUser 객체를 합친 새로운 배열을 생성하여 업데이트

        // <추가> 버튼 클릭 후 입력값 초기화
        //  입력 필드의 값을 변경한 후에 해당 값을 초기화
        setTitle('');
        setText('');
    };

    // Working 섹션에서 <삭제> 버튼 클릭 핸들러
    // clickRemoveButtonHandler 함수는 id라는 매개변수를 받음 
    // 사용자가 지정한 id를 가진 항목을 삭제하기 위한 것
    const clickRemoveButtonHandler = (id) => {
        // filter 메서드를 사용하여 users 배열에서 조건을 만족하는 요소들만 새로운 배열인 newUsers에 포함
        // filter 함수는 각각의 user에 대해 주어진 조건을 확인하고, 
        // user.id가 함수에 전달된 id와 일치하지 않는 요소들만 선택하여 새로운 배열을 생성
        // id와 일치하지 않는 사용자만을 남기고 필터링
        const newUsers = users.filter((user) => user.id !== id);
        // setUsers 함수를 호출하여 상태(state)를 업데이트
        // newUsers 배열은 이전 users 배열에서 특정 id를 가진 사용자를 제외한 새로운 배열 
        // 새로운 사용자 목록으로 설정하여 이전 목록에서 해당 ID를 가진 사용자를 삭제
        setUsers(newUsers);
    };

    // <완료> 또는 <취소> 버튼 클릭시 상태 변경
    // toggleStatusFunction 함수는 id라는 매개변수를 받음
    const toggleStatusFunction = (id) => {
        // map 함수를 사용하여 users 배열의 각 요소를 새로운 배열인 updatedUsers로 변환
        // map() 함수는 배열의 각 요소에 대해 주어진 함수를 호출하고, 그 함수가 반환하는 결과를 모아서 새로운 배열을 생성
        // ----- 배열을 순회하면서 각 요소에 동일한 작업을 적용하여 새로운 배열을 만들 때 유용
        const updatedUsers = users.map((user) => {
            // 만약 user.id가 함수에 전달된 id와 일치한다면, 해당 사용자의 isDone 속성을 반전시켜서 변경
            if (user.id === id) {
                // 객체 전개 연산자(...)를 사용하여 객체를 복사하고, 해당 객체의 isDone 속성을 토글(반전)시킴
                // 반전 연산자 !를 사용하여 user.isDone의 값을 뒤집고, 해당 값을 가지고 새로운 객체를 생성하여 반환
                // 그렇지 않은 경우에는 기존의 사용자 정보를 그대로 반환
                return { ...user, isDone: !user.isDone };
            }
            return user;
        }); //setUsers 함수를 호출하여 상태(state)를 업데이트
        setUsers(updatedUsers); 
        // updatedUsers 배열은 이전 users 배열을 기반으로  
        // --- 특정 id를 가진 사용자의 isDone 값을 토글(반전)시킨 새로운 배열
    };

    // Done 섹션에서 <삭제> 버튼 클릭 핸들러
    // clickRemoveDoneButtonHandler 함수는 id라는 매개변수를 받음
    // 특정 조건을 충족하는 사용자(isDone이 true인 사용자)를 제외하고 새로운 배열을 만듦
    const clickRemoveDoneButtonHandler = (id) => {
        // filter 함수를 사용하여 users 배열에서 조건을 만족하는 요소들만 새로운 배열인 newUsers에 포함시킴
        const newUsers = users.filter((user) => user.id !== id);
        // newUsers 배열은 이전 users 배열에서 특정 id를 가진 사용자를 제외한 새로운 배열
        // = id에 해당하는 사용자를 제거하고, 해당 사용자가 완료된 작업을 나타내는 isDone이 true인 경우에만 동작
        setUsers(newUsers);
    };

    // JSX(JavaScript XML, React에서 UI를 작성하기 위해 사용되는 JS 확장 문법)로 작성된 코드
    // 1. Todo List 구성 요소: 
    // clickRemoveDoneButtonHandler, clickAddButtonHandler, titleChangeHandler, textChangeHandler, 
    // toggleStatusFunction 함수들과 함께 <Button>과 <User> 컴포넌트를 사용하여 Todo List를 구성

    // 2. 화면 레이아웃 구성:
    // home-background, home-container, header, input-box, Working-body 등의 CSS 클래스를 사용하여 UI 스타일링
    // 헤더에는 My Todo List와 React라는 두 개의 텍스트 구성

    // 3. 두 부분으로 나누어진 Todo 리스트:
    // Working 부분은 isDone이 false인 항목들을 보여주고 있고, 
    // Done 부분은 isDone이 true인 항목들을 보여줌
    // 두 부분에서 각각 filter 함수를 사용하여 users 배열을 필터링하고, 해당하는 부분에 맞는 항목들만을 보여줌
    // map 함수를 사용하여 각각의 Todo 항목을 User컴포넌트로 변환하고, 해당 컴포넌트들을 UI에 렌더링 함

    return (
        <div className="home-background">
            <div className="home-container">
            
                <div className="header">
                    <span>My Todo List</span>
                    <span>React</span>
                </div>

                <div className="input-box">
                    제목 &nbsp;
                    <input value={title} onChange={titleChangeHandler} />
                    내용 &nbsp;
                    <input value={text} onChange={textChangeHandler} />
                    <Button clickAddButtonHandler={clickAddButtonHandler}>추가하기</Button>
                </div>

                <h1>🔥 Working</h1>
                <div className="Working-body">
                    {users
                        .filter((item) => !item.isDone)
                        .map(function (item) {
                            return (
                                <User
                                    key={item.id}
                                    item={item}
                                    removefunction={clickRemoveButtonHandler}
                                    toggleStatusFunction={toggleStatusFunction}
                                />
                            );
                        })}
                </div>

                <h1>👍 Done</h1>
                <div className="Working-body">
                    {users
                        .filter((item) => item.isDone)
                        .map(function (item) {
                            return (
                                <User
                                    key={item.id}
                                    item={item}
                                    removefunction={clickRemoveDoneButtonHandler}
                                    toggleStatusFunction={toggleStatusFunction}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Todo;
// Todo라는 컴포넌트를 내보내고 다른 파일에서 가져와서 사용
