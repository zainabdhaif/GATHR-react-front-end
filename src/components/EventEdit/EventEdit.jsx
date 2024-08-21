import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import eventService from "../../services/eventService";
 import './Edit.css'; 

const EventEdit = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    category: "",
    dateStarted: "",
    dateEnded: "",
    price: "",
    image: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchEvent() {
      try {
        const eventData = await eventService.show(eventId);
        setEvent(eventData);
        setFormData({
          name: eventData.name,
          description: eventData.description,
          location: eventData.location,
          category: eventData.category,
          dateStarted: new Date(eventData.dateStarted).toISOString().substring(0, 10),
          dateEnded: new Date(eventData.dateEnded).toISOString().substring(0, 10),
          price: eventData.price,
          image: eventData.image
        });
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    }

    fetchEvent();
  }, [eventId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await eventService.update(eventId, formData);
      navigate(`/events/${eventId}`); 
    } catch (error) {
      console.error("Error updating event:", error);
   
    }
  };

  if (!event) {
    return <main className="container mt-4"><h3>Loading...</h3></main>;
  }

  return (
    <main className="container-edit mt-4">
      <h1>Edit Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Event Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select
            className="form-control"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="sports">Sports</option>
            <option value="music">Music</option>
            <option value="food festival">Food Festival</option>
            <option value="workshop">Workshop</option>
            <option value="shopping">Shopping</option>
            <option value="culture">Culture</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="dateStarted" className="form-label">Start Date</label>
          <input
            type="date"
            className="form-control"
            id="dateStarted"
            name="dateStarted"
            value={formData.dateStarted}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateEnded" className="form-label">End Date</label>
          <input
            type="date"
            className="form-control"
            id="dateEnded"
            name="dateEnded"
            value={formData.dateEnded}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Event</button>
      </form>
    </main>
  );
};

export default EventEdit;
