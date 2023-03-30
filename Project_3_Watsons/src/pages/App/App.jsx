import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MedicinePage from '../medicinePage/medicinePage';
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";

const userRole = "pharmacist";

function App() {
  const [user, setUser] = useState(userRole);

  return (
    <main className="container">
    { (user === "pharmacist") ?
      <>
        <NavBar />
        <SideBar />
        <h1>Everyday Drugs</h1>
        <Routes>
          <Route path="/medicine" element={<MedicinePage />} />
          <Route element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </>
      : 
      <h1>Everyday Drugs </h1>
    }
    </main>
  );
}

export default App;

