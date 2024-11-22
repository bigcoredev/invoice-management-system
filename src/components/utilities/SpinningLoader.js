import React from 'react';
import ICON_LOADING from "../../assets/icons/nonicons_loading.svg";


// Create the SpinningLoader component
const SpinningLoader = () => {
  return (
    <div className="spinner-container">
      <img
        src={ICON_LOADING}
        alt={"loading icon"}
        style={{
          width: 20,
          height: 20,
          animation: "spin 1s linear infinite", // Apply spin animation
        }}
      />
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .spinner-container {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};

export default SpinningLoader;
