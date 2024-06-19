import React, { useState } from "react";
import allColors from "../../utils/colors.js";
import JerseyCustomisableData from "../../utils/jerseyCustomisableData.js";

// onColorSelect is for passing the selected color and selectedNeckId is for getting the selectedNeck from neck options 
export default function Color({ onColorSelect, selectedNeckId ,shapeColor,isOpen,onAccordionToggle}) {

  // getting the selected Jersey from the localstorage
  const selectedJersy = localStorage.getItem("selectedJersy");

  // now getting all data associated to a particular jersey
  const jerseyData = JerseyCustomisableData[selectedJersy];

  // state for showing and hiding color palette
  const [showColor, setShowColor] = useState("");

  // state for recent colors
  const [recentColors, setRecentColors] =  useState(['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff']);

  // state for the currently selected color for each area
  const [selectedColors, setSelectedColors] = useState({});

  const handleShowColor = (palette) => {
    setShowColor(showColor === palette ? "" : palette);
  };

  // state and function for showing and hiding color tabs
  

  const handleTab = () => {
    onAccordionToggle();
  };

  // passing the selected color to parent as a callback function and updating recent colors
  const handleColor = (color, area) => {
    onColorSelect(color, area);

    const isMobileView = window.innerWidth <= 960; // Change the breakpoint value as needed

  // Call onAccordionToggle only if it's in mobile view
  if (isMobileView) {
    onAccordionToggle();
  }

    // Update the recent colors
    setRecentColors((prevColors) => {
      const newColors = [color, ...prevColors.filter((c) => c !== color)];
      return newColors.slice(0, 10);
    });

    // Update the selected color for the specific area
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [area]: color
    }));
  };

  // function is called here , with area as shirt, neck, shoulder . buttonText for label . Layer for number of color buttons
  // and selectedNeckId for selected neck
  const renderColorSelection = (area, buttonText, layers, selectedNeckId) => {
    const colorAreas = [];
    let neckLayers = layers;
  
    if (selectedNeckId && [2, 4, 12].includes(parseInt(selectedNeckId))) {
      neckLayers = 2;
    } else {
      neckLayers = 1;
    }
  
    for (let i = 1; i <= (area === "neck" ? neckLayers : layers); i++) {
      const colorKey = area + i;
  
      colorAreas.push(
        <div style={{ display: "flex", flexDirection: "column" }} key={i}>
          <span>{buttonText} {i}</span>
          <div style={{ position: "relative" }}>
            <input
              type="button"
              style={{
                backgroundColor: selectedColors[colorKey] || shapeColor[colorKey] || "#fff",
                height: "30px",
                width: "30px",
                marginRight: "250px",
              }}
              onClick={() => handleShowColor(colorKey)}
            />
            {showColor === colorKey && (
              <div style={{ position: "absolute", top: 0, right: 0 }}>
                <button onClick={() => handleShowColor("")}>
                  Close
                </button>
              </div>
            )}
          </div>
          {showColor === colorKey && (
            <>
              <div className="merge-two-layers">
                <div style={{ display: "flex" }} className="recent-inputs">
                  {recentColors.map((color, index) => (
                    <input
                      key={index}
                      type="button"
                      style={{
                        backgroundColor: color,
                      }}
                      onClick={() => handleColor(color, colorKey)}
                    />
                  ))}
                </div>
                <div className="color-row">
                  {allColors.map((color, index) => (
                    <input
                      key={index}
                      type="button"
                      style={{
                        backgroundColor: color,
                        height: "15px",
                        width: "15px",
                        marginRight: "5px",
                      }}
                      onClick={() => handleColor(color, colorKey)}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      );
    }
    return colorAreas;
  };

  return (
    <>
      <li className={`color-uniform ${isOpen ? "active" : ""}`}>
        <h3 onClick={handleTab} className="forDesktop">Color Uniform</h3>
        <h3 onClick={() => handleTab("color-uniform-layer")} className="forMob"><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="300.000000pt" height="300.000000pt" viewBox="0 0 300.000000 300.000000" preserveAspectRatio="xMidYMid meet">
        <metadata>
        Created by potrace 1.10, written by Peter Selinger 2001-2011
        </metadata>
        <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
        <path d="M950 2650 c-91 -3 -172 -9 -180 -15 -40 -26 -620 -624 -629 -648 -15 -40 -14 -91 4 -135 10 -24 89 -110 218 -240 187 -188 252 -242 292 -242 13 0 15 -54 15 -470 0 -453 1 -472 20 -510 11 -22 39 -52 62 -67 l42 -28 698 -3 c669 -2 701 -2 742 17 54 24 92 73 106 137 7 33 10 209 8 507 -3 451 -3 457 17 457 11 0 35 9 53 20 42 26 403 385 437 435 29 43 34 115 11 168 -15 36 -554 581 -596 602 -20 10 -77 14 -207 16 -162 1 -183 -1 -219 -19 -99 -51 -181 -67 -334 -67 -158 0 -223 12 -335 63 -59 27 -62 27 -225 22z m208 -59 c20 -10 71 -30 112 -42 66 -21 95 -24 235 -24 140 0 169 3 235 24 41 12 92 32 112 42 32 16 60 19 204 19 128 0 173 -3 198 -15 18 -9 154 -138 303 -288 368 -369 364 -328 65 -629 -137 -139 -216 -211 -238 -218 -19 -6 -45 -25 -59 -41 l-25 -31 0 -474 c0 -523 1 -510 -62 -556 l-33 -23 -700 0 -700 0 -33 23 c-63 46 -62 36 -62 527 0 507 1 500 -72 533 -64 29 -453 425 -463 470 -17 81 -13 86 293 397 158 159 300 298 317 308 45 26 320 25 373 -2z"/>
        </g>
        </svg>Color</h3>

        {/* if showAnswer is true means tab is open then */}
        {isOpen && (
          <div className="answer-wrap">
            <div className="answer">
              <div className="customize-prod-list scrollbar">
                {/* run this function for 3 times because we have section for shirt, neck, and shoulder */}
                {/* 3rd parameter is for getting the layers to decide the number of color button to show */}
                {/* but for neck we also have selectedNeckId */}
                <div className="wrapper">
                  <h4 className="customize-heading">Uniform Colors</h4>
                  <div className="color-row">
                    <div className="color-col">
                      <div className="color-info">
                        {renderColorSelection("shirt", "Color", jerseyData.uniform_layers)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wrapper">
                  <h4 className="customize-heading">Neck Colors</h4>
                  <div className="color-row">
                    <div className="color-col">
                      <div className="color-info">
                        {renderColorSelection("neck", "Color", jerseyData.neck_style, selectedNeckId)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wrapper">
                  <h4 className="customize-heading">Shoulders Colors</h4>
                  <div className="color-row">
                    <div className="color-col">
                      <div className="color-info">
                        {renderColorSelection("shoulder", "Color", jerseyData.shoulder_layers)}
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
