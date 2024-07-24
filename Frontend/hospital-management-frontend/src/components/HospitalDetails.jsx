import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const HospitalDetails = () => {
  const { id } = useParams();
  const [hospital, setHospital] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/hospitals/details?id=${id}`)
      .then(response => setHospital(response.data))
      .catch(error => console.error('Error fetching hospital details:', error));
  }, [id]);

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
    },
    details: {
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    image: {
      maxWidth: '100%',
      borderRadius: '8px',
    },
    imagesContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
    },
    imageItem: {
      flex: '1 1 200px',
    }
  };

  if (!hospital) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <div style={styles.details}>
        <h2>{hospital.name}</h2>
        <img src={hospital.image} alt={hospital.name} style={styles.image} />
        <p>City: {hospital.city}</p>
        <p>Specialities: {hospital.speciality.join(', ')}</p>
        <p>Rating: {hospital.rating}</p>
        <p>Description: {hospital.description}</p>
        <p>Number of Doctors: {hospital.numberOfDoctors}</p>
        <p>Number of Departments: {hospital.numberOfDepartments}</p>
        <div style={styles.imagesContainer}>
          {hospital.images.map((img, index) => (
            <div key={index} style={styles.imageItem}>
              <img src={img} alt={`Hospital Image ${index}`} style={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HospitalDetails;
