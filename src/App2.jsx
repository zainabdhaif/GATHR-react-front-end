import './App.css';
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import authService from './services/authService';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';

const App = () => {

    const [user, setUser] = useState(authService.getUser());

    const handleSignout = () => {
    authService.signout();
    setUser(null);
  }
  
    return (
        <div className="d-flex flex-column min-vh-100">
          <main className="flex-grow-1">
            <NavBar user={user} handleSignout={handleSignout}/>
            <Landing/>
            </main>  
            <Footer/>
        </div>
    )
};

export default App;