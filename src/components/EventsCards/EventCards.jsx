import "./EventCards.css";
import { useState} from 'react';
import authService from '../../services/authService';
import { Link } from 'react-router-dom';

const EventCards = (props) => {
  
  const [user, setUser] = useState(authService.getUser());
  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   const fetchAllEvents = async () => {
  //     const eventsData = await eventService.index();
  //     setEvents(eventsData);
  //   };
    
  //   fetchAllEvents();
  // }, [user, events]);

  return (
    <>
    <div className="cards-container">

    {props.events.slice(0, 3).map((card) => (
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
               <Link to={`/events/${card._id}`}><button>view details</button>
               </Link> 

            ) : (
              <Link to={`/events/${card._id}/bookings`}><button>book</button>
               </Link> 
          
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

