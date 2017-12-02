import React, { Component } from 'react';


class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: [
                {"name": "Jimmy Joe", "title": "Hack0r", "age": 12 
            },{
                "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" 
            },{
                "name": "Carly Armstrong", "title": "CEO" 
            }],
            userInput: '',
            filteredArray: [],
        }
    }


    updateUserInput(value) {
        this.setState({
            userInput: value
        })
    }

    assignNumbers(userInput) {
        var unFilter = [];
        var filter = [];

        
        
        
        
        this.setState({
            filteredArray: filter,
        })
        
        }


  render() {
    return(
        <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>
           <span className='puzzleText'>unFilteredArray : {JSON.stringify(this.state.unFilteredArray)}</span>
           <input className='inputLine' onChange={event =>this.updateUserInput(event.target.value)} value={this.state.userInput}/>
           <button className='confirmationButton' onClick={() => this.assignNumbers(this.state.userInput)}>Filter</button>
           <span className='resultsBox filterObjectRB'>filteredArray : {JSON.stringify(this.state.filteredArray)}</span>
    </div>
    )
  }
}

export default FilterObject;
