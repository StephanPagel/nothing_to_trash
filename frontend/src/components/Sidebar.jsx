import "./sidebar.scss";
import { useState, useEffect } from "react";
import { Range } from "react-range";

export default function Sidebar({
  searchResults,
  productCategory,
  setProductCategory,
  productCondition,
  setProductCondition,
  productDelivery,
  setProductDelivery,
  setFilteredResult,
  productPrice,
  setProductPrice,
  allProducts,
}) {
  const MIN = 0;
  const MAX = 1000;
  const [values, setValues] = useState([0, 1000]);

  const handleChangeCategory = (e) => {
    if (e.target.checked) {
      setProductCategory([...productCategory, e.target.value]);
    } else {
      setProductCategory(
        productCategory.filter((category) => category !== e.target.value)
      );
    }
  };

  const handleChangeCondition = (e) => {
    if (e.target.checked) {
      setProductCondition([...productCondition, e.target.value]);
    } else {
      setProductCondition(
        productCondition.filter((condition) => condition !== e.target.value)
      );
    }
  };

  const handleChangeDelivery = (e) => {
    if (e.target.checked) {
      setProductDelivery([...productDelivery, e.target.value]);
    } else {
      setProductDelivery(
        productDelivery.filter((delivery) => delivery !== e.target.value)
      );
    }
  };

  useEffect(() => {
    //############# category !!!##############
    const filteredByCategory = searchResults.filter((category) => {
      if (productCategory.length === 0) {
        return category;
      } else {
        return (
          category.category === productCategory[0] ||
          category.category === productCategory[1] ||
          category.category === productCategory[2]
        );
      }
    });
    //############# condition !!!##############
    const filteredByCondition = filteredByCategory.filter((condition) => {
      if (productCondition.length === 0) {
        return condition;
      } else {
        return (
          condition.condition === productCondition[0] ||
          condition.condition === productCondition[1] ||
          condition.condition === productCondition[2] ||
          condition.condition === productCondition[3]
        );
      }
    });
    //############# Delivery !!!##############
    const filteredByDelivery = filteredByCondition.filter((delivery) => {
      if (productDelivery.length === 0) {
        return delivery;
      } else {
        return (
          delivery.delivery === productDelivery[0] ||
          delivery.delivery === productDelivery[1]
        );
      }
    });
    //############# Price !!!##############
    const filteredByPrice = filteredByDelivery.filter((price) => {
      if (productPrice.length <= 0) {
        return price;
      } else {
        return price.price >= productPrice[0] && price.price <= productPrice[1];
      }
    });
    setFilteredResult(filteredByPrice);
    console.log(filteredByPrice);
  }, [
    productCategory,
    productCondition,
    productDelivery,
    searchResults,
    productPrice,
    allProducts,
  ]);

  return (
    <div className="sidebar">
      <h3>Kategorien</h3>
      <div className="sidebar_category">
        <div>
          <input
            type="checkbox"
            onChange={handleChangeCategory}
            value={"moebel"}
          />
          <label>Möbel</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleChangeCategory}
            value={"kleidung"}
          />
          <label>Kleidung</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleChangeCategory}
            value={"trainer"}
          />
          <label>Trainer</label>
        </div>
      </div>
      <h3>Zustand</h3>
      <div className="sidebar_condition">
        <div>
          <input
            type="checkbox"
            onChange={handleChangeCondition}
            value={"Wie neu"}
          />
          <label>Wie neu</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleChangeCondition}
            value={"Gut"}
          />
          <label>Gut</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleChangeCondition}
            value={"Deutliche Gebrauchsspuren"}
          />
          <label>Gebraucht</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleChangeCondition}
            value={"Defekt"}
          />
          <label>Defekt</label>
        </div>
      </div>
      <h3>Versand</h3>
      <div className="sidebar_delivery">
        <div>
          <input
            type="checkbox"
            onChange={handleChangeDelivery}
            value={"deliveryYes"}
          />
          <label>Lieferung: Ja</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleChangeDelivery}
            value={"deliveryNo"}
          />
          <label>Lieferung: Nein</label>
        </div>
      </div>
      <h3>Bewertung</h3>
      <div className="sidebar_rating">
        <div>
          <input type="checkbox" />
          <label>⭐️</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>⭐️⭐️</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>⭐️⭐️⭐️</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>⭐️⭐️⭐️⭐️</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>⭐️⭐️⭐️⭐️⭐️</label>
        </div>
      </div>
      <h3>Preis</h3>
      <Range
        step={1}
        min={MIN}
        max={MAX}
        values={values}
        onChange={(values) => {
          setValues(values);
          setProductPrice(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "8px",
              width: "60%",
              backgroundColor: "#7854F7",
              marginTop: "20px",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "24px",
              width: "24px",
              backgroundColor: "#999",
            }}
          />
        )}
      />
      <div className="valueContainer">
        <p>Filtern</p>
        <p>{values[0]} € - {values[1]} €</p>
      </div>
    </div>
  );
}
