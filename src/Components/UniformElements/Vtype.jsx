import React, { useState } from "react";
// imported images becuase loop was not functioning as expected
import vCutOne from "../../assets/images/cut-types/v-cut-top.png";
import vCutshort from "../../assets/images/cut-types/v-cut-shorts.png";
import noVcutTwo from "../../assets/images/cut-types/no-v-cut-top.png";
import noVCutshort from "../../assets/images/cut-types/no-v-cut-short.png";
export default function Vtype({ onImageSelect,isOpen, onAccordionToggle }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const handleTab = () => {
    onAccordionToggle();
  };

  const [cutType, setCutType] = useState("noV");
  const handleCutorNoCut = (type) => {
    onImageSelect(type);
    setCutType(type);

    const isMobileView = window.innerWidth <= 960; // Change the breakpoint value as needed

  // Call onAccordionToggle only if it's in mobile view
  if (isMobileView) {
    onAccordionToggle();
  }
  };

  return (
    <>
      <li className={`choose-v ${isOpen ? "active" : ""}`}>
      <h3 onClick={handleTab} className="forDesktop">
          Choose V or No V in Uniform
        </h3>
        <h3 onClick={() => handleTab("choose-v-layer")} className="forMob">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="60.000000pt" height="20.000000pt" viewBox="0 0 60.000000 20.000000" preserveAspectRatio="xMidYMid meet">
        <metadata>
        Created by potrace 1.10, written by Peter Selinger 2001-2011
        </metadata>
        <g transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
        <path d="M294 187 c-3 -9 -13 -42 -23 -73 l-17 -57 -112 -2 c-77 -2 -117 -7 -129 -16 -15 -13 -13 -15 13 -20 44 -10 256 -10 250 0 -3 4 1 16 8 26 13 18 14 18 42 -2 16 -12 56 -25 89 -30 69 -10 181 -3 178 12 -1 6 -57 17 -124 25 l-122 15 -18 64 c-20 71 -26 81 -35 58z"/>
        </g>
        </svg>
        V cut
        </h3>
        {isOpen && (
          <div className="answer-wrap">
            <div className="answer">
              <div className="customize-prod-list scrollbar">
                <div className="wraper shoulder-size">
                  <div className="customize-info">
                    <div className="customize-info-inner">
                      <div
                        className={`info jersey-cutting ${
                          cutType === "v" ? "active-jerseyCut" : ""
                        }`}
                        data-id="noCut"
                      >
                        <button
                          className="button"
                          onClick={() => handleCutorNoCut("v")}
                        >
                          <div className="info-group">
                            <figure>
                              <img src={vCutshort} alt="" />
                              <figcaption>V Cut Top</figcaption>
                            </figure>
                            <figure>
                              <img src={vCutOne} alt="" />
                              <figcaption>V Cut Shorts</figcaption>
                            </figure>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wraper shoulder-size">
                  <div className="customize-info">
                    <div className="customize-info-inner">
                      <div
                        className={`info jersey-cutting ${
                          cutType === "noV" ? "active-jerseyCut" : ""
                        }`}
                        data-id="vCut"
                      >
                        <button
                          className="button"
                          onClick={() => handleCutorNoCut("noV")}
                        >
                          <div className="info-group">
                            <figure>
                              <img src={noVcutTwo} alt="" />
                              <figcaption>No V Cut Shorts</figcaption>
                            </figure>
                            <figure>
                              <img src={noVCutshort} alt="" />
                              <figcaption>No V Cut Top</figcaption>
                            </figure>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </li>
    </>
  );
}
