import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(){
    super()
    this.state = {
      term:''
    }
  }
  onInputChange(term){
    this.setState({term})
    this.props.onSearchTermChange(term)
}

  render() {
    return (
      <div className='search-container'>
      <i className="fa fa-youtube-square fa-5x"></i>
      <input className='search-bar '
      placeholder ='Search your video'
      value={this.state.term}
      onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    );
  }
}

export default SearchBar
