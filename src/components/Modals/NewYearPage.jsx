import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const NewYearPage = () => {
  const { width, height } = useWindowSize(); // Dynamically match screen size
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Automatically stop confetti after 5 seconds
    const timer = setTimeout(() => setShowConfetti(false), 5000);

    return () => clearTimeout(timer); // Clean up timer
  }, []);

  return (
    <div style={{ textAlign: "center", position:'absolute', zIndex:'10000' }}>
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={300}
          gravity={0.2}
          colors={["#fffff", "#0000", "#0000ff", "#ffff00", "#ff00ff"]}
        />
      )}
    </div>
  );
};

export default NewYearPage;
