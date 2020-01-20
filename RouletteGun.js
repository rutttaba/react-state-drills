import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {bulletInChamber: 8}

    constructor(props) {
        super(props)
        this.state = {
           chamber: null,
           spinningTheChamber: false
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handleButtonClick = () => {
       this.setState({
            spinningTheChamber: true
        })
        this.timeout = setTimeout( () => {
            let randomNum = Math.ceil(Math.random() * 8)
            this.setState({
                chamber: randomNum,
                spinningTheChamber: false
            })
        }, 2000)
        
    }

    message() {
        if (this.state.spinningTheChamber) {
           return 'spinning the chamber and pulling the trigger! ...'
        } else if (this.state.chamber === this.props.bulletInChamber) {
           return "BANG ! ! ! !"
        } else {
            return "you're safe!"
        } 
    }

    render() {
        return(
            <div>
                <p>{this.message()}</p>
                <button onClick={this.handleButtonClick} >Pull the trigger!</button>
            </div>
        )
    }

}

export default RouletteGun;

