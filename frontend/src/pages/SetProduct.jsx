import SetProductForm from "../components/SetProductForm";
import LogoutButton from "../components/LogoutButton";

const SetProduct = (props) => {
  return (
    <div>
      <SetProductForm />
      <LogoutButton setToken={props.setToken} />
    </div>
  );
};

export default SetProduct;
