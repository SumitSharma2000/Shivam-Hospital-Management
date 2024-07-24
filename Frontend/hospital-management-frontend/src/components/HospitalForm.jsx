import React, { useState } from 'react';

const CreateHospitalForm = () => {
  const [hospital, setHospital] = useState({
    name: '',
    city: '',
    image: '',
    speciality: [],
    rating: '',
    description: '',
    images: [''],
    numberOfDoctors: '',
    numberOfDepartments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'speciality') {
      const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
      setHospital({ ...hospital, speciality: selectedOptions });
    } else if (name === 'images') {
      setHospital({ ...hospital, images: [value] }); // For simplicity, handling only a single image input
    } else {
      setHospital({ ...hospital, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/v1/hospitals/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(hospital)
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Hospital created:', data);
        alert('Hospital added successfully!');
      } else {
        console.error('Failed to create hospital:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const styles = {
    container: {
      maxWidth: '1400px', 
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f0f8ff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    form: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    },
    fullWidth: {
      gridColumn: '1 / -1', // Span across all columns
    },
    label: {
      margin: '10px 0 5px',
      fontWeight: 'bold',
      color: '#333',
    },
    input: {
      padding: '10px',
      margin: '5px 0 15px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
      width: '100%',
    },
    select: {
      padding: '10px',
      margin: '5px 0 15px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
      width: '100%',
    },
    textarea: {
      padding: '10px',
      margin: '5px 0 15px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
      resize: 'vertical',
      width: '100%',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      gridColumn: '1 / -1', 
      justifySelf: 'center',
      marginTop: '20px',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={hospital.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div>
          <label style={styles.label}>City:</label>
          <input
            type="text"
            name="city"
            value={hospital.city}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div>
          <label style={styles.label}>Image URL:</label>
          <input
            type="text"
            name="image"
            value={hospital.image}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div>
          <label style={styles.label}>Specialities:</label>
          <select
            name="speciality"
            value={hospital.speciality}
            onChange={handleChange}
            multiple
            style={styles.select}
            required
          >
            <option value="Heart">Heart</option>
            <option value="Ear">Ear</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Gynecology">Gynecology</option>
            <option value="Neurology">Neurology</option>
            <option value="Ophthalmology">Ophthalmology</option>
            <option value="Psychiatry">Psychiatry</option>
            <option value="Radiology">Radiology</option>
          </select>
        </div>
        <div>
          <label style={styles.label}>Rating:</label>
          <input
            type="number"
            name="rating"
            value={hospital.rating}
            onChange={handleChange}
            style={styles.input}
            required
            min="1"
            max="5"
          />
        </div>
        <div style={styles.fullWidth}>
          <label style={styles.label}>Description:</label>
          <textarea
            name="description"
            value={hospital.description}
            onChange={handleChange}
            style={styles.textarea}
            rows="4"
          />
        </div>
        <div>
          <label style={styles.label}>Additional Images URL:</label>
          <input
            type="text"
            name="images"
            value={hospital.images[0]}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div>
          <label style={styles.label}>Number of Doctors:</label>
          <input
            type="number"
            name="numberOfDoctors"
            value={hospital.numberOfDoctors}
            onChange={handleChange}
            style={styles.input}
            min="0"
          />
        </div>
        <div>
          <label style={styles.label}>Number of Departments:</label>
          <input
            type="number"
            name="numberOfDepartments"
            value={hospital.numberOfDepartments}
            onChange={handleChange}
            style={styles.input}
            min="0"
          />
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
        >
          Create Hospital
        </button>
      </form>
    </div>
  );
};

export default CreateHospitalForm;
