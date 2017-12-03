import React, { Component } from 'react';


class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null,
        }
    }

    updateNumber1(val) {
        this.setState({
            number1: parseInt(val, 10)
        })
    }

    updateNumber2(val) {
        this.setState({
            number2: parseInt(val, 10)
        })
    }

    sumNumbers(num1, num2) {
        var sumNum = num1 + num2
        this.setState ({
            sum: sumNum
        })
    }
  render() {
    return(
        <div className='puzzleBox sumPB'>
            <h4>Sum</h4>
            <input className='inputLine' onChange={event=>this.updateNumber1(event.target.value)} value={this.state.number1} />
            <input className='inputLine' onChange={event=>this.updateNumber2(event.target.value)} value={this.state.number2} />
            <button className='confirmationButton' onClick={() => this.sumNumbers(this.state.number1, this.state.number2)}/>
            <span className='resultsBox'>Sum: {JSON.stringify(this.state.sum)}</span>
        </div>
    )
  }
}

export default Sum;
