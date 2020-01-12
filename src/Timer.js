import React, { Component } from 'react'

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            test: true
        }

    }

    Start = () => {
        const interval = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count + 1000
            })
            )
        }, 1000);
        this.setState({ int: interval })

    }


    Reset = () => {
        this.setState({ count: 0 })
    }



    Pause = () => {
        this.setState({
            int: false
        })

        clearInterval(this.state.int)
    }

    render() {
        const { count } = this.state
        const hours = Math.floor((count / 3600000) % 24)
        const minutes = Math.floor((count / 60000) % 60)
        const seconds = Math.floor((count / 1000) % 60)
        return (
            <div className="all">
                <div className="time">
                    <h1>Hours <br/>  {String(hours).padStart(2, '0')}</h1>
                    <h1>Minutes <br/>  : {String(minutes).padStart(2, '0')}</h1>
                    <h1>Seconds <br/>  :{String(seconds).padStart(2, '0')}</h1>
                </div>
                <div className="btns">
                    <button className="buttons" type="button" onClick={this.state.int ? this.Pause : this.Start}>{this.state.int ? 'PAUSE' : 'START'}</button>
                    <button className="buttons" type="button" onClick={this.Reset}>RESET</button>
                </div>
            </div>
        )
    }


}




export default Timer;