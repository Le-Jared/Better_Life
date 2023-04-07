import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MedicinePage from '../MedicinePage/MedicinePage';
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import MedicineUpdateForm from "../MedicinePage/MedicineUpdateForm";
import PharmaPage from "../PharmaPage/PharmaPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import AuthPage from "../Auth/Authpage";
import StockPage from "../StockPage/StockPage";
import { getUser } from "../../../utils/users-service";
const BASE_URL = '/api/medicine';
import UserSideBar from '../../components/SideBar/UserSideBar';
import MainMap from '../MapPages/MainMap';
import MainSplit from '../UserMain/MainSplit';
import DirectionMap from '../MapPages/DirectionsMap';
import MedicineSearch from '../MedicineSearch/MedicineSearch';
import ContactForm from '../Auth/ContactForm';




function App() {
  const [user, setUser] = useState(getUser());
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main className="container">
    { user ?
      (user.role === "Pharmacist") ?
      <>
        <NavBar user={user} setUser = {setUser}/>
        <SideBar />
        <h1>Better Life</h1>
        <Routes>
          <Route path="/home" element = {<PharmaPage />} />
          <Route path="/medicine" element={<MedicinePage />} />
          <Route path="/stock" element={<StockPage />} />
          <Route path="/medicine/:id/edit" element={<MedicineUpdateForm BASE_URL={BASE_URL}/>} />
        </Routes>
      </>
      : (user.role === "Consumer") ?
      <>
        <>
        <NavBar user={user} setUser = {setUser}/>
        <UserSideBar />
        <h1>Better Life</h1>
        <Routes>
          <Route path="/welcome" element={<MainSplit />} />
          <Route path="/map" element={<MainMap />} />
          <Route path="/map/:id" element={<DirectionMap />} />
          <Route path="/medicinesearch" element={<MedicineSearch />} />
          <Route path="/contact-us" element={<ContactForm />} />
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />

        </Routes>
        </>
      </>
      : null 

      :
      <>
        <h1>Better Life</h1>
        <Routes>
          <Route path="/" element = {<AuthPage setUser={setUser}/>} />
        </Routes>
      </>
    }
    </main>
  );
}

export default App;
