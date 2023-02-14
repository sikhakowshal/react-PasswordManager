import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import YourPasswords from '../YourPasswords'

import './index.css'

const backgroundColorsList = [
  'color1',
  'color2',
  'color3',
  'color4',
  'color5',
  'color6',
  'color7',
  'color8',
  'color9',
]

class PasswordManager extends Component {
  state = {userDetailsList: [], website: '', username: '', password: ''}

  updateUserDetailsList = id => {
    const {userDetailsList} = this.state
    const filteredList = userDetailsList.filter(eachUser => eachUser.id !== id)
    this.setState({userDetailsList: filteredList})
  }

  updateUserDetailsListOnSearch = value => {
    const {userDetailsList} = this.state

    const filteredUserDetailsList = userDetailsList.filter(eachUser =>
      eachUser.website.toLowerCase().includes(value.toLowerCase()),
    )

    this.setState({userDetailsList: filteredUserDetailsList})
  }

  onSubmitUserDetails = event => {
    event.preventDefault()
    const {website, username, password} = this.state

    if (website !== '' && username !== '' && password !== '') {
      const colorIndex =
        Math.ceil(Math.random() * backgroundColorsList.length) - 1
      const colorText = backgroundColorsList[colorIndex]

      const newUserDetails = {
        id: uuidv4(),
        website,
        username,
        password,
        colorText,
      }

      this.setState(prevState => ({
        userDetailsList: [...prevState.userDetailsList, newUserDetails],
        website: '',
        username: '',
        password: '',
      }))
    }
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {userDetailsList, website, username, password} = this.state

    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="logo-img"
            alt="app logo"
          />
        </div>
        <div className="add-password-container">
          <img className="image-container" alt="password manager" />
          <form className="form-container" onSubmit={this.onSubmitUserDetails}>
            <h1 className="form-heading">Add New Password</h1>
            <div className="input-container">
              <div className="input-img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  className="input-img"
                  alt="website"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Website"
                className="input"
                value={website}
                onChange={this.onChangeWebsite}
              />
            </div>
            <div className="input-container">
              <div className="input-img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  className="input-img"
                  alt="username"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Username"
                className="input"
                value={username}
                onChange={this.onChangeUserName}
              />
            </div>
            <div className="input-container">
              <div className="input-img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  className="input-img"
                  alt="password"
                />
              </div>
              <input
                type="password"
                placeholder="Enter Password"
                className="input"
                value={password}
                onChange={this.onChangePassword}
              />
            </div>
            <div className="button-container">
              <button className="add-button" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>

        <YourPasswords
          userDetailsList={userDetailsList}
          updateUserDetailsList={this.updateUserDetailsList}
          updateUserDetailsListOnSearch={this.updateUserDetailsListOnSearch}
          backgroundColorsList={backgroundColorsList}
        />
      </div>
    )
  }
}

export default PasswordManager
