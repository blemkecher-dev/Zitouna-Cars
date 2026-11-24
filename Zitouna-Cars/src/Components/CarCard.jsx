import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

function CarCard({ car }) {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.model} />
      <h3>{car.brand} {car.model}</h3>
      <p>Year: {car.year}</p>
      <p>Mileage: {car.mileage} km</p>
      <p>Fuel: {car.fuel}</p>
      <p className="price">{car.price} TND</p>
      <StatusBadge status={car.status} />
      <br />
      <Link to={"/cars/" + car.id}>View details</Link>
    </div>
  );
}

export default CarCard;