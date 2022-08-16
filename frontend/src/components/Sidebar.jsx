import oneStar from "../images/already_sold_rating_1_star.jpg";
import twoStars from "../images/already_sold_rating_2_stars.jpg";
import threeStars from "../images/already_sold_rating_3_stars.jpg";
import fourStars from "../images/already_sold_rating_4_stars.jpg";
import fiveStars from "../images/already_sold_rating_5_stars.jpg";
import "./sidebar.scss";

export default function Sidebar() {

  return (
    <div className="sidebar">
      <div>
        <h3>Kategorien</h3>
        <p>Kategorie Name</p>
        <span>320</span>
        <p>Kategorie Name</p>
        <span>112</span>
        <p>Kategorie Name</p>
        <span>32</span>
        <p>Kategorie Name</p>
        <span>48</span>
      </div>
      <div>
        <h3>Marken</h3>
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
      <div>
        <h3>Bewertung</h3>
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
      <div>
        <h3>Preis</h3>
        <input type="range" name="" id="" />
        <p>Slider wird noch umgebaut. Bitte mit Styling warten</p>
      </div>
    <div>
        <button>Anwenden</button>
        <button>Reset</button>
    </div>
    </div>
  );
}
