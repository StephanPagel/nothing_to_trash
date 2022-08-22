import "./productDetail.scss"
import sofa from '../images/marketplace_sofa.jpg'
import { Link } from 'react-router-dom'

export default function ProductDetail() {
  return (
    <div className="product_details">
      <div className="product_img">
        <img src={sofa} alt="product" />
      </div>
      <div className="product_box">
        <h1>Couch</h1>
        <h2>45.00 EUR</h2>
        <tbody>
          <tr>
            <td>Zustand</td>
            <td>Wie neu</td>
          </tr>
          <tr>
            <td>Marke</td>
            <td>Sofa XXL</td>
          </tr>
          <tr>
            <td>Lieferung</td>
            <td>ja</td>
          </tr>
          <tr>
            <td>Anzahl</td>
            <td>1st</td>
          </tr>
        </tbody>
        <div className="product_detail_btn">
          <button><Link to="/wishlist">Wunschliste ❤️</Link></button>
        </div>
        <h3>Produktbeschreibung</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac id
          elementum nec dolor. Ridiculus diam ac tellus id egestas mauris sed
          etiam. Amet, at eu tristique quis. Massa fermentum eget pharetra magna
          vitae vitae ultricies consequat. Amet, integer diam sit netus
          adipiscing eu vestibulum vitae ut. Sem vel fringilla malesuada amet.
          Tellus massa amet porta vel in. Viverra non proin tempus viverra
          rhoncus volutpat ac. Accumsan facilisi orci et amet vitae mauris
          scelerisque sed.
        </p>
      </div>
      <div className="product_btn">
        <button>Bearbeiten</button>
        <button>Verkauft</button>
      </div>
      <div></div>
    </div>
  )
}
