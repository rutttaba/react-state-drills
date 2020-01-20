import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        };
    }

   

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }



    render() {
        let ticking;
        if (this.state.count >= 8) {
            ticking = 'BOOM!!!!'
            clearInterval(this.interval)
        } else if (this.state.count % 2 === 0) {
            ticking = 'tick';
        } else {
            ticking = 'tock';
        }
        return(
            <div>
                <p> {ticking} </p>
            </div>
        )
    }

}

export default Bomb;