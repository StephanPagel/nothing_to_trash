import { useState } from "react";
import { apiBaseUrl } from "./../api";
// import { Link } from "react-router-dom";
import "./registerForm.scss";
import Elipse15 from "./../images/Ellipse15.png";
import Elipse26 from "./../images/Ellipse26.png";
import Elipse27 from "./../images/Ellipse27.png";
import Elipse28 from "./../images/Ellipse28.png";
import Elipse29 from "./../images/Ellipse29.png";
import Elipse30 from "./../images/Ellipse30.png";
import Schatten15 from "./../images/Schatten15.png";
import Schatten26 from "./../images/Schatten26.png";
import Schatten27 from "./../images/Schatten27.png";
import Schatten28 from "./../images/Schatten28.png";
import Schatten29 from "./../images/Schatten29.png";
import Schatten30 from "./../images/Schatten30.png";

const RegisterForm = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [registerSuccessfull, setRegisterSuccessfull] = useState(false)

    const neuenNutzerRegistrieren = (e) => {
        e.preventDefault();

        fetch(apiBaseUrl + "users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                email,
                password
            }),
        })
            .then((res) => res.json(),
                setEmail(""),
                setUsername(""),
                setPassword(""),
                setConfirmPassword(""),
                setRegisterSuccessfull(true)
            )
            .catch((error) => {
                console.log(error)
            })
    };

    return (
        <div className="register">
            <h1>Registriere dich & nimm teil</h1>
            {!registerSuccessfull &&
                <div>
                    <form className="form_container">
                        <h2>Mit Email anmelden</h2>
                        <div className="form">
                            <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Benutzername" required />
                        </div>
                        <div className="form">
                            <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                        </div>
                        <div className="form">
                            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                        </div>
                        <div className="form">
                            <input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Password bestätigen" required />
                        </div>
                        {(!username || !email || !password || !confirmPassword || password !== confirmPassword) &&
                            <div>
                                <input className="registerbtn_red" type="submit" value="Registrieren" />
                            </div>
                        }
                        {(username && email && password && confirmPassword && password === confirmPassword) &&
                            <div>
                                <input className="registerbtn_blue" type="submit" value="Registrieren" onClick={neuenNutzerRegistrieren} />
                            </div>
                        }
                    </form>
                </div>
            }
            {registerSuccessfull &&
                <div className="popUp">
                    <p>Vielen Dank für deine Registrierung.</p>
                    <button className="registerbtn_blue" onClick={() => setRegisterSuccessfull(false)}>Schließen</button>
                </div>
            }
            <img className="elipse1" src={Elipse15} alt="" />
            <img className="elipse2" src={Elipse26} alt="" />
            <img className="elipse3" src={Elipse27} alt="" />
            <img className="elipse4" src={Elipse28} alt="" />
            <img className="elipse5" src={Elipse29} alt="" />
            <img className="elipse6" src={Elipse30} alt="" />
            <img className="elipse7" src={Schatten15} alt="" />
            <img className="elipse8" src={Schatten26} alt="" />
            <img className="elipse9" src={Schatten27} alt="" />
            <img className="elipse10" src={Schatten28} alt="" />
            <img className="elipse11" src={Schatten29} alt="" />
            <img className="elipse12" src={Schatten30} alt="" />
            <div className="dot_grid_greendots">
                <div className="one_dot_green"></div>
                <div className="one_dot_green"></div>
                <div className="one_dot_green"></div>
                <div className="one_dot_green"></div>
                <div className="one_dot_green"></div>
                <div className="one_dot_green"></div>
                <div className="one_dot_green"></div>
                <div className="one_dot_green"></div>
                <div className="one_dot_green"></div>
                <div className="one_dot_green"></div>
                <div className="one_dot_green"></div>
                <div className="one_dot_green"></div>
                <div className="one_dot_green"></div>
                <div className="one_dot_green"></div>
                <div className="one_dot_green"></div>
            </div>
            <div className="dot_grid_twelvereddots">
                <div className="one_dotred"></div>
                <div className="one_dotred"></div>
                <div className="one_dotred"></div>
                <div className="one_dotred"></div>
                <div className="one_dotred"></div>
                <div className="one_dotred"></div>
                <div className="one_dotred"></div>
                <div className="one_dotred"></div>
                <div className="one_dotred"></div>
                <div className="one_dotred"></div>
            </div>
        </div>
    );
}

export default RegisterForm;