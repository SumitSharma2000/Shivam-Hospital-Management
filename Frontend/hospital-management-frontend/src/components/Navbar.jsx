import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      textDecoration: 'none',
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
    },
    link: {
      fontSize: '18px',
      color: '#333',
      textDecoration: 'none',
      padding: '10px 15px',
      borderRadius: '4px',
      transition: 'background-color 0.3s',
    },
    linkHover: {
      backgroundColor: '#f0f0f0',
    },
  };

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>HospitalApp</Link>
      <div style={styles.navLinks}>
        <Link
          to="/"
          style={styles.link}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.linkHover.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={styles.link}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.linkHover.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          About
        </Link>
        <Link
          to="/add-hospital"
          style={styles.link}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.linkHover.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Add Hospital
        </Link>
        <Link
          to="/"
          style={styles.link}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.linkHover.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Search Hospital
        </Link>
        <Link
          to="/contact"
          style={styles.link}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.linkHover.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
