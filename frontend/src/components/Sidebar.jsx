import "./sidebar.scss";

export default function Sidebar() {

  return (
    <div className="sidebar">
      <h3>Kategorien</h3>
      <div className="sidebar_category">
        <div>
          <input type="checkbox" />
          <label>Möbel</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Kleidung</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Trainer</label>
        </div>
      </div>
      <h3>Marken</h3>
      <div className="sidebar_checkbox">
        <div>
          <input type="checkbox" />
          <label>Nach Markenname filtern</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Nach Markenname filtern</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Nach Markenname filtern</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Nach Markenname filtern</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Nach Markenname filtern</label>
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
