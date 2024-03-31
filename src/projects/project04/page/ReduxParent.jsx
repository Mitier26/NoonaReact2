import React from 'react';
import { Provider } from 'react-redux';
import Redux from './Redux';
import store from '../redux/store';

const ReduxParent = () => {
    return (
        <Provider store={store}>
            <Redux />
        </Provider>
    );
};

export default ReduxParent;
