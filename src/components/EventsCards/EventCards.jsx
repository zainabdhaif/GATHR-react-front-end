import "./EventCards.css";
import { useState} from 'react';
import authService from '../../services/authService';
// import { Link } from 'react-router-dom';

const EventCards = (props) => {
  const [user, setUser] = useState(authService.getUser());
  return (
    <>
    <div className="cards-container">

    {props.cards.map((card) => (
      <div key={card._id} className="event-card">
        <img className="card-img-top" src={card.image} />
        <div className="card-body">
        <h5 className="card-title">{card.name}</h5>
        <p className="card-text">{card.location}</p>
        <p className="mb-0">
              Starting Date{' '}
              {new Date(card.dateStarted).toLocaleDateString()}
            </p>
            <p className="mb-0">
              Ending Date{' '}
              {new Date(card.dateEnded).toLocaleDateString()}
            </p>
            {(user) ? (
              ((user.type === 'admin')? (  
                <button>view details</button>
            ) : (
              <button>book</button>
            ))
            ): (<p></p>)}
   
        </div>
      </div>
    ))}
    </div>
    </>
  );
};

export default EventCards;
{/* <div className="cards-container">
  <div className="card" style={{ width: "18rem" }}>
    <img className="card-img-top" src="..." alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>

    <div className="card" style={{ width: "18rem" }}>
    <img className="card-img-top" src="..." alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>

  <div className="card" style={{ width: "18rem" }}>
    <img className="card-img-top" src="..." alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>

</div> */}
