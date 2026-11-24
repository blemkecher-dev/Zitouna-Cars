import { useState } from "react";

function CarForm({ car, onSubmit, buttonText }) {
  const [brand, setBrand] = useState(car.brand);
  const [model, setModel] = useState(car.model);
  const [year, setYear] = useState(car.year);
  const [price, setPrice] = useState(car.price);
  const [mileage, setMileage] = useState(car.mileage);
  const [fuel, setFuel] = useState(car.fuel);
  const [transmission, setTransmission] = useState(car.transmission);
  const [image, setImage] = useState(car.image);
  const [status, setStatus] = useState(car.status);
  const [description, setDescription] = useState(car.description || "");

  function handleSubmit(e) {
    e.preventDefault();

    const newCar = {
      brand: brand,
      model: model,
      year: Number(year),
      price: Number(price),
      mileage: Number(mileage),
      fuel: fuel,
      transmission: transmission,
      image: image,
      status: status,
      description: description,
    };

    onSubmit(newCar);
  }

  return (
    <form className="car-form" onSubmit={handleSubmit}>
      <input placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} required />
      <input placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)} required />
      <input type="number" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <input type="number" placeholder="Mileage" value={mileage} onChange={(e) => setMileage(e.target.value)} required />

      <select value={fuel} onChange={(e) => setFuel(e.target.value)}>
        <option>Diesel</option>
        <option>Petrol</option>
        <option>Hybrid</option>
        <option>Electric</option>
      </select>

      <select value={transmission} onChange={(e) => setTransmission(e.target.value)}>
        <option>Manual</option>
        <option>Automatic</option>
      </select>

      <input placeholder="Image link" value={image} onChange={(e) => setImage(e.target.value)} />

      <textarea
        placeholder="Description"
        rows="4"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="available">available</option>
        <option value="reserved">reserved</option>
        <option value="sold">sold</option>
      </select>

      <button type="submit">{buttonText}</button>
    </form>
  );
}

export default CarForm;