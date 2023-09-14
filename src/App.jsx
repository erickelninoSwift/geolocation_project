import { useState } from "react";
import "./App.css";
import { useGeolocation } from "./useGeolocation";
import { useEffect } from "react";

function App() {
  const [countClicks, setCountClicks] = useState(0);
  const { isLoading, position, error, getPosition } = useGeolocation();
  const { lat, lng } = position;

  // setCountClicks((count) => count + 1);

  const positionClick = () => {
    setCountClicks((x) => x + 1);
    getPosition();
  };

  return (
    <div>
      <button onClick={positionClick} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
}

export default App;
