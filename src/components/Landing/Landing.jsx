import "./Landing.css";
import EventCards from '../EventsCards/EventCards';
import { useState, useEffect } from 'react';
import authService from '../../services/authService';
import eventService from "../../services/eventService";


const Landing = () => {
  const [user, setUser] = useState(authService.getUser());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchAllEvents = async () => {
      const eventsData = await eventService.index();
      setEvents(eventsData);
    };
    
    fetchAllEvents();
  }, []);


  return (
    <main>

      <div className="video-container">
        <video
          autoPlay
          muted
          loop
       className="video"
          src="/video/video.mp4"
        ></video>
      </div>
      <div>
        <h2>Upcoming Events</h2>
        <div>
        <EventCards cards={events}/>
        </div>
      </div>
    </main>
  );
};

export default Landing;
