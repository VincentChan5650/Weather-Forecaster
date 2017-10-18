import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
  // call the constructor to initialize the term
  constructor(props){
    super(props);

    this.state ={term: ''};

    //bind the onInputChange to searchbar
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  //set the state once the input has change by using the proporty onChange
  onInputChange(event){
    this.setState({term: event.target.value});
  }

  //triggered when onSubmit event trigger
  // send data to fetchWeather, which is a props.function from actioncreator
  // fetchWeatcher came from mapDispatchToProps
  onFormSubmit(event){
    // prevent the form to submit
    event.preventDefault();

    //place the value in searchbar into the actioncreator
    this.props.fetchWeather(this.state.term);
    //reset the state for search bar, clear the searchbar
    this.setState({term:''});

  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder='Get a five-day weather forecast in any cities in U.S.'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}


function mapDispatchToProps(dispatch){
  //bindActionCreators(actionCreators, dispatch)
  // send new state to actionCreators and store in all reducer, so render everything
  return bindActionCreators({ fetchWeather }, dispatch);
}

//connect the react(SearchBar), and redux(mapDispatchToProps, which is actions and reducer)
export default connect(null, mapDispatchToProps)(SearchBar);
