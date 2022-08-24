import "./footer.scss"
import { Link } from 'react-router-dom'
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from 'react-icons/bs'
import circle from "../images/Ellipse 35.png"

export default function Footer() {
  return (
    <div className="footer">
      <img src="" alt="" />
      <div className="footer_register">
        <h3>nothingtotrash - eine online Plattform um Müll zu vermeiden.</h3>
        <Link to="/register"><button className="footer_btn">Registriere Dich</button></Link>
      </div>
      <div className="footer_container">
        <div className="footer_icons">
          <a target={''} className="twitter" href="https://twitter.com">
            <i><AiOutlineTwitter /></i>
          </a>
          <a target={''} className="facebook" href="https://de-de.facebook.com/">
            <i><BsFacebook /></i>
          </a>
          <a target={''} className="instagram" href="https://www.instagram.com">
            <i><AiFillInstagram /></i>
          </a>
        </div>
        <p>COPYRIGHT nothingtotrash 2021 - <span>TERMS & CONDITIONS PRIVACY POLICY </span></p>
        <img className="circle" src={circle} alt="circle" />
      </div>
    </div>
  );
}
