import React from "react";
import { useState, useEffect } from "react";

import allColors from "../../utils/colors.js";

const AddPlayerNum = ({ getNumValue, numPosition, backNumPosition }) => {

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
    setFontValue(document.getElementById("font2").value);
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
      handlegettingNum();
    }
  }, [
   
    fontValue,
    boldchecked,
    italicCheck,
    outlineCheck,
    selectedOutlineColor,
    selectedColor,
  ]);

  const handlegettingNum = () => {
    const textInput = document.getElementById("text-num").value;
    
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

  const handleReset = () => {
    numPosition({ left: 200, top: 100, scaleX: 0.7, scaleY: 0.7, angle: 0 });
    backNumPosition({ left: 130, top: 150, scaleX: 2, scaleY: 2, angle: 0 });
  };


  return (
    <>
      <div className= "text-style">
            <div className="answer">
              <div className="customize-prod-list scrollbar">
                <div className="wraper">
                  <div className="name-number-row">
                    <div className="name-number-col">
                      <div className="name-number-info full-width">
                        <div className="input-append field-input">
                          <label className="sklble">
                            
                            Add Player Number (Only digits)
                            <a onClick={handleReset}>Reset</a>
                          </label>
                          <input
                            className="span2"
                            value={numValue}
                            id="text-num"
                            type="number"
                            style={{ color: "#fff" }}
                            onChange={(e) => setNumValue(e.target.value)}
                            placeholder="add player number here..."
                          />

                          <button
                            id="add-text-string"
                            className="btn btn-submit fieldin"
                            title="Add text"
                            onClick={handlegettingNum}
                          >
                            Apply <i className="icon-share-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <select onChange={handleFontChange} value={fontValue} id="font2">
                {fontArray.map((fontKey, id) => {
                  const fontName = fontMapping[fontKey] ? fontMapping[fontKey].split("/").pop().split(".")[0] : fontKey;
                  return (
                    <option key={id} value={fontKey} style={{ fontFamily: fontKey }}>
                      {fontName}
                    </option>
                  );
                })}
              </select>

              <div style={{display: 'block'}}>
              <input
                type="button"
                className="toggle-colors-btn"
                onClick={toggleAllColors}
                style={{ height: "30px", width: "30px" }}
              /> Name Color
              </div>

                {showAllColors && (
                  <div className="all-colors">
                    <div className="color-row" style={{display: 'block'}}>
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
                  </div>
                )}
                <div className="labelMerge">
              <label htmlFor="bold"> Bold</label>
              <input id="bold" type="checkbox" onChange={handleBoldCheck} />
              </div>
              <div className="labelMerge">
              <label htmlFor="italic"> Italic</label>
              <input id="italic" type="checkbox" onChange={handleItalicCheck} />
              </div>
              <div className="labelMerge">
              <label htmlFor="outline"> Outline</label>
              <input id="outline" type="checkbox" onChange={handleOutlineCheck} />
              </div>
              <div style={{display: 'block'}}>
              <input
                type="button"
                className="toggle-colors-btn"
                onClick={toggleOutlineColors}
                style={{ height: "30px", width: "30px" }}
              />
</div>

                {showOutlineColors && (
                  <div className="all-colors">
                    <div className="color-row">
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
                  </div>
                )}
              </div>
            </div>
        
      </div>
    </>
  );
};

export default AddPlayerNum;
