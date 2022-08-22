import "./productDetail.scss";
import sofa from "../images/marketplace_sofa.jpg";

export default function ProductDetail() {
  return (
    <div>
      <img src={sofa} alt="product" />
      <span>Couch</span>
      <h2>45.00 EUR</h2>
      <p>Zustand</p>
      <p>Wie neu</p>
      <p>Marke</p>
      <p>SofaXL</p>
      <p>Lieferung</p>
      <p>Ja</p>
      <p>1 Stk</p>
      <button>♡ Auf die Wunschliste</button>
      <span>Produktbeschreibung</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac id
        elementum nec dolor. Ridiculus diam ac tellus id egestas mauris sed
        etiam. Amet, at eu tristique quis. Massa fermentum eget pharetra magna
        vitae vitae ultricies consequat. Amet, integer diam sit netus adipiscing
        eu vestibulum vitae ut. Sem vel fringilla malesuada amet. Tellus massa
        amet porta vel in. Viverra non proin tempus viverra rhoncus volutpat ac.
        Accumsan facilisi orci et amet vitae mauris scelerisque sed.
      </p>
      <button>Bearbeiten</button>
      <button>Verkauft</button>
    </div>
  );
}
