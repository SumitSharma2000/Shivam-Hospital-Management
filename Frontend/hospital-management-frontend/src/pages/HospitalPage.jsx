import React from "react";
import { useParams } from "react-router-dom";
import HospitalList from "../components/HospitalList";
import Navbar from "../components/Navbar";

const HospitalPage = () => {
  const { city } = useParams();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundImage:
        "url(https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
      textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
      padding: "20px",
    },
    heading: {
      fontSize: "3rem",
      marginBottom: "20px",
      fontWeight: "bold",
    },
    listContainer: {
      width: "100%",
      maxWidth: "1200px",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Hospitals in {city}</h1>
        <div style={styles.listContainer}>
          <HospitalList city={city} />
        </div>
      </div>
    </>
  );
};

export default HospitalPage;
