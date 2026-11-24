import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

function CarTable({ cars = [], onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Car</th>
          <th>Year</th>
          <th>Price</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <tr key={car.id}>
            <td>{car.brand} {car.model}</td>
            <td>{car.year}</td>
            <td>{car.price} TND</td>
            <td><StatusBadge status={car.status} /></td>
            <td>
              <div className="actions">
                <Link to={"/edit/" + car.id} className="edit-button">Edit</Link>
                <button className="delete-button" onClick={() => onDelete(car.id)}>Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CarTable;