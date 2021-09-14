import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class Suggestion extends Component {
  state = {
    searchInput: '',
  }

  updateSearchInput = value => {
    this.setState({
      searchInput: value,
    })
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="header">
          <h1 className="heading">Stocks</h1>
      
      <div className="app-container">
        <div className="google-suggestions-container">
          <h1 className="main-heading">The easiest way to buy and sell stocks.</h1>
          <p className="sub-heading">Stock analysis and screening tool for investors in India.</p>
          
          <div className="search-input-container">
              <img
                alt="search icon"
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                type="search"
                className="search-input"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
          
          <div className="search-input-suggestions-container" style={{display:searchInput!== ""?"block":"none"}}>
            <ul className="suggestions-list">
              {searchResults.map(eachSuggestion => (
                <SuggestionItem
                  key={eachSuggestion.id}
                  suggestionDetails={eachSuggestion}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Suggestion
