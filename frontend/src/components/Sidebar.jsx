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
        <tr>
          <td>Kategorie Name</td>
          <td>320</td>
        </tr>
        <tr>
          <td>Kategorie Name</td>
          <td>300</td>
        </tr>
        <tr>
          <td>Kategorie Name</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Kategorie Name</td>
          <td>30</td>
        </tr>
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
        <p></p>
      </div>
      <div>
        <button className="sidebar_btn">Anwenden</button>
        <button className="sidebar_btn_reset">Reset</button>
      </div>
    </div>
  );
}
