import "./sidebar.scss";
import { useState, useEffect } from "react";

export default function Sidebar({ allProducts }) {
  const [productCategory, setProductCategory] = useState([]);
  // const [filteredCategory, setFilteredCategory] = useState([]);

  const handleChange = (e) => {
    if (e.target.checked) {
      setProductCategory([...productCategory, e.target.value]);
    } else {
      setProductCategory(
        productCategory.filter((category) => category !== e.target.value)
      );
    }
  };

  console.log(productCategory);

  return (
    <div className="sidebar">
      <h3>Kategorien</h3>
      <div className="sidebar_category">
        <div>
          <input type="checkbox" onChange={handleChange} value={"möbel"} />
          <label>Möbel</label>
        </div>
        <div>
          <input type="checkbox" onChange={handleChange} value={"kleidung"} />
          <label>Kleidung</label>
        </div>
        <div>
          <input type="checkbox" onChange={handleChange} value={"trainer"} />
          <label>Trainer</label>
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
