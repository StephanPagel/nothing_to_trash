import "./sidebar.scss";
import { useState, useEffect } from "react";

export default function Sidebar({
  searchResults,
  productCategory,
  setProductCategory,
  productCondition,
  setProductCondition,
  productDelivery,
  setProductDelivery,
  setFilteredResult,
}) {
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
    console.log(filteredByCategory);
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
    console.log(filteredByCondition);
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
    setFilteredResult(filteredByDelivery);
    console.log(filteredByDelivery);
  }, [productCategory, productCondition, productDelivery, searchResults]);

  return (
    <div className="sidebar">
      <h3>Kategorien</h3>
      <div className="sidebar_category">
        <div>
          <input
            type="checkbox"
            onChange={handleChangeCategory}
            value={"möbel"}
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
      <div>
        <input
          type="checkbox"
          onChange={handleChangeCondition}
          value={"Wie neu"}
        />
        <label>Wie neu</label>
      </div>
      <div>
        <input type="checkbox" onChange={handleChangeCondition} value={"Gut"} />
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
      <h3>Versand</h3>
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
      <div>
        <input type="range" name="" id="" />
        <p></p>
      </div>
      <div className="sidebar_buttons">
        <button className="sidebar_btn">Anwenden</button>
        <button className="sidebar_btn_reset">Reset</button>
      </div>
    </div>
  );
}
