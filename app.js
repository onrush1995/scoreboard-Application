const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className='stats'>Players: {props.totalPlayers + 1}</span>
        </header>
    );
};

const Counter = () => {
    return (
        <div className='counter'>
            <button className='counter-action decreament'> - </button>
            <span className='counter-score'> 40 </span>
            <button className='counter-action increament'> + </button>
        </div>
    );
};

const Player = () => {
    return (
        <div className='player'>
            <span className='player-name'>Moni</span>
            <Counter />
        </div>
    );
};

const App = () => {
    return (
        <div className='scoreboard'>
            <Header title='Scoreboard' totalPlayers={5} />
            {/* Adding player */}
            <Player />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
