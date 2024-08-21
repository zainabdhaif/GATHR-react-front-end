import "./Landing.css";
import EventCards from '../EventsCards/EventCards';
import { useState, useEffect } from 'react';
import authService from '../../services/authService';
import eventService from "../../services/eventService";

const Landing = () => {
  const [user, setUser] = useState(authService.getUser());
  const [events, setEvents] = useState([]);

  // const [cards, setCards] = useState([]);
  // useEffect(() => {
  //   const fetchLatestEvents = async () => {
  //     try {
  //       const eventsData = await eventService.index();
  //       // Sort the events in descending order by creation date
  //       const sortedEvents = eventsData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  //       // Take the first 3 events
  //       const latestEvents = sortedEvents.slice(0, 3);
  //       setCards(latestEvents);
  //     } catch (error) {
  //       console.error('Error fetching events:', error);
  //     }
  //   };

  //   fetchLatestEvents();
  // }, [user]);


  useEffect(() => {
    const fetchAllEvents = async () => {
      const eventsData = await eventService.index();
      setEvents(eventsData);
    };
    
    fetchAllEvents();
  }, [user, events]);


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
        <EventCards events={events}/>
        </div>
      </div>
    </main>
  );
};

export default Landing;
