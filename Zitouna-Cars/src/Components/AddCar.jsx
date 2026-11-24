import { useNavigate } from "react-router-dom";
import CarForm from "./CarForm";

function AddCar({ addCar }) {
  const navigate = useNavigate();

  const emptyCar = {
    brand: "",
    model: "",
    year: 2020,
    price: 0,
    mileage: 0,
    fuel: "Diesel",
    transmission: "Manual",
    image: "",
    status: "available",
    description: "",
  };

  function handleSubmit(newCar) {
    addCar(newCar);
    navigate("/dashboard");
  }

  return (
    <div>
      <h1>Add a car</h1>
      <CarForm car={emptyCar} onSubmit={handleSubmit} buttonText="Add car" />
    </div>
  );
}

export default AddCar;