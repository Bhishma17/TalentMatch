import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Home from './Home';
import Jobs from './Jobs';
import Login from './Login';
import Register from './Register';
import PostJob from './PostJob';

const App = () => {
  const [user, setUser] = useState(null); // Holds the logged-in user
  const [users, setUsers] = useState([]); // Holds registered users
  const [message, setMessage] = useState(''); // Holds the login/register messages

  // Load users from local storage when the app starts
  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  // Register a new user
  const handleRegister = (newUser) => {
    const updatedUsers = [...users, newUser]; // Add the new user to the list
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save users to local storage
    setMessage('Registration successful!'); // Set success message
  };

  // Login a user
  const handleLogin = (loginCredentials) => {
    const foundUser = users.find(user => user.email === loginCredentials.email);
    if (foundUser) {
      if (foundUser.password === loginCredentials.password) {
        setUser(foundUser);
        setMessage('Login successful!');
      } else {
        setMessage('Incorrect password.');
      }
    } else {
      setMessage('User not found.');
    }
  };

  // Logout the user
  const handleLogout = () => {
    setUser(null);
    setMessage('You have logged out.');
  };

  // Effect to clear the message after 5 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 5000); // Clears the message after 5 seconds

      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [message]);

  return (
    <Router>
      <div>
        <nav style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Job Portal</span>
            <ul style={{ display: 'flex', listStyle: 'none', margin: '0', padding: '0' }}>
              <li style={{ marginRight: '20px' }}>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
              </li>
              <li style={{ marginRight: '20px' }}>
                <Link to="/jobs" style={{ color: 'white', textDecoration: 'none' }}>Jobs</Link>
              </li>
              {user && user.role !== 'client' && ( // Only show "Post a Job" if the user is not a client
                <li style={{ marginRight: '20px' }}>
                  <Link to="/post-job" style={{ color: 'white', textDecoration: 'none' }}>Post a Job</Link>
                </li>
              )}
              {user ? (
                <>
                  <li style={{ marginRight: '20px', fontWeight: 'bold' }}>Hello, {user.name}</li>
                  <li>
                    <button onClick={handleLogout} style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', border: 'none', cursor: 'pointer' }}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li style={{ marginRight: '20px' }}>
                    <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
                  </li>
                  <li>
                    <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>

        {message && <div style={{ textAlign: 'center', color: 'green', margin: '20px', transition: 'opacity 2s', opacity: message ? 1 : 0 }}>{message}</div>}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/post-job" element={<PostJob />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
