import {Component} from 'react'

import PasswordItem from '../PasswordItem'

import './index.css'

class YourPasswords extends Component {
  state = {showPassword: false, searchInput: ''}

  emptyUserDetails = () => (
    <div className="no-passwords-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-img"
      />
      <p className="no-passwords-text">No Passwords</p>
    </div>
  )

  passwordsList = () => {
    const {userDetailsList, updateUserDetailsList} = this.props
    const {showPassword, searchInput} = this.state

    const filteredList = userDetailsList.filter(eachUser =>
      eachUser.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const passwordsContainer = (
      <ul className="passwords-section">
        {filteredList.map(eachUser => (
          <PasswordItem
            eachUser={eachUser}
            key={eachUser.id}
            showPassword={showPassword}
            updateUserDetailsList={updateUserDetailsList}
          />
        ))}
      </ul>
    )

    const finalPasswordsContainer =
      filteredList.length > 0 ? passwordsContainer : this.emptyUserDetails()
    return finalPasswordsContainer
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {userDetailsList} = this.props

    return (
      <div className="passwords-container">
        <div className="header">
          <div className="passwords-count-section">
            <h1 className="title">Your Passwords</h1>
            <p className="count">{userDetailsList.length}</p>
          </div>
          <div className="input-section">
            <div className="search-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-img"
              />
            </div>
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <hr className="line" />
        <div className="show-password-section">
          <div className="show-password-container">
            <input
              type="checkbox"
              className="checkbox-input"
              id="checkboxInput"
              onChange={this.onChangeCheckbox}
            />
            <label htmlFor="checkboxInput" className="checkbox-label">
              Show Passwords
            </label>
          </div>
        </div>
        <ul className="passwords-section">
          {userDetailsList.length === 0
            ? this.emptyUserDetails()
            : this.passwordsList()}
        </ul>
      </div>
    )
  }
}

export default YourPasswords
