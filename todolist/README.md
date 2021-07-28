# To do List Clone Coding

velopert 모던 리액트 강의의 To do List 실습 Clone Coding
(https://react.vlpt.us/mashup-todolist)

## [개발 진행 과정]

1. 컴포넌트 생성
    - TodoTemplate : 레이아웃 설정
    - TodoHead : 오늘 날짜와 요일, 앞으로 해야 할 일 갯수 보여줌
    - TodoList : 할일 정보가 있는 todos 배열을 TodoItem 컴포넌트에 렌더링
    - TodoItem : 각 할 일에 대한 정보를 렌더링해주는 컴포넌트
        - 좌측 원 클릭 시 체크 표시되고 할 일 글씨 연해짐
        - 마우스 오버 시 우측에 휴지통 아이콘 나타나고 클릭 시 항목 삭제
    - TodoCreate : 새로운 할 일 등록 컴포넌트
        - TodoTemplate 하단의 초록색 원 버튼 클릭 시 할 일 입력 가능한 폼 나타남
        - 버튼 다시 누르면 폼 사라짐
2. Context API를 활용한 상태 관리
    1. reducer 생성
        - TodoContext.js에 useReducer를 이용하여 상태 관리하는 TodoProvider 컴포넌트 생성
    2. Context 생성
        - 생성한 state와 dispatch를 Context를 통하여 다른 컴포넌트에서 바로 사용할 수 있도록 설정
            - state와 dispatch를 두 개의 Context에 따로 넣어서 dispatch만 필요한 컴포넌트에서 불필요한 렌더링이 되는 경우를 방지
    3. 커스텀 Hook 생성
        - 컴포넌트에서 useContext를 직접 사용하는 대신 useContext를 사용하는 커스텀 Hook을 생성
    4. nextId 값 관리
        - 새로운 항목을 추가할 때 사용할 고유 ID 값을 useRef를 사용하여 관리
    5. 커스텀 Hook에서 에러 처리
        - 커스텀 Hook을 사용하려면 해당 컴포넌트가 TodoProvider 컴포넌트 내부에 렌더링되어 있어야 함
        - 그렇지 않은 경우에 에러 발생시키도록 설정
    6. 컴포넌트 TodoProvider로 감싸기
3. 기능 구현하기
    - context에 있는 state를 받아와서 렌더링하고 필요한 상황에는 특정 액션을 dispatch

    **[TodoHead.js]**

    1. done이 false인 항목 개수 표시
        - TodoState를 받아와서 그 중 done이 false인 것만 배열에 담아 length return
    2. 오늘 날짜 표시
        - Date의 toLocaleString 이용

    **[TodoList.js]**

    1. state를 조회하여 렌더링

    **[TodoItem.js]**

    1. dispatch를 사용해 toggle, remove 기능 구현
    2. React.memo 사용하여 불필요한 리렌더링 방지

    **[TodoCreate.js]**

    1. 항목 생성 기능 구현