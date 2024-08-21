import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import eventService from "../../services/eventService";
import './EventDetails.css';

const EventDetails = (props) => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getEvent() {
      const eventData = await eventService.show(eventId);
      setEvent(eventData);
    }
    getEvent();
  }, [eventId]);

  if (!event) {
    return <main className="container mt-4"><h3>Loading...</h3></main>;
  }

  return (
    <main className="container mt-4">
      <header
        className="header mb-4"
        style={{ 
          backgroundImage: `url(${event.image})`
        }}
      >
        <div className="cover">
          <h1 className="display-4">{event.name}</h1>
        </div>
      </header>

      <div className="row mb-4">
        <div className="col-md-8">
          <p className="text-muted">{event.category}</p>
          <p>{event.description}</p>
          <p>Location: {event.location}</p>
          <p>Price: {event.price} BD</p>
        </div>
        <div className="col-md-4 ">
          <p>Starts: {new Date(event.dateStarted).toLocaleDateString()}</p>
          <p>Ends: {new Date(event.dateEnded).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate(`/events/${eventId}/edit`)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger mt-3"
          onClick={() => props.handleRemoveEvent(eventId)}>
          Delete
        </button>
      </div>
    </main>
  );
};

export default EventDetails;
