import React, { useState } from "react";
import img1 from "../assets/images/tab-product-icon.png"
import img2 from "../assets/images/customize-uniform-icon.png"
import img3 from "../assets/images/tab-product-icon.png"
export const Steps = ({ gettingdata }) => {
  const [activeState, setActiveState] = useState(1);

  const handleStepClick = (step) => {
    gettingdata(step);
    setActiveState(step);
  };

  return (
    <>
      <ul id="uniform-tabs-nav" className="list-unstyled">
        <li className={`navone ${activeState === 1 ? "active" : ""}`}>
          <a onClick={() => handleStepClick(1)}>
            <div className="step">
              <div className="step-no">Step 1</div>
            </div>
            <div className="step-tab">
              <div className="step-tab-icon">
                <figure>
                  <img src={img1} alt="" />
                </figure>
              </div>
              <h3 className="step-tab-name">Select Your Uniform</h3>
              <h3 className="step-tab-name-mob">Select</h3>
            </div>
          </a>
        </li>
        <li className={`navtwo ${activeState === 2 ? "active" : ""}`}>
          <a onClick={() => handleStepClick(2)}>
            <div className="step">
              <div className="step-no">Step 2</div>
            </div>
            <div className="step-tab">
              <div className="step-tab-icon">
                <figure>
                  <img
                    src= {img2}
                    alt=""
                  />
                </figure>
              </div>
              <h3 className="step-tab-name">Customize Your Uniform</h3>
              <h3 className="step-tab-name-mob">Customize</h3>
            </div>
          </a>
        </li>
        <li className={`navthree ${activeState === 3 ? "active" : ""}`}>
          <a onClick={() => handleStepClick(3)}>
            <div className="step">
              <div className="step-no">Step 3</div>
            </div>
            <div className="step-tab">
              <div className="step-tab-icon">
                <figure>
                  <img src={img3} alt="" />
                </figure>
              </div>
              <h3 className="step-tab-name">Finalize The Uniform</h3>
              <h3 className="step-tab-name-mob">Finalize</h3>
            </div>
          </a>
        </li>
      </ul>
    </>
  );
};
