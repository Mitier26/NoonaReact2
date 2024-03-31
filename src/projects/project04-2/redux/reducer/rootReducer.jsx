import { combineReducers } from 'redux';
import coinReducer from './reducer';
import itemsReducers from './itemReducer';

const rootReducer = combineReducers({
    user: coinReducer,
    items: itemsReducers,
});

export default rootReducer;
