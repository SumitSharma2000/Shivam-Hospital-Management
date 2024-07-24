import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HospitalList = ({ city }) => {
  const [hospitals, setHospitals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (city) {
      axios.get(`http://localhost:5000/api/v1/hospitals?city=${city}`)
        .then(response => {
          setHospitals(response.data);
        })
        .catch(error => {
          console.error('Error fetching hospitals:', error);
          setHospitals([]);
        });
    }
  }, [city]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/hospitals/delete?id=${id}`);
      setHospitals(hospitals.filter(hospital => hospital._id !== id));
    } catch (error) {
      console.error('Error deleting hospital:', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/update/${id}`);
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
    },
    hospitalList: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    hospitalItem: {
      background: '#fff',
      color: '#000',
      width: '48%',
      padding: '20px',
      margin: '10px 0',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'left',
    },
    image: {
      width: '100px',
      height: '100px',
      borderRadius: '8px',
      objectFit: 'cover',
      marginRight: '20px',
    },
    details: {
      flex: 1,
    },
    actions: {
      marginTop: '10px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginRight: '10px',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <ul style={styles.hospitalList}>
        {Array.isArray(hospitals) && hospitals.length > 0 ? (
          hospitals.map(hospital => (
            <li key={hospital._id} style={styles.hospitalItem}>
              <img src={hospital.image} alt={hospital.name} style={styles.image} />
              <div style={styles.details}>
                <h2>{hospital.name}</h2>
                <p>{hospital.city}</p>
                <p>{hospital.speciality.join(', ')}</p>
                <p>Rating: {hospital.rating}</p>
                <div style={styles.actions}>
                  <button
                    style={styles.button}
                    onMouseOver={e => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                    onMouseOut={e => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                    onClick={() => handleEdit(hospital._id)}
                  >
                    Edit
                  </button>
                  <button
                    style={styles.button}
                    onMouseOver={e => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                    onMouseOut={e => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                    onClick={() => handleDelete(hospital._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p>No hospitals found for the selected city.</p>
        )}
      </ul>
    </div>
  );
};

export default HospitalList;
