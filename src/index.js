import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Czarek from './Czarek';

//dumb component
let superElement = <b>Jestem super element</b>
function PowiedzHej(){
    return <b>Mowie Hej</b>;
}

function PrzedstawSie(props) {
    return(
<div>
    <p>
        Nazywam sie: {props.imie}
    </p>
    {superElement}
    <br />
    <PowiedzHej />
</div>
    );
}
//end fo dumb comoponents

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

//ReactDOM.render(<Czarek />, document.getElementById('root'));
