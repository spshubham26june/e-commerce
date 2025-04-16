import React from "react";

const Home = () => {
  return (
    <>
      <style>
        {`
          @keyframes fadeCycle {
            0% {
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            60% {
              opacity: 1;
            }
            70% {
              opacity: 0;
            }
            100% {
              opacity: 0;
            }
          }

          .fade-animation {
            animation: fadeCycle 2.7s ease-in-out infinite;
            animation-delay: 0.2s;
          }
        `}
      </style>

      <div className="hero border-1 pb-3">
        <div className="card text-white border-0 mx-3" style={{ backgroundColor: 'grey' }}>
          <div className="d-flex justify-content-center">
            <img
              className="img-fluid my-3 fade-animation"
              src="./assets/main.png"
              alt="Card"
              style={{ height: '300px', width: 'auto' }}
            />
          </div>
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter"></h5>
              <p className="card-text fs-5 d-none d-sm-block "></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
