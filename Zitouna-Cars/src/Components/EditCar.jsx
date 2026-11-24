import { useParams, useNavigate } from "react-router-dom";
import CarForm from "./CarForm";

function EditCar({ cars, updateCar }) {
  const { id } = useParams();
  const navigate = useNavigate();

  
  let car = null;
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].id === id) {
      car = cars[i];
    }
  }


  if (cars.length === 0) {
    return <p>Loading...</p>;
  }

  if (car === null) {
    return <p>Car not found.</p>;
  }

  function handleSubmit(newCar) {
    updateCar(car.id, newCar);
    navigate("/dashboard");
  }

  return (
    <div>
      <h1>Edit {car.brand} {car.model}</h1>
      <CarForm car={car} onSubmit={handleSubmit} buttonText="Save changes" />
    </div>
  );
}

export default EditCar;