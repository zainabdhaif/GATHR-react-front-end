import { useState, useEffect } from 'react';
import { Routes, Route ,useNavigate} from 'react-router-dom';
import authService from './services/authService';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import eventService from './services/eventService';
import bookingService from './services/bookingService';

// Components
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import Footer from './components/Footer/Footer';
import EventList from './components/EventList/EventList';
import Booking from './components/Booking/Booking';
import EventDetails from './components/EventDetails/EventDetails';
import EventForm from './components/EventForm/EventForm';
import EventEdit from './components/EventEdit/EventEdit';
import BookingList from './components/BookingList/BookingList';


const App = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(authService.getUser());
  const [events, setEvents] = useState(null);

  // useEffect(() => {
  //   const fetchAllEvents = async () => {
  //     const eventsData = await eventService.index();
  //     setEvents(eventsData);
  //   };
    
  //   if(user && !events) fetchAllEvents();
  // }, []);

  // const handleAddBooking = () => {
  //   console.log('Booking added');
  // }

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  }

  const handleAddEvent = async (formData) => {
    const newEvent = await eventService.create(formData);
    setEvents([...events, newEvent]); 
    navigate('/events');
  }
  
  // const handleRemoveEvent = async (eventId) => {
  //   try {
  //     await eventService.deleteEvent(eventId); 
  //     navigate("/events"); 
  //     location.reload();
  //   } catch (error) {
  //     console.error("Error", error);
 
  //   }
  // };

  const handleRemoveEvent = async (eventId) => {
    try {
      // Add confirmation pop-up before deleting
      if (window.confirm('Are you sure you want to delete this event?')) {
        await eventService.deleteEvent(eventId);
        navigate("/events");
        location.reload();
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  

  
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar user={user} handleSignout={handleSignout}/>
      <main className="flex-grow-1">
        <Routes>
          <Route path="/events" element={<EventList user={user} />} />

          {(user) ? ((user.type === 'admin') ? (
             <>
             <Route path="/" element={<Landing user={user} />} />
             <Route path="/events/:eventId" element={<EventDetails handleRemoveEvent={handleRemoveEvent} />} />
             <Route path="/events/new" element={<EventForm handleAddEvent={handleAddEvent} />}
            />
              <Route path="/events/:eventId/edit" element={<EventEdit />}/>
            </>
          ): (
            <>
            <Route path="/" element={<Landing user={user} />} />
      
              <Route path="/bookings" element={<BookingList />} />

            <Route path="/events/:eventid/bookings" element={<Booking />} />
           </>
          )): (
               <Route path="/" element={<Landing />} />
          )}
          <Route path="/signup" element={<SignupForm setUser={setUser}/>} />
          <Route path="/signin" element={<SigninForm setUser={setUser}/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
