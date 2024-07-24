import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomePage = () => {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!city.trim()) {
      alert('Please enter a city.');
      return;
    }
    navigate(`/hospitals/${city}`);
  };

  const handleAddHospital = () => {
    navigate('/add-hospital');
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundImage: 'url(https://images.unsplash.com/flagged/photo-1551049215-23fd6d2ac3f1?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
    },
    heading: {
      fontSize: '3rem',
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    input: {
      padding: '10px',
      width: '300px',
      margin: '10px 0',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
    buttonContainer: {
      display: 'flex',
      gap: '10px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Welcome to the Hospital Management System</h1>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          style={styles.input}
          required
        />
        <div style={styles.buttonContainer}>
          <button
            onClick={handleSearch}
            style={styles.button}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
          >
            Search Hospitals
          </button>
          <button
            onClick={handleAddHospital}
            style={styles.button}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
          >
            Add Hospital
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
