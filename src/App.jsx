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
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import Footer from './components/Footer/Footer';
import EventList from './components/EventList/EventList';
import Booking from './components/Booking/Booking';
import EventDetails from './components/EventDetails/EventDetails';
import EventForm from './components/EventForm/EventForm';
import EventEdit from './components/EventEdit/EventEdit';

const App = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(authService.getUser());
  
  const [events, setEvents] = useState([]); 

  useEffect(() => {
    const fetchAllEvents = async () => {
      const eventsData = await eventService.index();
      setEvents(eventsData);
    };
    
    fetchAllEvents();
  }, [user, events]);

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
  
  const handleRemoveEvent = async (eventId) => {
    try {
      await eventService.deleteEvent(eventId); 
      navigate("/events"); 
    } catch (error) {
      console.error("Error", error);
 
    }
  };
  
  
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar user={user} handleSignout={handleSignout}/>
      <main className="flex-grow-1">
        <Routes>
          <Route path="/events" element={<EventList events={events} />} />
          { user ? (
             // Protected Routes:
             <>
            <Route path="/" element={<Dashboard user={user} />} />
             <Route path="/events/:eventId" element={<EventDetails handleRemoveEvent={handleRemoveEvent} />} />
             <Route
              path="/events/new"
              element={<EventForm handleAddEvent={handleAddEvent} />}
            />
              <Route path="/events/:eventId/edit" element={<EventEdit />}/>
          
           </>
           
          ) : (
             // Public Route:
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
