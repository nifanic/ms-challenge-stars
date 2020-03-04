import React, { useEffect, useState } from "react";
import "./App.css";
import { Star } from "./stars";

function App() {
  const initStars = [false, false, false, false, false];
  /**
   * "Working" array showing current state.
   * 
   * React state is used, so the component automatically re-renders
   * on every state change.
   */
  const [stars, setStars] = useState(initStars);
  /**
   * @type {[number, Function]} pos - Numbered position of lately clicked star.
   */
  const [pos, setPos] = useState();

  /**
   * Effect triggers on every `pos` state change
   */
  useEffect(() => {
    // Reset any mutations in `stars` array
    setStars(initStars);
    
    if (pos) {
      // Create a copy of `stars` array, and mutate it
      const newStars = stars.reduce((acc, cur, index) => {
        if (index + 1 <= pos) {
          acc[index] = true;
        }
        return acc;
      }, initStars);

      // Update `stars` state with new array
      // This will re-render <App /> component
      setStars(newStars);
    }
  }, [pos]);

  return (
    <div className="App">
      <ul>
        {Array.isArray(stars) &&
          stars.map((star, i) => (
            <li key={i}>
              <Star enabled={star} position={i + 1} setPos={setPos} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
