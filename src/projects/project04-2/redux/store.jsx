import { createStore } from 'redux';
import reducer from './reducer/reducer';
import rootReducer from './reducer/rootReducer';

let store = createStore(rootReducer);

export default store;
