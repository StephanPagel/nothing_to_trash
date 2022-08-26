import { Link } from "react-router-dom";
import "./home.scss";
import homelinksgross from "./../images/homelinksgross.png";
import homelinksklein from "./../images/homelinksklein.png";
import homemitte from "./../images/homemitte.png";
import homerechtsgross from "./../images/homerechtsgross.png";
import homerechtskleinunten from "./../images/homerechtskleinunten.png";
import homerechtslinksoben from "./../images/homerechtslinksoben.png";
import homerechtsganzoben from "./../images/homerechtsganzoben.png";
import homesection3top from "./../images/homesection3top.png";
import homesection3bottom from "./../images/homesection3bottom.png";

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
            <p>
              Für deutsche Konsumentinnen und Konsumenten ist nach wie vor der
              Preis ein zentrales Hindernis für nachhaltige Kaufentscheidungen
            </p>
          </div>
          <div>
            <img
              src={homemitte}
              alt="Möbelansammlung draußen an einer Hauswand"
            />
            <h4>Verschenke und Schütze</h4>
            <p>
              Die größte Hürde auf dem Weg zu mehr Nachhaltigkeit bleibt
              weiterhin die mangelnde Konsistenz zwischen Einstellung und
              Kaufentscheidung.
            </p>
          </div>
          <div>
            <img src={homerechtsgross} alt="Regenwald" />
            <img
              src={homerechtskleinunten}
              alt="Frau sitzend auf einem Berggipfel"
            />
            <img
              src={homerechtslinksoben}
              alt="Vier Menschen vor einem Laptop"
            />
            <img
              src={homerechtsganzoben}
              alt="Vier Menschen im Sonnenschein, gute Laune, tanzen"
            />
            <h4>Der Umwelt zuliebe</h4>
            <p>
              Mit welchen Stellschrauben kann ich tatsächlich etwas bewirken –
              ohne meinen Alltag komplett umstellen zu müssen?
            </p>
          </div>
        </div>
      </div>
      <div className="section_three">
        <div className="ohne_limits">
          <img src={homesection3top} alt="zwei Frauen mit Macbook" />
          <div>
            <h2>Ohne</h2>
            <h2>Limits</h2>
            <p>
              {" "}
              Biete auf unserer Plattform deine gebrauchten Artikel an und
              verlängere somit ihren Lebenszyklus. Durch die Verlängerung der
              Nutzungsdauer deiner Artikel hilfst du mit, CO2-Emissionen für die
              Produktion neuer Artikel zu vermeiden und leistest somit einen
              Beitrag zum Klimaschutz.
            </p>
            <button className="btnbtn">
              <Link to="">Zur Dokumentation</Link>
            </button>
          </div>
        </div>
        <div className="kenne_deine_community">
          <div>
            <h2>Kenne deine</h2>
            <h2>Community</h2>
            <p>
              {" "}
              Unsere Community wächst stetig. Immer mehr Menschen möchten durch
              die Veränderung ihrer Konsumentscheidungen einen positiven Beitrag
              zum Klimaschutz leisten. Auf unserer Plattform hast du die
              Möglichkeit dazu. Sei auch du dabei und verkaufe deine Artikel auf
              Nothing To Trash. (Ökologische Fragen stehen bei älteren Menschen
              klar im Fokus, während jüngere Verbraucherinnen und Verbraucher
              sich stärker für soziale Aspekte interessieren)
            </p>
            <button className="btnbtn">
              <Link to="">Zur Dokumentation</Link>
            </button>
          </div>
          <img
            src={homesection3bottom}
            alt="Meeting in einem modernen Büro mit Whiteboard"
          />
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
        <p>
          Wir engagieren uns nicht nur auf unserer Plattform, sondern setzen uns
          auch weltweit für Klimaschutzprojekte ein. Zusammen mit unseren
          Partnern kämpfen wir für einen Planeten, der auch für kommende
          Generationen noch lebenswert ist.
        </p>
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
