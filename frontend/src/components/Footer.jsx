import React from 'react'
import "./footer.scss"
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from 'react-icons/bs'

export default function Footer() {
    return (
        <div className="footer">
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
