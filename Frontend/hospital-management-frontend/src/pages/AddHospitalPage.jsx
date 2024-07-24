import React from 'react';
import HospitalForm from '../components/HospitalForm';
import Navbar from '../components/Navbar';

const AddHospitalPage = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
      padding: '20px',
    },
    heading: {
      fontSize: '3rem',
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    formContainer: {
      width: '100%',
      maxWidth: '600px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
  };

  return (
    <>
    <Navbar/>
    <div style={styles.container}>
      <h1 style={styles.heading}>Add a New Hospital</h1>
      <div style={styles.formContainer}>
        <HospitalForm />
      </div>
    </div>
    </>
  );
};

export default AddHospitalPage;
