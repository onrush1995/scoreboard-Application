const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className='stats'>Players: {props.totalPlayers + 1}</span>
        </header>
    );
};

const Counter = (props) => {
    return (
        <div className='counter'>
            <button className='counter-action decreament'> - </button>
            <span className='counter-score'> {props.score} </span>
            <button className='counter-action increament'> + </button>
        </div>
    );
};

const Player = (props) => {
    return (
        <div className='player'>
            <span className='player-name'>{props.name}</span>
            <Counter score={props.score} />
        </div>
    );
};

const App = () => {
    return (
        <div className='scoreboard'>
            <Header title='Scoreboard' totalPlayers={5} />
            {/* Adding player */}
            <Player name='Moni' score={60} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
