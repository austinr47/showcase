import React, { Component } from 'react';


class Palindrome extends Component {
    constructor() {
        super()
        this.stage = {
            userInput: '',
            palindrome: '',
        }
    }

    updateUserInput(value) {
        this.setState({
            userInput: value
        })
    }

    filterString(userInput) {    
        var arr = '';
        for (var i = 0; i < userInput.length / 2; i++) {
            if (userInput.charAt(i) !== userInput.charAt(userInput.length - 1 - i)) {
                arr = false;
            }
            arr = true;
        }
        
        this.setState({
            palindrome: arr,
        })
        
        }


  render() {
    return(
        <div className='puzzleBox filterStringPB'>
        <h4>Palindrome</h4>
           <input className='inputLine' onChange={event =>this.updateUserInput(event.target.value)} value={this.state.userInput}/>
           <button className='confirmationButton' onClick={() => this.filterString(this.state.userInput)}>Filter</button>
           <span className='resultsBox'>Filtered Names : {JSON.stringify(this.state.filteredArray)}</span>
    </div>
    )
  }
}

export default Palindrome;
