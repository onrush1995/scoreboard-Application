const desc = 'I just learned how to create a React node and render it into the DOM';
const myTitleID = 'main-title';
const name_ID = 'Moni';

const header = (
    <header>
        <h1>{name_ID}'s first React Element</h1>
        <p>{desc}</p>
    </header>
);

ReactDOM.render(header, document.getElementById('root'));
