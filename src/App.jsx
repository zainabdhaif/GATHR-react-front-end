import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import authService from './services/authService';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import eventService from './services/eventService';

// Components
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import Footer from './components/Footer/Footer';
import EventList from './components/EventList/EventList';

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  
  const [events, setEvents] = useState([]); 

  useEffect(() => {
    const fetchAllEvents = async () => {
      const eventsData = await eventService.index();
      setEvents(eventsData);
    };
    
    fetchAllEvents();
  }, [user]);



  const handleSignout = () => {
    authService.signout();
    setUser(null);
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar user={user} handleSignout={handleSignout}/>
      <main className="flex-grow-1">
        <Routes>
          <Route path="/events" element={<EventList events={events} />} />
          { user ? (
             // Protected Routes:
             <>
            <Route path="/" element={<Landing user={user} />} />
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
