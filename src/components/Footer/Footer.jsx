import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5">
      <div className="container">
      
        <div className="row">
     
        </div>
      </div>

      <div className="text-center py-3" style={{ backgroundColor: '#f1f1f1' }}>
        © 2024 GATHR. All rights reserved. 
        <Link to="https://Gathr.com" className="text-dark">Gathr.com</Link>
      </div>
    </footer>
  );
};

export default Footer;
