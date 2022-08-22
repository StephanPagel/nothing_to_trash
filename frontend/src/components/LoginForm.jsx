import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiBaseUrl } from "./../api";
import "./loginForm.scss";

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
                    onClick={login}
                >
                    Login
                </button>
            </div>
            {/* {errorMessage && (

                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
        </div>
    );
};

export default LoginForm;