import React from "react";
import { useState, useEffect } from "react";

import allColors from "../../utils/colors.js";

const AddPlayerNum = ({ getNumValue }) => {

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [numValue, setNumValue] = useState("");


  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const [boldchecked, setBoldchecked] = useState(false);
  const handleBoldCheck = (e) => {
    setBoldchecked(e.target.checked);
  };

  const [italicCheck, setItalicCheck] = useState(false);
  const handleItalicCheck = (e) => {
    setItalicCheck(e.target.checked);
  };

  const [outlineCheck, setOutlineCheck] = useState(false);
  const handleOutlineCheck = (e) => {
    setOutlineCheck(e.target.checked);
  };

  // state for showing and hiding color palette
  const [showOutlineColors, setShowOutlineColors] = useState(false);
  // fir showing/hiding colors
  const toggleOutlineColors = () => {
    setShowOutlineColors(!showOutlineColors);
  };

  // state for storing selected color
  const [selectedOutlineColor, setSelectedOutlineColor] = useState("");

  // for handling selected color
  const handleOutlineColorSelection = (color) => {
    setSelectedOutlineColor(color);
  };

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // state for showing and hiding color palette
  const [showAllColors, setShowAllColors] = useState(false);
  // fir showing/hiding colors
  const toggleAllColors = () => {
    setShowAllColors(!showAllColors);
  };

  // state for storing selected color
  const [selectedColor, setSelectedColor] = useState("");

  // for handling selected color
  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  // const [shapeValue, setShapeValue] = useState("Straight");
  // // shape array for all shapes
  // const shapeArray = [
  //   "vertical-arc",
  //   "center-bulge",
  //   "bottom-vertical",
  //   "full-rev-arc",
  //   "half-asleep-arc",
  //   "inverse-vertical",
  //   "Straight",
  //   "gravity",
  //   "trajectory",
  //   "san-diego",
  //   "breathing-in",
  // ];
  // handling shapeValue to set shape
  const handleOptionChange = () => {
    setShapeValue(document.getElementById("shape").value);
  };

  // state for selected font value from css
  const [fontValue, setFontValue] = useState("SS0");
  // storing all font
  const fontArray = [];
  for (let i = 0; i <= 401; i++) {
    fontArray.push(`SS${i}`);
  }
  // mapping my font value with the src url
  const [fontMapping, setFontMapping] = useState({});

  // handling fontchange
  const handleFontChange = () => {
    setFontValue(document.getElementById("font").value);
  };

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // this useEffect is for loading my custom.js file
  useEffect(() => {
    // Dynamically load the custom.js script
    const script = document.createElement("script");
    script.src = "../../../public/custom.js";
    script.async = true;
    document.body.appendChild(script);

    // Remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // this useEffect is for reading my fonts.css file to excess font family and url value
  useEffect(() => {
    // Dynamically parse CSS font-face rules
    const styleSheets = Array.from(document.styleSheets);
    const fontMappingTemp = {};
    styleSheets.forEach((styleSheet) => {
      try {
        const cssRules = Array.from(styleSheet.cssRules);
        cssRules.forEach((rule) => {
          if (rule instanceof CSSFontFaceRule) {
            const fontFamily = rule.style.fontFamily.replace(/"/g, "");
            const fontSrc = rule.style.src.match(/url\("(.*)"\)/)[1];
            fontMappingTemp[fontFamily] = fontSrc;
          }
        });
      } catch (e) {
        console.log("Error accessing CSS rules:", e);
      }
    });
    setFontMapping(fontMappingTemp);
  }, [fontValue]);

  useEffect(() => {
    if (numValue) {
      handlegettingData();
    }
  }, [
   
    fontValue,
    boldchecked,
    italicCheck,
    outlineCheck,
    selectedOutlineColor,
    selectedColor,
  ]);

  const handlegettingData = () => {
    const textInput = document.getElementById("text-string").value;
    
    const textFont = fontValue;

    

    window.svgpathfunc2(
      "front",
      textInput,
      outlineCheck,
      selectedOutlineColor,
      selectedColor,
      fontMapping[textFont]?.split("/").pop(),
      boldchecked,
      "Straight",
      italicCheck
    );

   
  };

  useEffect(() => {
    const handleCanvasTemp = () => {
      getNumValue(window.canvasTemp2);
    };

    window.addEventListener("canvasTemp2", handleCanvasTemp);

    return () => {
      window.removeEventListener("canvasTemp2", handleCanvasTemp);
    };
  }, [getNumValue]);

  const handleReset = ()=>{
    console.log('resetted')
  }


  return (
    <>
      <div className= "text-style">
          <div className="answer-wrap">
            <div className="answer">
              <div className="customize-prod-list scrollbar">
                <div className="wraper">
                  <div className="name-number-row">
                    <div className="name-number-col">
                      <div className="name-number-info full-width">
                        <div className="input-append field-input">
                          <label className="sklble">
                            <a onClick={handleReset}>Reset</a>
                            Add Player Number (Only digits)
                          </label>
                          <input
                            className="span2"
                            value={numValue}
                            id="text-string"
                            type="number"
                            style={{ color: "#fff" }}
                            onChange={(e) => setNumValue(e.target.value)}
                            placeholder="add player number here..."
                          />

                          <button
                            id="add-text-string"
                            className="btn btn-submit fieldin"
                            title="Add text"
                            onClick={handlegettingData}
                          >
                            Apply <i className="icon-share-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <select onChange={handleFontChange} value={fontValue} id="font">
                {fontArray.map((fontKey, id) => {
                  const fontName = fontMapping[fontKey] ? fontMapping[fontKey].split("/").pop().split(".")[0] : fontKey;
                  return (
                    <option key={id} value={fontKey} style={{ fontFamily: fontKey }}>
                      {fontName}
                    </option>
                  );
                })}
              </select>

                <input
                  type="button"
                  className="toggle-colors-btn"
                  onClick={toggleAllColors}
                  style={{ height: "30px", width: "30px" }}
                />

                {showAllColors && (
                  <div className="all-colors">
                    {allColors.map((color, index) => (
                      <input
                        type="button"
                        key={index}
                        style={{
                          backgroundColor: color,
                          height: "15px",
                          width: "15px",
                        }}
                        onClick={() => handleColorSelection(color)}
                      ></input>
                    ))}
                  </div>
                )}
                <label htmlFor="bold"> Bold</label>
                <input id="bold" type="checkbox" onChange={handleBoldCheck} />

                <label htmlFor="italic"> Italic</label>
                <input
                  id="italic"
                  type="checkbox"
                  onChange={handleItalicCheck}
                />
                <label htmlFor="outline"> Outline</label>
                <input
                  id="outline"
                  type="checkbox"
                  onChange={handleOutlineCheck}
                />

                <input
                  type="button"
                  className="toggle-colors-btn"
                  onClick={toggleOutlineColors}
                  style={{ height: "30px", width: "30px" }}
                />

                {showOutlineColors && (
                  <div className="all-colors">
                    {allColors.map((color, index) => (
                      <input
                        type="button"
                        key={index}
                        style={{
                          backgroundColor: color,
                          height: "15px",
                          width: "15px",
                        }}
                        onClick={() => handleOutlineColorSelection(color)}
                      ></input>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default AddPlayerNum;
