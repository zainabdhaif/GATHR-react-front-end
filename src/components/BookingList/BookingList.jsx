import { useEffect, useState } from "react";
import bookingService from "../../services/bookingService";
import auth from "../../services/authService";
import "./BookingList.css";
import Swal from 'sweetalert2';

const BookingList = () => {
  const [openCard, setOpenCard] = useState(null);
  const [bookings, setBookings] = useState(null);
  const user = auth.getUser();
  
  useEffect(() => {
    const getBookings = async () => {
      const bookingData = await bookingService.index();
      setBookings(bookingData);
    };

    if (user && !bookings) getBookings();
  }, [user, bookings]);

  const handleCancel = (bookid) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, cancel it!'
    }).then((result) => {
      if (result.isConfirmed) {
        bookingService.cancel(bookid);
        location.reload();
        console.log("Cancel button clicked", bookid);
      }
    })
  };
  const visibility = (bookId) => {
    setOpenCard((evt) => (evt === bookId ? null : bookId));
  };
  console.log(openCard);


  if (!bookings) return <h1>Loading...</h1>;

  return (
    <>
    <main className="container mt-4">
      <div className="title mb-4">
        <h1 className="text-center">My Bookings</h1>
      </div>
      <div className="row">
        {bookings.map((book) => (
          <div key={book._id} className="col-md-4 mb-4">
            <div className="card p-3 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="card-title d-flex justify-content-between mb-3">
                  {book.eventid.name}
                  <span>{book.eventid.price * book.quantity}BD</span>
                </h3>
                <p className="mb-1">
                  <strong>
                    Date: {new Date(book.date).toLocaleDateString()}
                  </strong>
                </p>
                <a className="show" onClick={() => visibility(book._id)}>
                  {openCard === book._id ? "Show Less" : "Show More"}
                </a>
                {openCard === book._id && (
                  <>
                    <p className="mb-1">
                      <strong>Description: {book.eventid.description}</strong>
                    </p>
                    <p className="mb-1">
                      <strong>Location: {book.eventid.location}</strong>
                    </p>
                    <p className="mb-1">
                      <strong>Category: {book.eventid.category}</strong>
                    </p>
                    <p className="mb-1">
                      <strong>Quantity: {book.quantity}</strong>
                    </p>
                  </>
                )}
                <div className="mt-2 text-start">
                  {book.userid === user.id && (
                    <button
                      onClick={() => handleCancel(book._id)}
                      className="btn btn-danger mt-2"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  </>
  );
};

export default BookingList;
