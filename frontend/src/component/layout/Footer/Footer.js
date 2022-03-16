import React from 'react'
import playstore from '../../../images/googleplay.png';
import appstore from '../../../images/applestore.png';
import "./Footer.css";
const Footer = () => {
  return (
    <footer id="footer">
        <div className="leftFooter">
        <h4>Downoad our App</h4>
        <p>Available for Android and IOS mobile phone</p>
        
        <img src={playstore} alt="playstore" srcset="" />
        <img src={appstore} alt="appstore" srcset="" />
        
        </div>
        <div className="midFooter">
        <h1>A2Z Store</h1>
        <p>Quality and Costumer Satisfaction is our only Priority.</p>
        <p>Copyright 2022 &copy; A2ZStore</p>
        </div>
        <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>

        </div>
    </footer>
  )
}

export default Footer;