import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import './Home.css'; // Importing the CSS file

const Home = () => {
  return (
    <div className="home-container">
      {/* Top Section */}
      <div className="top-section">
        <div className="home-content">
          <h1>Welcome to the Job Portal</h1>
          <p>Your career starts here. Find your dream job today!</p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for jobs..."
              className="search-bar"
            />
            <button className="search-button">Search</button>
          </div>
        </div>
        <div className="home-image-container">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSbqdzu34_4IJOUOWS2fGiydS-DZpZVucirbEliNT_OVaMlQ0d0" // Replace with the actual image link
            alt="Job Portal"
            className="home-image"
          />
        </div>
      </div>

      {/* Middle Section (Browse Categories) */}
      <div className="middle-section">
        <h2>Browse Categories</h2>
        <div className="category-container">
          <div className="category-item">
            <i className="fas fa-code"></i>
            <p>Web Design</p>
          </div>
          <div className="category-item">
            <i className="fas fa-paint-brush"></i>
            <p>Graphic Design</p>
          </div>
          <div className="category-item">
            <i className="fas fa-laptop-code"></i>
            <p>Web Development</p>
          </div>
          <div className="category-item">
            <i className="fas fa-users"></i>
            <p>Human Resources</p>
          </div>
          <div className="category-item">
            <i className="fas fa-headset"></i>
            <p>Support</p>
          </div>
          <div className="category-item">
            <i className="fas fa-mobile-alt"></i>
            <p>Android Development</p>
          </div>
        </div>
      </div>

      {/* Bottom Section (How It Works) */}
      <div className="bottom-section">
        <h2>How It Works?</h2>
        <p>Create an Account, Search Jobs, Apply</p>
      </div>


      <footer className="footer">
                <div className="footer-content">
                    <p>Connect with us:</p>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <MDBIcon fab icon="instagram" size="2x" className="me-3" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <MDBIcon fab icon="facebook" size="2x" className="me-3" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <MDBIcon fab icon="twitter" size="2x" className="me-3" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <MDBIcon fab icon="linkedin" size="2x" className="me-3" />
                    </a>
                </div>
            </footer>
    </div>

    
  );
};

export default Home;
