import React, { Component } from 'react';
import Laser from './Laser';
import ReactDOM from 'react-dom';


class Howdy extends Component{

    activateLasers = () => {
        console.log(this.props.goodbye);
        // var object = this.refs.Progress1;
        // object.dangerouslySetInnerHTML 
        ReactDOM.render(<Laser search="document.getElementById('howdy').value"/>, document.getElementById('howdy'));

    }

    render(){
        return(<button onClick={this.activateLasers}>{this.props.hello}</button>)
    }

    
}

export default Howdy;

