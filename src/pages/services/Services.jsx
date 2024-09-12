import { Link } from 'react-router-dom';
import './services.scss';

function Services() {
  return (
    <div className="services-container">
      <h1 className="services-main-title">Our Services</h1>
      <h2>Choose a service</h2>
      <div className="services-items">
        <Link
          to="/services/managerial-administrative"
          className="services-item"
        >
          <span className="service-title">Managerial</span>
        </Link>
        <Link to="/services/recruitment" className="services-item">
          <span className="service-title">Recruitment</span>
        </Link>
        <Link to="/services/marketing" className="services-item">
          <span className="service-title">Marketing</span>
        </Link>
      </div>
    </div>
  );
}

export default Services;
