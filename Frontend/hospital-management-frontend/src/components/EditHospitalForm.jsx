import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditHospitalForm = () => {
  const { id } = useParams();
  const [hospital, setHospital] = useState({
    name: '',
    city: '',
    image: '',
    description: '',
    images: [],
    numberOfDoctors: '',
    numberOfDepartments: '',
    rating: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/hospitals/update?id=${id}`)
      .then(response => setHospital(response.data))
      .catch(error => console.error('Error fetching hospital details:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospital({ ...hospital, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/v1/hospitals/update?id=${id}`, hospital)
      .then(response => navigate(`/hospitals/${id}`))
      .catch(error => console.error('Error updating hospital:', error));
  };

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      margin: '10px 0 5px',
      fontWeight: 'bold',
    },
    input: {
      padding: '10px',
      margin: '5px 0 15px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    textarea: {
      padding: '10px',
      margin: '5px 0 15px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      minHeight: '100px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>Name:</label>
        <input
          type="text"
          name="name"
          value={hospital.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <label style={styles.label}>City:</label>
        <input
          type="text"
          name="city"
          value={hospital.city}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <label style={styles.label}>Image URL:</label>
        <input
          type="text"
          name="image"
          value={hospital.image}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <label style={styles.label}>Description:</label>
        <textarea
          name="description"
          value={hospital.description}
          onChange={handleChange}
          style={styles.textarea}
          required
        />
        <label style={styles.label}>Images (comma separated URLs):</label>
        <input
          type="text"
          name="images"
          value={hospital.images.join(', ')}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <label style={styles.label}>Number of Doctors:</label>
        <input
          type="number"
          name="numberOfDoctors"
          value={hospital.numberOfDoctors}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <label style={styles.label}>Number of Departments:</label>
        <input
          type="number"
          name="numberOfDepartments"
          value={hospital.numberOfDepartments}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={e => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={e => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
        >
          Update Hospital
        </button>
      </form>
    </div>
  );
};

export default EditHospitalForm;
