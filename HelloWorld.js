import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            who: 'world'
        };
    }
    handleButtonClick = (e) => {
        const greeting = e.target.value
    
        this.setState( {
            who: greeting
        })
    }

    render() {
        return(
            <div>
                <p>Hello, {this.state.who}!</p>
                <button value='world' onClick={this.handleButtonClick}>World</button>
                <button value='friend' onClick={this.handleButtonClick}>Friend</button>
                <button value='React' onClick={this.handleButtonClick}>React</button>
            </div>
        )
    }
}

export default HelloWorld;