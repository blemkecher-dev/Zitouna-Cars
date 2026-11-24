import { useEffect } from "react";
import { Link } from "react-router-dom";
import CarList from "./CarList";

function Home({ cars }) {
  
  useEffect(() => {
    document.title = "Home | Zitouna Cars";
  }, []);

 
  const featuredCars = cars.slice(0, 4);

  return (
    <div>
      <section className="intro">
        <h1>Your next car is waiting for you</h1>
        <p>
          At Zitouna Cars, we help you find the right car at the right price.
          Every car is checked by our team, and you are always welcome to try
          it before you decide.
        </p>
        <Link to="/cars" className="intro-button">See all cars</Link>
      </section>

      <h2>Featured cars</h2>
      <CarList cars={featuredCars} />
    </div>
  );
}

export default Home;