// Write your JS code here
import {Component} from 'react'
import './index.css'

const websitelogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png'
const websiteLogin =
  'https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png'

class LoginForm extends Component {
  state = {
    userName: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  onShowErrorMsg = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onLoginSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  changeUserName = event => {
    this.setState({userName: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmit = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {userName, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onLoginSuccess()
    } else {
      this.onShowErrorMsg(data.error_msg)
    }
  }

  render() {
    const {userName, password, errorMsg, showErrorMsg} = this.state
    return (
      <div className="container">
        <div className="img-container">
          <img src={websiteLogin} className="img" alt="website login" />
        </div>

        <div className="password-container">
          <img src={websitelogo} className="logo" alt="website logo" />
          <form className="form" onSubmit={this.onSubmit}>
            <label className="label-text" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              className="input"
              value={userName}
              onChange={this.changeUserName}
              placeholder="UserName"
              id="username"
            />

            <label className="label-text" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              className="input"
              value={password}
              onChange={this.changePassword}
              placeholder="Password"
              id="password"
            />
            <button className="button" type="submit">
              Login
            </button>
            {showErrorMsg && <p className="error-msg"> *{errorMsg} </p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
