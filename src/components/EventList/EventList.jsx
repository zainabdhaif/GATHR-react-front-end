import './EventList.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import eventService from '../../services/eventService';
import authService from '../../services/authService';



const EventList = (props) => {
  const [user, setUser] = useState(authService.getUser());

  // useEffect(() => {
  //   const fetchAllEvents = async () => {
  //     const eventsData = await eventService.index();
  //     setEvents(eventsData);
  //   };
    
  //   fetchAllEvents();
  // }, [user, events]);


  return (
    <div className="row">
      {props.events.map((event) => (
        <div key={event._id} className="col-md-4 col-sm-6 mb-4">
          <div className="card card-block">
          
            <img
              src={event.image}
              alt={event.name}
              className="img-fluid"
            />
            <h5 className="card-title mt-3 mb-3">{event.name}</h5>
            <p className="mb-0">Starting Date{' '}{new Date(event.dateStarted).toLocaleDateString()}</p>

            {(user) ? (
              ((user.type === 'admin') ? (
                <Link to={`/events/${event._id}`} className="btn btn-primary btn-sm">
                Read More
              </Link>
              ) : (<Link key={event._id} to={`/events/${event._id}/bookings`} className="btn btn-primary mt-3">
                Book Now
              </Link>))
              ) : (
                <p></p>
              )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
