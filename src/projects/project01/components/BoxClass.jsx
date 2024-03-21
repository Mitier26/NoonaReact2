import React, { Component } from 'react';

export default class BoxClass extends Component {
    render() {
        const { title, result, item } = this.props;
        let final = result;

        if (title === 'Computer' && result != '비김' && result != '') {
            final = result === '승리' ? '패배' : '승리';
        }

        return (
            <div className={`box ${final}`}>
                <h1>{title}</h1>
                <p className="icons">{item && item.icon}</p>
                <h3>{final}</h3>
            </div>
        );
    }
}
