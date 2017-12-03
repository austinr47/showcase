import React, { Component } from 'react';

class Palindrome extends Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  updateUserInput(val) {
    this.setState({ 
        userInput: val 
    })
  }

    matchString(userInput) {    
        var arr = [];
        for (var i = 0; i < userInput.length / 2; i++) {
            if (userInput.charAt(i) !== userInput.charAt(userInput.length - 1 - i)) {
                arr = false;
            } else arr = true;
        }
        
        this.setState({
            palindrome: arr,
        })
        
        }


  render() {
    return(
        <div className='puzzleBox palindromePB'>
        <h4>Palindrome</h4>
           <input className='inputLine' onChange={event =>this.updateUserInput(event.target.value)} value={this.state.userInput}/>
           <button className='confirmationButton' onClick={() => this.matchString(this.state.userInput)}>Check</button>
           <span className='resultsBox'>Palindrome : {JSON.stringify(this.state.palindrome)}</span>
    </div>
    )
  }
}

export default Palindrome;


// import React, { Component } from 'react';

// export default class Palindrome extends Component {

//   constructor() {
//     super();

//     this.state = {
//       userInput: '',
//       palindrome: ''
//     };
//   }

//   handleChange(val) {
//     this.setState({ userInput: val });
//   }

//   isPalindrome(userInput) {
//     var forwards = userInput;
//     var backwards = userInput;
//     backwards = backwards.split('');
//     backwards = backwards.reverse();
//     backwards = backwards.join('');

//     if ( forwards === backwards ) {
//       this.setState({ palindrome: 'true' });
//     } else {
//       this.setState({ palindrome: 'false' });
//     }
//   }

//   render() {
//     return (
//       <div className="puzzleBox palindromePB">
//         <h4> Palindrome </h4>
//         <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
//         <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }> Check </button>
//         <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
//       </div>
//     )
//   }
// }