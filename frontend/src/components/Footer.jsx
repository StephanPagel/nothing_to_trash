import "./footer.scss"
import { Link } from 'react-router-dom'
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from 'react-icons/bs'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_register">
        <h3>nothingtotrash - eine online Plattform um Müll zu vermeiden.</h3>
        <button className="footer_btn"><Link to="/login">Registriere Dich</Link></button>
      </div>
      <div className="footer_container">
        <a target={''} className="twitter" href="https://twitter.com">
          <i><AiOutlineTwitter /></i>
        </a>
        <a target={''} className="facebook" href="https://de-de.facebook.com/">
          <i><BsFacebook /></i>
        </a>
        <a target={''} className="instagram" href="https://www.instagram.com">
          <i><AiFillInstagram /></i>
        </a>
        <p>COPYRIGHT nothingtotrash 2021 -<span>TERMS & CONDITIONS PRIVACY POLICY</span></p>
      </div>
    </div>
  );
}
