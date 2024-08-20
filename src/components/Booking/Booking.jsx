import { useParams } from "react-router-dom";
import bookingService from "../../services/bookingService";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import auth from "../../services/authService";

const Booking = () => {
  const [booking, setBooking] = useState(null);
  const [events, setEvent] = useState(null);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const { eventid } = useParams();

  useEffect(() => {
    const getEvent = async () => {
      const eventData = await bookingService.show(eventid);
      setEvent(eventData);
      setStartDate(new Date(eventData.dateStarted));
      setEndDate(new Date(eventData.dateEnded));
    };
    getEvent();
  }, [eventid]);

  //   const handleChange = (evt) => {
  //     setStartDate(evt);
  //     // console.log(evt);
  //   };

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
  };

  return (
    <div>
      <img src={events.image} alt={events.name} />
      <h1>{events.name}</h1>
      <p>Description: {events.description}</p>
      <div className="date">
        <label>Select The Date:</label>
        <DatePicker
          selected={startDate}
          onChange={(evt) => setStartDate(evt)}
          minDate={new Date(events.dateStarted)}
          maxDate={endDate}
          //   dateFormat="MMMM d, YYYY"
        />
      </div>
      <p>Location: {events.location}</p>
      <p>Price: {events.price} BD</p>
      <p>Category: {events.category}</p>
      <div>
        <button onClick={decrement}>-</button>
        <span>{quantity}</span>
        <button onClick={increment}>+</button>
      </div>
      <h3 htmlFor="">Price {events.price * quantity} BD</h3>
      <br />
      <button onClick={handleBooking}>Book</button>
    </div>
  );
};

export default Booking;
