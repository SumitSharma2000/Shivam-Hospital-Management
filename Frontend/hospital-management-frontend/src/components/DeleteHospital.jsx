import React from 'react';
import axios from 'axios';

const DeleteHospital = ({ id }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/hospitals/delete?id=${id}`);
      alert('Hospital deleted successfully');
    } catch (error) {
      console.error('There was an error deleting the hospital!', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete Hospital</button>
  );
};

export default DeleteHospital;
