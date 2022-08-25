import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import emre from "./../images/emre.png";
import alex from "./../images/alex.png";
import stephan from "./../images/stephan.png";
import michaela from "./../images/michaela.png";

import "./aboutUs.scss"

const AboutUs = () => {
    return (
        <div className="AboutUs">
            <h1 className="AboutHeadline">Über uns</h1>
            <div>
                <h2 className="teamHeadline">Team:</h2>
                <div className="Team">
                    <div>
                        <img src={alex} alt="Avatar Alex" />
                        <p>Alex</p>
                    </div>
                    <div>
                        <img src={emre} alt="Avatar Emre" />
                        <p>Emre</p>
                    </div>
                    <div>
                        <img src={michaela} alt="Avatar Michaela" />
                        <p>Michaela</p>
                    </div>
                    <div>
                        <img src={stephan} alt="Avatar Stephan" />
                        <p>Stephan</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="teamHeadline">Technologien:</h2>
                <div>
                    <FontAwesomeIcon icon={faHtml5} className="icontechnologies" />
                    <FontAwesomeIcon icon={faCss3} className="icontechnologies" />
                    <FontAwesomeIcon icon={faReact} className="icontechnologies" />
                    <FontAwesomeIcon icon={faFigma} className="icontechnologies" />
                    <FontAwesomeIcon icon={faGithub} className="icontechnologies" />
                </div>
            </div>
            <div>
                <p className="aboutttext">
                    Diese Webseite wurde erstellt als Abschlussprojekt im
                    Bootcamp "Fullstack Webdevelopment" von SuperCode GmbH & Co.KG,
                    Düsseldorf
                </p>
            </div>
        </div>
    );
};

export default AboutUs;