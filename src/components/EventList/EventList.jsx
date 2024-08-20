// src/components/EventList/EventList.jsx

import { Link } from 'react-router-dom';

const EventList = (props) => {
  return (
    <main className="container mt-4">
      {props.events.map((event) => (
        <article key={event._id} className="card mb-4 shadow-sm">
          <header className="card-header bg-primary text-white">
            <h2 className="h5">{event.name}</h2>
            <p className="mb-0">
              Starting Date{' '}
              {new Date(event.dateStarted).toLocaleDateString()}
            </p>
            <p className="mb-0">
              Ending Date{' '}
              {new Date(event.dateEnded).toLocaleDateString()}
            </p>
          </header>
          <div className="card-body">
            {event.image && (
              <img
                src={event.image}
                alt={event.name}
                className="img-fluid mb-3"
              />
            )}
            <p>{event.description}</p>
            <p>
              <strong>Location:</strong> {event.location}
            </p>
            <p>
              <strong>Category:</strong> {event.category}
            </p>
            <p>
              <strong>Price:</strong> ${event.price}
            </p>
            <Link key={event._id} to={`/events/${event._id}/bookings`} className="btn btn-primary mt-3">
              Book Now
            </Link>
          </div>
        </article>
      ))}
    </main>
  );
};

export default EventList;
