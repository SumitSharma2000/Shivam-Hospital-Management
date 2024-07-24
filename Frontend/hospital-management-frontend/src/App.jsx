import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddHospitalPage from './pages/AddHospitalPage';
import HospitalPage from './pages/HospitalPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add-hospital" element={<AddHospitalPage />} />
      <Route path="/hospitals/:city" element={<HospitalPage />} />
    </Routes>
  );
}

export default App;
