import React from 'react';

// 유저 컴포넌트
const User = ({ item, removefunction, toggleStatusFunction }) => {
    return (
        <div key={item.id} className={`todo-container ${item.isDone ? 'done' : ''}`}>
            {item.title}
            <br />
            {item.text}
            <br />
            <div className="button-container">
                <button onClick={() => removefunction(item.id)}>삭제하기</button>
                <button onClick={() => toggleStatusFunction(item.id)}>{item.isDone ? '취소' : '완료'}</button>
            </div>
        </div>
    );
};

export default User;
