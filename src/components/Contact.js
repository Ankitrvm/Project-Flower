import "./Contact.css";
import "./Media.css";
import pikachu from "../images/contact-img.svg"

const Contect = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        <span> contact </span> us
      </h1>

      <div className="row">
        <form action="">
          <input type="text" placeholder="name" className="box" />
          <input type="email" placeholder="email" className="box" />
          <input type="number" placeholder="number" className="box" />
          <textarea
            name=""
            className="box"
            placeholder="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="send message" className="btn" />
        </form>

        <div className="image">
          <img src={pikachu} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contect;
