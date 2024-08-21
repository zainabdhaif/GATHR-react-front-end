import { Link } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = ({ user, handleSignout }) => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">GATHR</Link>
        
      
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
           {(user) ? (
            ((user.type === 'admin') ? (
              <>

              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events/new">Add Event</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={handleSignout} to="">Sign Out</Link>
              </li>
            </>
            ) : (
              <>
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bookings">My Bookings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={handleSignout} to="">Sign Out</Link>
              </li>
            </>
            ))
           ) : (
            <>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">Signin</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
          </>
           )}
   
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
