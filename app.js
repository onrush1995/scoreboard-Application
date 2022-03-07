function Header() {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className='stats'>Players: 1</span>
        </header>
    );
}

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

            {/* <div className='counter'>
                <button className='counter-action decreament'> - </button>
                <span className='counter-score'> 40 </span>
                <button className='counter-action increament'> + </button>
            </div> */}
            <Counter />
        </div>
    );
};

ReactDOM.render(<Player />, document.getElementById('root'));
