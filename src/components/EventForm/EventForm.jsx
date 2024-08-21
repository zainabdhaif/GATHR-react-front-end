import { useState } from 'react';
import './EventForm.css'

const EventForm = ({ handleAddEvent }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    category: 'sports',
    dateStarted: '',
    dateEnded: '',
    price: '',
    image: '',
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleAddEvent(formData);
  };

  return (
    <main className="container mt-4">
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        <h3>Add New Event</h3>
        <div className="mb-3">
          <label htmlFor="name-input" className="form-label">Name</label>
          <input
            required
            type="text"
            name="name"
            id="name-input"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description-input" className="form-label">Description</label>
          <textarea
            name="description"
            id="description-input"
            className="form-control"
            rows="3"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="location-input" className="form-label">Location</label>
          <input
            name="location"
            id="location-input"
            className="form-control"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category-input" className="form-label">Category</label>
          <select
            required
            name="category"
            id="category-input"
            className="form-select"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Sports">Sports</option>
            <option value="Concert">Concert</option>
            <option value="Food Festival">Food Festival</option>
            <option value="Workshop">Workshop</option>
            <option value="Shopping">Shopping</option>
            <option value="Culture">Culture</option>
            <option value="Art">Art</option>
            <option value="Science">Science</option>
            <option value="Motoring">Motoring</option>
            <option value="Charity">Charity</option>
            <option value="Educational">Educational</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="dateStarted-input" className="form-label">Date Started</label>
          <input
            required
            type="date"
            name="dateStarted"
            id="dateStarted-input"
            className="form-control"
            value={formData.dateStarted}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="dateEnded-input" className="form-label">Date Ended</label>
          <input
            required
            type="date"
            name="dateEnded"
            id="dateEnded-input"
            className="form-control"
            value={formData.dateEnded}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price-input" className="form-label">Price</label>
          <input
            required
            type="number"
            name="price"
            id="price-input"
            className="form-control"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image-input" className="form-label">Image URL</label>
          <input
            type="text"
            name="image"
            id="image-input"
            className="form-control"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </main>
  );
};

export default EventForm;
