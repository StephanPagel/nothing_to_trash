import { Link } from "react-router-dom";
import "./home.scss";
import homelinksgross from "./../images/homelinksgross.png";
import homelinksklein from "./../images/homelinksklein.png";
import homemitte from "./../images/homemitte.png";
import homerechtsgross from "./../images/homerechtsgross.png";
import homerechtskleinunten from "./../images/homerechtskleinunten.png"
import homerechtslinksoben from "./../images/homerechtslinksoben.png"
import homerechtsganzoben from "./../images/homerechtsganzoben.png"
import homesection3top from "./../images/homesection3top.png"
import homesection3bottom from "./../images/homesection3bottom.png"

export default function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <h1>Hilf mit, die Umwelt zu schützen</h1>
        <p>
          Abfälle bedrohen Vögel, Delfine und Co. Mehr als zehn Millionen Tonnen
          Abfälle gelangen jährlich in die Ozeane. Sie kosten Abertausende
          Meerestiere das Leben. Seevögel verwechseln Plastik mit natürlicher
          Nahrung, Delfine verfangen sich in alten Fischernetzen. Hilf mit Müll
          zu reduzieren und trashnothing.
        </p>
        <Link to="/register">Starte jetzt!</Link>
      </div>
      <div className="section_two">
        <h3>Lebe eCommerce mal anders</h3>
        <div className="section_two_columns">
          <div>
            <img src={homelinksgross} alt="Mann am Computer" />
            <img src={homelinksklein} alt="Mobiltelefon" />
            <h4>Verkaufen statt wegwerfen</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc
              in turpis cursus eget.</p>
          </div>
          <div>
            <img src={homemitte} alt="Möbelansammlung draußen an einer Hauswand" />
            <h4>Verschenke und Schütze</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc
              in turpis cursus eget.</p>
          </div>
          <div>
            <img src={homerechtsgross} alt="Regenwald" />
            <img src={homerechtskleinunten} alt="Frau sitzend auf einem Berggipfel" />
            <img src={homerechtslinksoben} alt="Vier Menschen vor einem Laptop" />
            <img src={homerechtsganzoben} alt="Vier Menschen im Sonnenschein, gute Laune, tanzen" />
            <h4>Der Umwelt zuliebe</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc
              in turpis cursus eget.</p>
          </div>
        </div>
      </div>
      <div className="section_three">
        <div className="ohne_limits">
          <img src={homesection3top} alt="zwei Frauen mit Macbook" />
          <div>
            <h2>Ohne</h2>
            <h2>Limits</h2>
            <p> Abfälle bedrohen Vögel, Delfine und Co. Mehr als zehn Millionen Tonnen
              Abfälle gelangen jährlich in die Ozeane. Sie kosten Abertausende
              Meerestiere das Leben. Seevögel verwechseln Plastik mit natürlicher
              Nahrung, Delfine verfangen sich in alten Fischernetzen. Hilf mit Müll
              zu reduzieren und trashnothing.</p>
            <button className="btnbtn"><Link to="">Zur Dokumentation</Link></button>
          </div>
        </div>
        <div className="kenne_deine_community">
          <div>
            <h2>Kenne deine</h2>
            <h2>Community</h2>
            <p> Abfälle bedrohen Vögel, Delfine und Co. Mehr als zehn Millionen Tonnen
              Abfälle gelangen jährlich in die Ozeane. Sie kosten Abertausende
              Meerestiere das Leben. Seevögel verwechseln Plastik mit natürlicher
              Nahrung, Delfine verfangen sich in alten Fischernetzen. Hilf mit Müll
              zu reduzieren und trashnothing.</p>
            <button className="btnbtn"><Link to="">Zur Dokumentation</Link></button>
          </div>
          <img src={homesection3bottom} alt="Meeting in einem modernen Büro mit Whiteboard" />
        </div>
        <div className="circle_big_top_left"></div>
        <div className="circle_small_top_left"></div>
        <div className="circle_big_bottom_right"></div>
        <div className="circle_small_bottom_right"></div>
        <div className="dot_grid_big">
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
        </div>
        <div className="dot_grid_small">
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
        </div>
      </div>
      <div className="section_four">
        <h2>Von echten Menschen unterstützt</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in
          turpis cursus eget.</p>
        <div className="circle_section4_one"></div>
        <div className="circle_section4_two"></div>
        <div className="circle_section4_three"></div>
        <div className="dot_grid_fivedots">
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
          <div className="one_dot"></div>
        </div>
        <div className="dot_grid_dreimalachtdots">
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
          <div className="one_dotred"></div>
        </div>
      </div>
    </div>
  );
}
