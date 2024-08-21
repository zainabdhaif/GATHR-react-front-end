import { Navigate, useParams } from "react-router-dom";
import bookingService from "../../services/bookingService";
import eventService from "../../services/eventService";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import auth from "../../services/authService";
import {useNavigate} from 'react-router-dom';
import "./Booking.css";

const Booking = () => {
  const navigate = useNavigate();
  const [events, setEvent] = useState(null);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const { eventid } = useParams();

  useEffect(() => {
    const getEvent = async () => {
      const eventData = await eventService.show(eventid);
      setEvent(eventData);
      setStartDate(new Date(eventData.dateStarted));
      setEndDate(new Date(eventData.dateEnded));
    };
    getEvent();
  }, [eventid]);

  const [quantity, setQuantity] = useState(1);
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(Math.max(quantity - 1, 1));

  if (!events) return <h1>Loading...</h1>;

  const user = auth.getUser();

  const handleBooking = async () => {
    const bookingData = {
      userid: user.id,
      eventid: eventid,
      date: new Date(startDate),
      quantity: quantity,
    };
    console.log(bookingData);
    bookingService.create(bookingData);
    navigate('/bookings');
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={events.image}
            alt={events.name}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h1 className="mb-3">{events.name}</h1>
          <p className="lead">{events.description}</p>
          <div className="mb-3">
            <label className="form-label">Select The Date:</label> <br />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date(events.dateStarted)}
              maxDate={endDate}
              className="form-control"
            />
          </div>
          <p>
            <strong>Location: {events.location}</strong>
          </p>
          <p>
            <strong>Price: {events.price}BD</strong>
          </p>
          <p>
            <strong>Category: {events.category}</strong>
          </p>
          <div className="d-flex align-items-center mb-3">
            <button onClick={decrement} className="btn btn-outline-secondary me-2"> - </button>
              <span className="mx-2">{quantity}</span>
            <button onClick={increment} className="btn btn-outline-secondary ms-2"> + </button>
          </div>
          <h3 className="mb-4">Total Price: {events.price * quantity}BD</h3>
          <button onClick={handleBooking} className="btn btn-primary">Book</button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
