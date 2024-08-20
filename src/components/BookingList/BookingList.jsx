import { useEffect, useState } from "react";
import bookingService from "../../services/bookingService";
import auth from "../../services/authService";
import "./BookingList.css";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getBookings = async () => {
      const bookingData = await bookingService.index();
      setBookings(bookingData);
    };
    getBookings();
  }, []);

  const handleCancel = (bookid) => {
    bookingService.cancel(bookid);
    location.reload();
    // console.log("Cancel button clicked", bookid);
  };

  if (!bookings) return <h1>Loading...</h1>;
  const user = auth.getUser();

  return (
    <>
      <div>
        <h1>Your Bookings</h1>
        <div>
          {bookings.map((book) => (
            <div key={book._id}>
              <h3>{book.eventid.name}</h3>
              <p>
                <strong>Description:</strong> {book.eventid.description}
              </p>
              <p>
                <strong>Location:</strong> {book.eventid.location}
              </p>
              <p>
                <strong>Category:</strong> {book.eventid.category}
              </p>
              <p>
                <strong>Quantity:</strong> {book.quantity}
              </p>
              <p>
                <strong>Date: </strong>
                {new Date(book.date).toLocaleDateString()}
              </p>
              {book.userid === user.id && (
                <button onClick={() => handleCancel(book._id)}>Cancel</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookingList;
