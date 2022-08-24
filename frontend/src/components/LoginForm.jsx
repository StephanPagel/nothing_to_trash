import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiBaseUrl } from "./../api";
import "./loginForm.scss";
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

const LoginForm = ({ setToken, errorMessage, setErrorMessage }) => {
    const [email, setEmail] = useState("max.mustermann@gmail.com");
    const [password, setPassword] = useState("max123");

    const navigate = useNavigate();
    const login = (event) => {
        event.preventDefault();

        fetch(apiBaseUrl + "users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password,
            }),
            credentials: 'include'
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.message) {
                    return setErrorMessage(result.message);
                }

                setToken(result.accessToken);
                setErrorMessage(null);
                // Route noch anpassen Wohin soll das gehen?
                navigate("/marketplace");
            });
    };

    return (
        <div className="login">
            <div className="login_container">
                <h1>Log dich ein!</h1>
                <div className="form">
                    <input type="text"
                        placeholder="E-Mail Adresse"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form">
                    <input type="password"
                        placeholder="Passwort"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="registerbtn_blue" onClick={login}
                >
                    Login
                </button>
            </div>
            {errorMessage && (

                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
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
        </div >
    );
};

export default LoginForm;