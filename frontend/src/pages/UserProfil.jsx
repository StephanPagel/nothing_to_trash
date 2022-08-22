import ProductCard from "./../components/ProductCard"
import SidebarUserProfil from "./../components/SidebarUserProfil"

const UserProfil = (props) => {
    return (<div>

        <SidebarUserProfil token={props.token} setToken={props.setToken} setUserData={props.setUserData} userData={props.userData} setErrorMessage={props.setErrorMessage} />
        {props.allProducts &&
            props.allProducts.map((product) => (
                <ProductCard
                    key={product._id}
                    adType={product.adType}
                    delivery={product.delivery}
                    title={product.title}
                    condition={product.condition}
                    brand={product.brand}
                    descriptionShort={product.descriptionShort}
                    descriptionLong={product.descriptionLong}
                    amount={product.amount}
                    price={product.price}
                    priceOptions={product.priceOptions}
                    category={product.category}
                    filename={product.filename}
                />
            ))}
    </div>);
}

export default UserProfil;