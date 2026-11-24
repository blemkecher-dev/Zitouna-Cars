import { useEffect, useRef } from "react";

function CarCursor() {

  const carRef = useRef(null);
  const carPictureRef = useRef(null);

  useEffect(() => {
  
    let mouseX = -100;
    let mouseY = -100;

  
    let carX = -100;
    let carY = -100;

    let direction = 1; 
    let size = 1;


    function updateCarLook() {
      carPictureRef.current.style.transform =
        "translate(-50%, -50%) scaleX(" + (-direction) + ") scale(" + size + ")";
    }

    function handleMove(event) {
      if (event.clientX > mouseX) {
        direction = 1;
      }
      if (event.clientX < mouseX) {
        direction = -1;
      }
      mouseX = event.clientX;
      mouseY = event.clientY;

    
      const thing = event.target.closest("a, button, select, input");
      if (thing) {
        size = 1.4;
      } else {
        size = 1;
      }
      updateCarLook();
    }

    function handleDown() {
      size = 0.8;
      updateCarLook();
    }

    function handleUp() {
      size = 1;
      updateCarLook();
    }

    
    function animate() {
      
      carX = carX + (mouseX - carX) * 0.35;
      carY = carY + (mouseY - carY) * 0.35;

      carRef.current.style.transform = "translate(" + carX + "px, " + carY + "px)";

      frameId = requestAnimationFrame(animate);
    }

    let frameId = requestAnimationFrame(animate);
    updateCarLook();

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

   
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, []);

  return (
    <div className="car-mover" ref={carRef}>
      <span className="car-picture" ref={carPictureRef}>🚗</span>
    </div>
  );
}

export default CarCursor;