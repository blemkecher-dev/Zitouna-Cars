import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import SpecItem from "./SpecItem";
import StatusBadge from "./StatusBadge";

function CarDetails({ cars }) {
  const { id } = useParams();

  let car = null;
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].id === id) {
      car = cars[i];
    }
  }

  useEffect(() => {
    if (car) {
      document.title = car.brand + " " + car.model + " | Zitouna Cars";
    }
  }, [car]);

  if (car === null) {
    return (
      <div>
        <p>Car not found.</p>
        <Link to="/cars">Back to cars</Link>
      </div>
    );
  }

  const specs = [
    { label: "Year", value: car.year },
    { label: "Mileage", value: car.mileage + " km" },
    { label: "Fuel", value: car.fuel },
    { label: "Transmission", value: car.transmission },
  ];

  return (
    <div>
      <img src={car.image} alt={car.model} />
      <h1>{car.brand} {car.model}</h1>
      <StatusBadge status={car.status} />
      <p className="price">{car.price} TND</p>
      <h2>Description</h2>
      <p className="description">{car.description}</p>

      <ul>
        {specs.map((spec) => (
          <SpecItem key={spec.label} label={spec.label} value={spec.value} />
        ))}
      </ul>

      <Link to="/cars">Back to cars</Link>
    </div>
  );
}

export default CarDetails;