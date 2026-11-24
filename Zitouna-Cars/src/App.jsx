import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import StarBackground from "./components/StarBackground";
import CarCursor from "./components/CarCursor";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cars from "./components/Cars";
import CarDetails from "./components/CarDetails";
import AddCar from "./components/AddCar";
import EditCar from "./components/EditCar";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";


const API_URL = "https://6b033f089e7cafb37dbf2bf8.mockapi.io/cars";

function App() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    getCars();
  }, []);

  
  async function getCars() {
    const response = await axios.get(API_URL);

   
    if (Array.isArray(response.data)) {
      setCars(response.data);
    }
    setLoading(false);
  }

  
  async function addCar(newCar) {
    await axios.post(API_URL, newCar);
    getCars();
  }


  async function updateCar(id, newCar) {
    await axios.put(API_URL + "/" + id, newCar);
    getCars();
  }


  async function deleteCar(id) {
    await axios.delete(API_URL + "/" + id);
    getCars();
  }

  return (
    <div className="app">
      <StarBackground />
      <CarCursor />
      <Banner />
      <Navbar />

      {loading && <p>Loading cars...</p>}

      <main className="content">
        <Routes>
          <Route path="/" element={<Home cars={cars} />} />
          <Route path="/cars" element={<Cars cars={cars} />} />
          <Route path="/cars/new" element={<AddCar addCar={addCar} />} />
          <Route path="/cars/:id" element={<CarDetails cars={cars} />} />
          <Route path="/edit/:id" element={<EditCar cars={cars} updateCar={updateCar} />} />
          <Route path="/dashboard" element={<Dashboard cars={cars} deleteCar={deleteCar} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;