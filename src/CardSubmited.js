import image from "./images/illustration-thank-you.svg";

function CardSubmited({ raiting }) {
  return (
    <div className="card-content card-center">
      <img className="raiting-image" src={image} alt="thank you image" />
      {
        <p className="raiting-result">
          You selected <span>{raiting}</span> out of 5
        </p>
      }
      <div className="card-thanks">
        <h3>Thank you!</h3>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

export default CardSubmited;
