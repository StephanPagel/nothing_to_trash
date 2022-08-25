import SetProductForm from "../components/SetProductForm";

const SetProduct = (props) => {

    return (
        <div>
            <SetProductForm allProducts={props.allProducts} token={props.token} setAllProducts={props.setAllProducts} />
        </div>
    );
}

export default SetProduct;
