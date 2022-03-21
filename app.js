const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className='stats'>Players: {props.totalPlayers + 1}</span>
        </header>
    );
};

class Counter extends React.Component {
    state = {
        score: 0
    };

    incrementScore = () => {
        this.setState({
            score: this.state.score + 1
        });
    };

    decrementScore = () => {
        this.setState({
            score: this.state.score - 1
        });
    };

    render() {
        return (
            <div className='counter'>
                <button className='counter-action decrement' onClick={this.decrementScore}>
                    {' '}
                    -{' '}
                </button>
                <span className='counter-score'> {this.state.score} </span>
                <button className='counter-action increment' onClick={this.incrementScore}>
                    +
                </button>
            </div>
        );
    }
}

const Player = (props) => {
    return (
        <div className='player'>
            <span className='player-name'>{props.name}</span>
            <Counter />
        </div>
    );
};

class App extends React.Component {
    state = {
        players: [
            {
                name: 'Guil',
                id: 1
            },
            {
                name: 'Treasure',
                id: 2
            },
            {
                name: 'Ashley',
                id: 3
            },
            {
                name: 'James',
                id: 4
            }
        ]
    };

    handleRemovePlayer = (id) => {
        this.setState((prevState) => {
            return {
                players: prevState.players.filter((p) => p.id !== id)
            };
        });
    };

    render() {
        return (
            <div className='scoreboard'>
                <Header title='Scoreboard' totalPlayers={this.state.players.length} />
                {this.state.players.map((player) => (
                    <Player name={player.name} score={player.score} key={player.id.toString()} />
                ))}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
