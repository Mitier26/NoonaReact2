let initialState = {
    count: 0,
    id: '',
    password: '',
};

function reducer(state = initialState, action) {
    // console.log('action', action);
    /*
    if (action.type === 'INCREMENT') {
        // 같은 객체를 받으면 값이 변했는지 알 수 없다.
        // ... 를 붙여 새로운 주소를 가진 것으로 바꾸어
        // 값이 변했다는 것을 알려준다.
        return { ...state, count: state.count + 1 };
    }

    // 위의 동작을 하지 않아도 return을 해주어야한다.
    return { ...state };
    */

    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + action.payload.num };
        case 'DECREMENT':
            return { ...state, count: state.count - action.payload.num };
        case 'LOGIN':
            return { ...state, id: action.payload.id, password: action.payload.password };
        default:
            return { ...state };
    }
}

export default reducer;
