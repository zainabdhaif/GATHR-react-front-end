import './EventList.css'
import { Link } from 'react-router-dom';

const EventList = (props) => {
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

            <Link to={`/events/${event._id}`} className="btn btn-primary btn-sm">
              Read More
            </Link>
              <Link key ={event._id} to={`/events/${event._id}/bookings`} className="btn btn-primary btn-sm">
              Book now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
