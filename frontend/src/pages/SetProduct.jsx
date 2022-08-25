import SetProductForm from "../components/SetProductForm";

const SetProduct = (props) => {

    return (
        <div>
            <SetProductForm token={props.token} />
        </div>
    );
}

export default SetProduct;
