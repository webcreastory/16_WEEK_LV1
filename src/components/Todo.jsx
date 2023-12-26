import React, { useState } from 'react';
import User from './User';

// 메인 컴퍼넌트
const Todo = () => {
    // 초기 상태 설정
    const [users, setUsers] = useState([
        { id: 1, title: '[과제] React Lv.1', text: 'My Todo List 제출', isDone: false },
        { id: 2, title: '[강의] 리액트 입문주차', text: '2회독_개발 블로그 정리', isDone: true },
    ]);

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    // 제목 입력값 변경 핸들러
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    // 내용 입력값 변경 핸들러
    const textChangeHandler = (event) => {
        setText(event.target.value);
    };

    // 버튼
    const Button = ({ clickAddButtonHandler, children }) => {
        return <button onClick={clickAddButtonHandler}>{children}</button>;
    };

    // <추가> 버튼 클릭시 카드 추가하기
    const clickAddButtonHandler = () => {
        const newUser = {
            id: users.length + 1,
            title: title,
            text: text,
            isDone: false,
        };
        setUsers([...users, newUser]);

        // <추가> 버튼 클릭 후 입력값 초기화
        setTitle('');
        setText('');
    };

    // Working 섹션에서 <삭제> 버튼 클릭 핸들러
    const clickRemoveButtonHandler = (id) => {
        const newUsers = users.filter((user) => user.id !== id);
        setUsers(newUsers);
    };

    // <완료> 또는 <취소> 버튼 클릭시 상태 변경
    const toggleStatusFunction = (id) => {
        const updatedUsers = users.map((user) => {
            if (user.id === id) {
                return { ...user, isDone: !user.isDone };
            }
            return user;
        });
        setUsers(updatedUsers);
    };

    // Done 섹션에서 <삭제> 버튼 클릭 핸들러
    const clickRemoveDoneButtonHandler = (id) => {
        const newUsers = users.filter((user) => user.id !== id);
        setUsers(newUsers);
    };

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
