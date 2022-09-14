import "./Review.css";
import "./Media.css";
import pic1 from "../images/WhatsApp Image 2022-09-13 at 10.57.04 PM.jpeg";

const Review = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        customer's <span>review</span>
      </h1>

      <div className="products-box">
        <div className="box">
          <div className="stars">
            <i className="star">☆</i>
            <i className="star">☆</i>
            <i className="star">☆</i>
            <i className="star">☆</i>
            <i className="star">☆</i>
          </div>
          <p>
            good products good products good products good products good
            products good products good products good products good products
            good products good products good products good products good
            products good products good.
          </p>
          <div className="user">
            <img src={pic1} alt="." />
            <div className="user-info">
              <h3>guru ji</h3>
              <span>happy customer</span>
            </div>
          </div>
          <span className="quote-right"></span>
        </div>

        <div className="box">
          <div className="stars">
            <i className="star">☆</i>
            <i className="star">☆</i>
            <i className="star">☆</i>
            <i className="star">☆</i>
            <i className="star">☆</i>
          </div>
          <p>
            good products good products good products good products good
            products good products good products good products good products
            good products good products good products good products good
            products good products good.
          </p>
          <div className="user">
            <img src={pic1} alt="." />
            <div className="user-info">
              <h3>guru ji</h3>
              <span>happy customer</span>
            </div>
          </div>
          <span className="quote-right"></span>
        </div>

        <div className="box">
          <div className="stars">
            <i className="star">☆</i>
            <i className="star">☆</i>
            <i className="star">☆</i>
            <i className="star">☆</i>
            <i className="star">☆</i>
          </div>
          <p>
            good products good products good products good products good
            products good products good products good products good products
            good products good products good products good products good
            products good products good.
          </p>
          <div className="user">
            <img src={pic1} alt="." />
            <div className="user-info">
              <h3>guru ji</h3>
              <span>happy customer</span>
            </div>
          </div>
          <span className="quote-right"></span>
        </div>
      </div>
    </section>
  );
};

export default Review;
