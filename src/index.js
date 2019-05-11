import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../src/style/main.less';

class Welcome extends Component {
    render () {
        return <h1> Hello World </h1>;
    }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
