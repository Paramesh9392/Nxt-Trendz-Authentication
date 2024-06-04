// Write your JS code here

import Header from '../Header'

import './index.css'

const fashionImg =
  'https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="shop-container">
        <div className="details-container">
          <h1 className="heading">Clothes That Get You Noticed</h1>
          <p className="text">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time Clothes have always been a marker of the era
            and we are in a revolution. You fashion makes you been seen and
            heard that way you are.So, celebrate the seasons new and exciting
            fashion in your own way.
          </p>
          <button className="Home-button" type="button">
            Shop Now
          </button>
        </div>

        <div className="fashion-img-container">
          <img
            src={fashionImg}
            alt="clothes that get you noticed"
            className="fashion-img"
          />
        </div>
      </div>
    </div>
  </>
)

export default Home
