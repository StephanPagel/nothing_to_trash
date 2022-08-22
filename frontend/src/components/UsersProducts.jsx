import ProductCard from "./../components/ProductCard";

const UsersProducts = (props) => {
    console.log(props.userData.products)
    return (<div>
        {props.userData &&
            props.userData.products.map((product) => (
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

export default UsersProducts;