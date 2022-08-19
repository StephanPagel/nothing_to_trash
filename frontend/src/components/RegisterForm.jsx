import { useState } from "react";
import { apiBaseUrl } from "./../api";
import { Link } from "react-router-dom";
import "./registerForm.scss";

const RegisterForm = ({ setToken }) => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [fehlermeldung, setFehlermeldung] = useState(false)
    const [passwordFehler, setPasswordFehler] = useState(false)
    const [registerSuccessfull, setRegisterSuccessfull] = useState(false)

    const neuenNutzerRegistrieren = (e) => {
        e.preventDefault();

        if (!username || !email || !password || !confirmPassword) {
            setFehlermeldung(true)
            return
        }

        if (password !== confirmPassword) {
            setPasswordFehler(true)
            return
        }

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
        <div>
            <h1>Registriere dich gleich hier:</h1>
            <form>
                <div>
                    <label htmlFor="username">Benutzername:</label>
                    <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Benutzername" required />
                </div>
                <div>
                    <label htmlFor="email">Emailaddresse:</label>
                    <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                </div>
                <div>
                    <label htmlFor="password">Passwort:</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Passwortbestätigung:</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Password hier nochmal wiederholen" required />
                </div>
                <input type="submit" value="Registrieren" onClick={neuenNutzerRegistrieren} />
            </form>
            {fehlermeldung &&
                <div className="popUp">
                    <p>Bitte fülle alle Felder aus.</p>
                    <button onClick={() => setFehlermeldung(false)}>Schließen</button>
                </div>
            }
            {passwordFehler &&
                <div className="popUp">
                    <p>Die Passwörter stimmen nicht überein.</p>
                    <button onClick={() => setPasswordFehler(false)}>Schließen</button>
                </div>
            }
            {registerSuccessfull &&
                <div className="popUp">
                    <p>Vielen Dank für deine Registrierung.</p>
                    <button onClick={() => setRegisterSuccessfull(false)}>Schließen</button>
                </div>
            }
            <div>
                <h2>Hast du schon ein Nutzerkonto?</h2>
                <Link to="/login">Dann geht's hier zum Login</Link>
            </div>
        </div>
    );
}

export default RegisterForm;