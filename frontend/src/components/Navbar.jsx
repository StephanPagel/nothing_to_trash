import "./navbar.scss";
import { Link } from 'react-router-dom';
import profilfoto from "../images/profilfoto.png";
import { useState } from "react";
import SidebarUserProfil from "../components/SidebarUserProfil";

export default function Navbar(props) {

    const [showSidebarUserProfil, setShowSidebarUserProfil] = useState(false)

    return (
        <div className="navbar">
            <div className="navbar_li">
                <Link className="linktohome" to="/">nothingtotrash</Link>
                <ul>
                    <li><Link className="navbarlink" to="/marketplace">Marktplatz</Link></li>
                    <li><Link className="navbarlink" to="/about_us">Über uns</Link></li>
                </ul>
            </div>

            {!props.token &&
                <div>
                    <button className="navbar_btn_log">
                        <Link to="/login">LogIn</Link>
                    </button>
                    <button className="navbar_btn"><Link to="/register">Registriere Dich</Link></button>
                </div>
            }
            {props.token &&
                <div>
                    <button className="btn_profilfoto" onClick={() => setShowSidebarUserProfil(!showSidebarUserProfil)}><img className="profilfoto" src={profilfoto} alt="Profilfoto" /></button>
                </div>
            }
            {showSidebarUserProfil &&
                <div>
                    <SidebarUserProfil
                        token={props.token}
                        setToken={props.setToken}
                        setUserData={props.setUserData}
                        userData={props.userData}
                        setErrorMessage={props.setErrorMessage}
                        setShowSidebarUserProfil={setShowSidebarUserProfil}
                    />
                </div>
            }

        </div >
    )
}
