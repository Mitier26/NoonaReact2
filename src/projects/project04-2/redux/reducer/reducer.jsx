import { click } from '@testing-library/user-event/dist/click';

let initialState = {
    coin: 0,
    click: 1,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREASE_COINS':
            return { ...state, coin: state.coin + action.payload.num };
        case 'DECREASE_COINS':
            return { ...state, coin: state.coin - action.payload.num };
        case 'INCREASE_LEVEL':
            return { ...state, click: state.click + action.payload.click };
        default:
            return { ...state };
    }
}

export default reducer;
