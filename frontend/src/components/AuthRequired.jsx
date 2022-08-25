import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { apiBaseUrl } from "./../api";

const AuthRequired = ({ token, children, setToken }) => {
    const [loading, setLoading] = useState(true);
    console.log("inAuth", token)
    useEffect(() => {
        console.log("inEffect", token)
        if (token) {
            setLoading(false);
            //Token already exists, no need to do anything
            return;
        }

        // silent refresh
        function doSilentRefreshToken() {
            fetch(apiBaseUrl + "users/refreshtoken", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                // Damit er die HTTP Only Secure Cookies abspeichert im Browser!
                credentials: "include",
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("inFetch", data)
                    setLoading(false);
                    setToken(data.token);

                    const NINE_MINUTES = 9 * 60 * 1000;
                    const timeoutId = setTimeout(() => {
                        // doRefreshToken rekursiv (Rekursion) aufrufen
                        doSilentRefreshToken();
                        // timeout self destruction
                        clearTimeout(timeoutId);
                    }, NINE_MINUTES);
                });
        }

        doSilentRefreshToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!token) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};

export default AuthRequired;