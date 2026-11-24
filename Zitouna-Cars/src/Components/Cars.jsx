import { useState, useEffect } from "react";
import FilterBar from "./FilterBar";
import CarList from "./CarList";

function Cars({ cars }) {
  const [brand, setBrand] = useState("All");
  const [fuel, setFuel] = useState("All");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    document.title = "Cars | Zitouna Cars";
  }, []);

  const brands = [];

  for (let i = 0; i < cars.length; i++) {
    const brandName = cars[i].brand;

    if (brands.indexOf(brandName) === -1) {
      brands.push(brandName);
    }
  }

  const shownCars = [];

  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];

    if (brand !== "All" && car.brand !== brand) {
      continue;
    }

    if (fuel !== "All" && car.fuel !== fuel) {
      continue;
    }

    if (maxPrice !== "" && car.price > Number(maxPrice)) {
      continue;
    }

    shownCars.push(car);
  }

  return (
    <div>
      <h1>Our Cars</h1>
      <FilterBar
        brands={brands}
        brand={brand}
        setBrand={setBrand}
        fuel={fuel}
        setFuel={setFuel}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
      <CarList cars={shownCars} />
    </div>
  );
}

export default Cars;