import { useNavigate } from "react-router-dom";
import { apiBaseUrl } from "./../api";


const LogoutButton = ({ setToken }) => {

    const navigate = useNavigate();

    const logout = () => {
        fetch(apiBaseUrl + "users/logout",
            { credentials: "include" })
            .then((res) => {
                console.log(res)
                setToken(null);
                navigate("/");
            });
    };

    return (<div>

        <div><button className="navbar_btn_log" onClick={logout}>Logout</button></div>

    </div>);
}

export default LogoutButton;