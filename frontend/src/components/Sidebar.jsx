import oneStar from "../images/already_sold_rating_1_star.jpg";
import twoStars from "../images/already_sold_rating_2_stars.jpg";
import threeStars from "../images/already_sold_rating_3_stars.jpg";
import fourStars from "../images/already_sold_rating_4_stars.jpg";
import fiveStars from "../images/already_sold_rating_5_stars.jpg";
import "./sidebar.scss";

export default function Sidebar() {

  return (
    <div className="sidebar">
      <h3>Kategorien</h3>
      <div className="sidebar_category">
        <p>Kategorie Name</p>
        <h6>320</h6>
        <p>Kategorie Name</p>
        <h6>112</h6>
        <p>Kategorie Name</p>
        <h6>32</h6>
        <p>Kategorie Name</p>
        <h6>48</h6>
      </div>
      <h3>Marken</h3>
      <div className="sidebar_checkbox">
        <input type="checkbox" />
        <label>Nach Markenname filtern</label>
        <input type="checkbox" />
        <label>Nach Markenname filtern</label>
        <input type="checkbox" />
        <label>Nach Markenname filtern</label>
        <input type="checkbox" />
        <label>Nach Markenname filtern</label>
        <input type="checkbox" />
        <label>Nach Markenname filtern</label>
      </div>
      <h3>Bewertung</h3>
      <div className="sidebar_rating">
        <input type="checkbox" />
        <label>
          <img src={oneStar} alt="rating" />
        </label>
        <input type="checkbox" />
        <label>
          <img src={twoStars} alt="rating" />
        </label>
        <input type="checkbox" />
        <label>
          <img src={threeStars} alt="rating" />
        </label>
        <input type="checkbox" />
        <label>
          <img src={fourStars} alt="rating" />
        </label>
        <input type="checkbox" />
        <label>
          <img src={fiveStars} alt="rating" />
        </label>
      </div>
      <h3>Preis</h3>
      <div>
        <input type="range" name="" id="" />
        <p>Slider wird noch umgebaut. Bitte mit Styling warten</p>
      </div>
      <div>
        <button className="sidebar_btn">Anwenden</button>
        <button className="sidebar_btn_reset">Reset</button>
      </div>
    </div>
  );
}
