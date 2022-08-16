import React from 'react'
import "./footer.scss"
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from 'react-icons/bs'

export default function Footer() {
    return (
      <div className="footer">
        <h3>nothingtotrash - eine online Plattform um Müll zu vermeiden.</h3>
        <button>Registriere Dich</button>
        <div className="footer_container">
          <AiOutlineTwitter />
          <BsFacebook />
          <AiFillInstagram />
          <p>COPYRIGHT nothingtotrash 2021 -</p>
          <span>TERMS & CONDITIONS PRIVACY POLICY</span>
        </div>
      </div>
    );
}
