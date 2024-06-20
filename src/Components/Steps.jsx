import React, { useState } from "react";
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
            
            <div className="step-tab">
              <h3 className="step-tab-name-mob">Select</h3>
            </div>
          </a>
        </li>
        <li className={`navtwo ${activeState === 2 ? "active" : ""}`}>
          <a onClick={() => handleStepClick(2)}>
           
            <div className="step-tab">
              <h3 className="step-tab-name-mob">Customize</h3>
            </div>
          </a>
        </li>
        <li className={`navthree ${activeState === 3 ? "active" : ""}`}>
          <a onClick={() => handleStepClick(3)}>
            <div className="step-tab">
              <h3 className="step-tab-name-mob">Finalize</h3>
            </div>
          </a>
        </li>
      </ul>
    </>
  );
};
