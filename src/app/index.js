import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1>Hey!!</h1>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
console.log("it works")