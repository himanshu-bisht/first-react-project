import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term:''}
    }
    render() {
      return (
        <div className='search-bar mb-4'>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-4 col-sm-3 col-md-1">
                <a href="https://www.youtube.com/">
                  <img className="img-fluid mr-auto header-logo" src="https://www.nikitha.in/assets/images/youtube_64dp.png" alt="Logo" />
                </a>
              </div>
              <div className="just-space pt-5">
              </div>
              <div className="col-xs-8 col-sm-5 col-md-5 pt-2">
                <input className="form-control ml-auto" onKeyPress={(event) => this._handleKeyPress(event)}/>
              </div>
            </div>
          </div>
        </div>
      );
    }

  _handleKeyPress = (event) => {
      if (event.key === 'Enter') {
          this.props.onSearchTermChange(event.target.value);
        }
      }
}

export default SearchBar;
