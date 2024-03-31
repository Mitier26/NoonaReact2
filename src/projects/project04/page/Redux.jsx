import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Box from '../components/Box';

/* 
    redux 를 사용하기 위해서는 몇가지 준비가 필요한다.
    1. redux 설치 하기 
        - npm i redux
    2. react-redux 설치 하기
        - npm i react-redux
    3. index.js 에 <Provider store={store}> </Provider> 로 감싸기
    4. store 만들기
    5. store에 필요한 reducer 만들기
    6. useDispatch 사용하기
*/

const Redux = () => {
    // const [count, setCount] = useState(0);
    const count = useSelector((state) => state.count);
    // useSelector 를 이용해 store 에 있는 값을 가지고 온다.
    // store에 있는 값을 전부 가지고 오는데 count의 값만 사용한다.

    const id = useSelector((state) => state.id);
    const password = useSelector((state) => state.password);

    // 7. dispatch 사용하기 위해 선언하기
    const dispatch = useDispatch();

    const increase = () => {
        // 8. dispatch {type} 은 해당 액션의 이름
        dispatch({ type: 'INCREMENT', payload: { num: 5 } });
        // 9. dispatch가 작동하면 reducer 가 불러와 진다.
        // 왜? 어떻게?
        /* 
            dispatch가 작동하면 store가 움직인다.
            store는 index.js에서 <Provider store={store}> 설정해 주었다.
            store가 실행되면 createStore를 하기 위해 reducer 가 필요하다.
            이제 reducer가 작동하는 것이다.
        */
        // setCount(count + 1);
    };

    const decrease = () => {
        dispatch({ type: 'DECREMENT', payload: { num: 1 } });
    };

    const login = () => {
        dispatch({ type: 'LOGIN', payload: { id: 'molkang', password: '123' } });
    };

    return (
        <div>
            <h1>
                {id},{password}
            </h1>
            <h1>{count}</h1>
            <button onClick={increase}>증가</button>
            <button onClick={decrease}>감소</button>
            <button onClick={login}>로그인</button>
            <Box></Box>
        </div>
    );
};

export default Redux;
