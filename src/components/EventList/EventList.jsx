// src/components/EventList/EventList.jsx

import { Link } from 'react-router-dom';

const EventList = (props) => {
  return (
    <main className="container mt-4">
      {props.events.map((event) => (
        <Link
          key={event._id}
          to={`/events/${event._id}`}
          className="text-decoration-none"
        >
          <article className="card mb-4 shadow-sm">
            <header className="card-header bg-primary text-white">
              <h2 className="h5">{event.name}</h2>
              <p className="mb-0">
                {event.owner.username} posted on{' '}
                {new Date(event.dateStarted).toLocaleDateString()}
              </p>
            </header>
            <div className="card-body">
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
            </div>
          </article>
        </Link>
      ))}
    </main>
  );
};

export default EventList;
