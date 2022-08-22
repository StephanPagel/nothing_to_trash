import { Link } from 'react-router-dom'
import './home.scss';
import ricefield from '../images/home_workers_on_ricefield.jpg'

export default function Home() {
  return (
    <div className="home">
      <img src={ricefield} alt="rating" />
      <div className="home_container">
        <h1>Hilf mit, die Umwelt zu schützen</h1>
        <p>
          Abfälle bedrohen Vögel, Delfine und Co. Mehr als zehn Millionen Tonnen
          Abfälle gelangen jährlich in die Ozeane. Sie kosten Abertausende
          Meerestiere das Leben. Seevögel verwechseln Plastik mit natürlicher
          Nahrung, Delfine verfangen sich in alten Fischernetzen. Hilf mit Müll
          zu reduzieren und trashnothing.
        </p>
        <button><Link to="/register">Starte jetzt!</Link></button>
      </div>
      <div className="home_image"></div>
      <div className="home_image_two">
        <div className="home_details">
          <h2>Ohne Limits</h2>
          <p> Abfälle bedrohen Vögel, Delfine und Co. Mehr als zehn Millionen Tonnen
            Abfälle gelangen jährlich in die Ozeane. Sie kosten Abertausende
            Meerestiere das Leben. Seevögel verwechseln Plastik mit natürlicher
            Nahrung, Delfine verfangen sich in alten Fischernetzen. Hilf mit Müll
            zu reduzieren und trashnothing.</p>
        </div>
        <div className="home_details_two">
          <button className="btnbtn">Zur Dokumentation</button>
          <p> Abfälle bedrohen Vögel, Delfine und Co. Mehr als zehn Millionen Tonnen
            Abfälle gelangen jährlich in die Ozeane. Sie kosten Abertausende
            Meerestiere das Leben. Seevögel verwechseln Plastik mit natürlicher
            Nahrung, Delfine verfangen sich in alten Fischernetzen. Hilf mit Müll
            zu reduzieren und trashnothing.</p>
          <button className="btnbtn">Zur Dokumentation</button>
        </div>
      </div>
      <div className="home_image_three"></div>
    </div>
  );
}
