const desc = 'I just learned how to create a React node and render it into the DOM';
const myTitleID = 'main-title';
const firstName = 'Moni';

const header = (
    <header>
        {/* This is comment */}
        <h1>{firstName}'s first React Element</h1>
        <p>{desc}</p>
    </header>
);

ReactDOM.render(header, document.getElementById('root'));
