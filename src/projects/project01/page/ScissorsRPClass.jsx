import React, { Component } from 'react';
import HomeButton from '../components/HomeButton';
import Box from '../components/Box';
import BoxClass from '../components/BoxClass';

const choice = {
    rock: {
        name: 'Rock',
        icon: '👊',
    },
    scissors: {
        name: 'Scissors',
        icon: '✌',
    },
    paper: {
        name: 'Paper',
        icon: '🖐',
    },
};

export default class ScissorsRPClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: '',
            userWins: 0,
            computerWins: 0,
        };
    }

    play = (userChoice) => {
        const computerChoice = this.randomChoice();
        const result = this.judgement(userChoice, computerChoice);

        this.setState({
            userSelect: choice[userChoice],
            computerSelect: choice[computerChoice],
            result: result,
        });
    };

    judgement = (user, computer) => {
        // user와 computer의 타입이 다르다 타입을 통일 해 준다.
        const winConditions = {
            scissors: 'paper',
            rock: 'scissors',
            paper: 'rock',
        };

        if (user === computer) return '비김';

        if (winConditions[user] === computer) {
            // Update user wins if user wins
            this.setState((prevState) => ({
                userWins: prevState.userWins + 1,
            }));
            return '승리';
        } else {
            // Update computer wins if computer wins
            this.setState((prevState) => ({
                computerWins: prevState.computerWins + 1,
            }));
            return '패배';
        }

        return winConditions[user] === computer ? '승리' : '패배';
    };

    randomChoice = () => {
        // 랜덤으로 선택하기 위해서는 배열!!
        // 객체를 배열로 만드는 방법
        // Object.Keys(객체)
        // 객체의 키를 가지고 배열을 만든다.
        const list = Object.keys(choice);
        // 랜덤은 아이템을 추출한다.
        // const final = choice[list[Math.floor(Math.random() * list.length)]];
        const final = list[Math.floor(Math.random() * list.length)];
        return final;
    };

    render() {
        return (
            <div className="container">
                {/* <BGMPlayer bgmSrc={Jjajjan} />
                <BGMPlayer bgmSrc={BattleBGM} /> */}
                <HomeButton></HomeButton>
                <div className="main">
                    <div className="score">
                        <span>Player</span> <span>{this.state.userWins}</span> : <span>{this.state.computerWins}</span>{' '}
                        <span>Computer</span>
                    </div>

                    <div className="boxes">
                        {/* <Box title="Player" item={this.state.userSelect} result={this.state.result} />
                        <Box title="Computer" item={this.state.computerSelect} result={this.state.result} /> */}
                        <BoxClass title="Player" item={this.state.userSelect} result={this.state.result} />
                        <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result} />
                    </div>

                    <div className="buttons">
                        <button onClick={() => this.play('rock')}>👊</button>
                        <button onClick={() => this.play('scissors')}>✌</button>
                        <button onClick={() => this.play('paper')}>🖐</button>
                    </div>
                </div>
                <div className="back"></div>
            </div>
        );
    }
}
