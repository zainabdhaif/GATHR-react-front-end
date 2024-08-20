import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import eventService from "../../services/eventService";
import './EventDetails.css'

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
      <header className="mb-4">
        <h1 className="display-4">{event.name}</h1>
      </header>
      <div className="row mb-4">
        <div className="col-md-8">
          <p className="text-muted">{event.category.toUpperCase()}</p>
          <p>{event.description}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Price:</strong> ${event.price}</p>
        </div>
        <div className="col-md-4">
          <p><strong>Starts:</strong> {new Date(event.dateStarted).toLocaleDateString()}</p>
          <p><strong>Ends:</strong> {new Date(event.dateEnded).toLocaleDateString()}</p>
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
          className="btn btn-primary mt-3"

        >
          Delete
        </button>
      </div>
    </main>
  );
};

export default EventDetails;
