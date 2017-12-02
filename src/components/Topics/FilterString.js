import React, { Component } from 'react';


class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: ["James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ],
            userInput: '',
            filteredArray: [],
        }
    }

    updateUserInput(value) {
        this.setState({
            userInput: value
        })
    }

    filterString(userInput) {
        var filter = [];
        var unFilteredArray = this.state.unFilteredArray;

        for ( var i = 0; i < unFilteredArray.length; i++ ) {
            if ( unFilteredArray[i].includes(userInput) ) {
                filter.push(unFilteredArray[i]);
                }
            }
        
        this.setState({
            filteredArray: filter,
        })
        
        }

  render() {
    return(
        <div className='puzzleBox filterStringPB'>
        <h4>Filter String</h4>
           <span className='puzzleText'>Names : {JSON.stringify(this.state.unFilteredArray)}</span>
           <input className='inputLine' onChange={event =>this.updateUserInput(event.target.value)} value={this.state.userInput}/>
           <button className='confirmationButton' onClick={() => this.filterString(this.state.userInput)}>Filter</button>
           <span className='resultsBox filterStringRB'>Filtered Names : {JSON.stringify(this.state.filteredArray)}</span>
    </div>
    )
  }
}

export default FilterString;
