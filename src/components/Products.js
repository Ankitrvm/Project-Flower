import "./Products.css";
import "./Media.css";
import picture1 from "../images/img-1.jpg";
import picture2 from "../images/img-2.jpg";
import picture3 from "../images/img-3.jpg";
import picture4 from "../images/img-4.jpg";
import picture5 from "../images/img-5.jpg";
import picture6 from "../images/img-6.jpg";
import picture7 from "../images/img-7.jpg";
import picture8 from "../images/img-8.jpg";
import picture9 from "../images/img-9.jpg";
import share from "../images/icons8-share-24.png"

const Products = () => {
  return (
    <section className="products" id="products">
      <h1 className="heading">
        letest <span> products</span>
      </h1>

      <div className="products-box">
        <div className="box">
          <span className="discount">-10%</span>
          <div className="picture">
            <img src={picture1} alt="." />
            <div className="icons">
              <a href="heart" className="heart">
                <span>🤍</span>
              </a>
              <a href="cart" className="cart-btn">
                add to cart
              </a>
              <a href="share">
              <img className="share" src={share} alt="x"/>
              </a>
            </div>
            <div className="content">
              <h3>flower pot</h3>
              <div className="price">
                ₹720.99 <span>₹900</span>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <span className="discount">-10%</span>
          <div className="picture">
            <img src={picture2} alt="." />
            <div className="icons">
              <a href="heart" className="heart">
                <span>🤍</span>
              </a>
              <a href="cart" className="cart-btn">
                add to cart
              </a>
              <a href="share" className="share">
              <img className="share" src={share} alt="x"/>
              </a>
            </div>
            <div className="content">
              <h3>flower pot</h3>
              <div className="price">
                ₹720.99 <span>₹900</span>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <span className="discount">-10%</span>
          <div className="picture">
            <img src={picture3} alt="." />
            <div className="icons">
              <a href="heart" className="heart">
                <span>🤍</span>
              </a>
              <a href="cart" className="cart-btn">
                add to cart
              </a>
              <a href="share" className="share">
              <img className="share" src={share} alt="x"/>
              </a>
            </div>
            <div className="content">
              <h3>flower pot</h3>
              <div className="price">
                ₹720.99 <span>₹900</span>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <span className="discount">-10%</span>
          <div className="picture">
            <img src={picture4} alt="." />
            <div className="icons">
              <a href="heart" className="heart">
                <span>🤍</span>
              </a>
              <a href="cart" className="cart-btn">
                add to cart
              </a>
              <a href="share" className="share">
              <img className="share" src={share} alt="x"/>
              </a>
            </div>
            <div className="content">
              <h3>flower pot</h3>
              <div className="price">
                ₹720.99 <span>₹900</span>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <span className="discount">-10%</span>
          <div className="picture">
            <img src={picture5} alt="." />
            <div className="icons">
              <a href="heart" className="heart">
                <span>🤍</span>
              </a>
              <a href="cart" className="cart-btn">
                add to cart
              </a>
              <a href="share" className="share">
              <img className="share" src={share} alt="x"/>
              </a>
            </div>
            <div className="content">
              <h3>flower pot</h3>
              <div className="price">
                ₹720.99 <span>₹900</span>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <span className="discount">-5%</span>
          <div className="picture">
            <img src={picture6} alt="." />
            <div className="icons">
              <a href="heart" className="heart">
                <span>🤍</span>
              </a>
              <a href="cart" className="cart-btn">
                add to cart
              </a>
              <a href="share" className="share">
              <img className="share" src={share} alt="x"/>
              </a>
            </div>
            <div className="content">
              <h3>flower pot</h3>
              <div className="price">
                ₹780.99 <span>₹900</span>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <span className="discount">-10%</span>
          <div className="picture">
            <img src={picture7} alt="." />
            <div className="icons">
              <a href="heart" className="heart">
                <span>🤍</span>
              </a>
              <a href="cart" className="cart-btn">
                add to cart
              </a>
              <a href="share" className="share">
              <img className="share" src={share} alt="x"/>
              </a>
            </div>
            <div className="content">
              <h3>flower pot</h3>
              <div className="price">
                ₹720.99 <span>₹900</span>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <span className="discount">-10%</span>
          <div className="picture">
            <img src={picture8} alt="." />
            <div className="icons">
              <a href="heart" className="heart">
                <span>🤍</span>
              </a>
              <a href="cart" className="cart-btn">
                add to cart
              </a>
              <a href="share" className="share">
              <img className="share" src={share} alt="x"/>
              </a>
            </div>
            <div className="content">
              <h3>flower pot</h3>
              <div className="price">
                ₹720.99 <span>₹900</span>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <span className="discount">-10%</span>
          <div className="picture">
            <img src={picture9} alt="." />
            <div className="icons">
              <a href="heart" className="heart">
                <span>🤍</span>
              </a>
              <a href="cart" className="cart-btn">
                add to cart
              </a>
              <a href="share" className="heart">
              <img className="share" src={share} alt="x"/>
              </a>
            </div>
            <div className="content">
              <h3>flower pot</h3>
              <div className="price">
                ₹720.99 <span>₹900</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
