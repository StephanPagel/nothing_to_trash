import SetProductForm from "../components/SetProductForm";
import LogoutButton from "../components/LogoutButton";

const SetProduct = (props) => {

    return (
        <div>
            <SetProductForm token={props.token} />
        </div>
    );
}

export default SetProduct;
