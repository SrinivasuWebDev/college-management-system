import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import the logo image

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow px-3 mb-5 bg-body-tertiary rounded py-0">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="College Management Logo" className="fade-in" style={{ height: '40px' }} /> {/* Add the logo */}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/students">Students</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faculty">Faculty</Link>
            </li>
          </ul>
          <span className="navbar-text ms-auto">
            <strong>College Name</strong> {/* Add the college name */}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
