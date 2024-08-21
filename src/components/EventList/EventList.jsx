import './EventList.css';
import { Link } from 'react-router-dom';
import { useState } from "react";

const EventList = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = Array.from(new Set(props.events.map(event => event.category)));
  // console.log(categories);
  
  const events = props.events.filter((event) => {
    if (event.category === selectedCategory) {
      return event;
    } else if (selectedCategory === null) {
      return event;
    }
  });
  
  return (
    <div className="row">
      <div className="buttons">
        {/* <h6>Filters</h6> */}
        <button className="btn btn-outline-success me-2 mb-2" onClick={() => setSelectedCategory(null)}>All</button>
        {categories.map((category) => (
          <button className="btn btn-outline-success me-2 mb-2" key={category} onClick={() => setSelectedCategory(category)}>{category}</button>
        ))}
      </div>
      {events.map((event) => (
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
            <Link key={event._id} to={`/events/${event._id}/bookings`} className="btn btn-primary mt-3">
              Book Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
