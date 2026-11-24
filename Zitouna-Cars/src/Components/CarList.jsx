import CarCard from "./CarCard";

function CarList({ cars }) {
  if (cars.length === 0) {
    return <p>No cars found.</p>;
  }

  return (
    <div className="car-grid">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarList;