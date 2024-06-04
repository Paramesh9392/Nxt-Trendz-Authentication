// Write your JS code here
import './index.css'

const headerLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png'

const Header = () => (
  <>
    <nav className="header-container">
      <div className="logo-container">
        <img src={headerLogo} className="header-logo" alt="website logo" />
      </div>
      <div className="options-container">
        <ul className="list">
          <li className="link"> Home </li>

          <li className="link"> Products </li>

          <li className="link"> Cart </li>
        </ul>
        <button className="option-button" type="button">
          Logout
        </button>
      </div>
    </nav>
  </>
)

export default Header
