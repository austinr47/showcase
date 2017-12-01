import React, { Component } from 'react';


class EvenAndOdd extends Component {
    constructor(){
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }
    }

    updateUserInput(value) {
        this.setState({
            userInput: value
        })
    }

    assignNumbers(userInput) {
        var odd = [];
        var even = [];

        var arr= userInput.split(',');
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] % 2 === 0) {
                even.push(arr[i])
            } else if (arr[i] % 2 !== 0) {
                odd.push(arr[i])}
        }
        
        this.setState({
            evenArray: even,
            oddArray: odd,
        })
        
        }
        // 2,1,3,4

  render() {
    return(
        <div className='puzzleBox evenOddPB'>
            <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={event =>this.updateUserInput(event.target.value)} value={this.state.userInput}/>
                <button className='confirmationButton' onClick={() => this.assignNumbers(this.state.userInput)}>Split</button>
                <span className='resultBox'> Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className='resultBox'> Odds : {JSON.stringify(this.state.oddArray)}</span>
        </div>

)
}
}

export default EvenAndOdd;
