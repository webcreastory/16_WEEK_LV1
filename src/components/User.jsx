// React 라이브러리를 현재 파일에서 사용하겠다고 선언
import React from 'react';

// User라는 함수형 컴포넌트
// ES6의 비구조화 할당을 사용하여 컴포넌트의 props를 바로 받아옴
// props = item, removefunction, toggleStatusFunction
const User = ({ item, removefunction, toggleStatusFunction }) => {
    return (
        // React에서 리스트를 렌더링할 때 각 요소에 고유한 key를 지정해야 함
        // item.id를 키로 사용
        // item.isDone이 true인 경우에만 done 클래스가 추가됨(완료된 항목은 스타일링을 위해 done 클래스를 받음)
        // item 객체에 있는 title과 text 값을 출력
        <div key={item.id} className={`todo-container ${item.isDone ? 'done' : ''}`}>
            {item.title}
            <br /> 
            {item.text}
            <br />
            <div className="button-container">
                <button onClick={() => removefunction(item.id)}>삭제하기</button>
                <button onClick={() => toggleStatusFunction(item.id)}>{item.isDone ? '취소' : '완료'}</button>
            </div>
        </div> // 버튼을 클릭하면 removefunction이 호출되고, 해당 item의 id가 전달 -> 이를 통해 해당 아이템이 삭제되는 함수를 실행
    ); // 버튼 텍스트를 item.isDone의 상태에 따라 다르게 표시
       // item.isDone이 true라면 '취소'라는 텍스트가 보이며, 클릭 시 toggleStatusFunction이 호출
};     // item.isDone이 false라면 '완료'라는 텍스트가 보이고, 클릭 시 toggleStatusFunction이 호출

export default User;
// User 컴포넌트는 각 Todo 항목을 렌더링하고, 해당 항목의 삭제와 상태 변경을 담당하는 버튼을 보여줌
// 설정된 item prop으로부터 해당 항목의 정보를 받아와 UI로 표시하고, 
// removefunction과 toggleStatusFunction을 호출하여 해당 항목의 삭제 및 상태 변경을 처리

