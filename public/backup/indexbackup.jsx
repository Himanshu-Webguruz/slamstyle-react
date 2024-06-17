import React from "react";
import { useEffect } from "react";
import $ from 'jquery';
import '../utils/custom.js'
const index = () => {
  useEffect(() => {
    // Dynamically load the custom.js script
    const script = document.createElement('script');
    script.src = '/custom.js'
    script.async = true;
    document.body.appendChild(script);
    
    // Remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);



  const handleClick = () => {
    const textInput = document.getElementById("textInput").value;
    
    window.svgpathfunc(
      "front",
      textInput,
      true,
      "white",
      "white",
      "X360.TTF",
      false,
      ""
    );
  };
  return (
    <>
    <div id="ranges" >
        
      </div>
      <input
        id="mesh-complexity"
        type="range"
        min="1"
        max="7"
        step="1"
        defaultValue="7"
      />
      <input
        id="interpolation-complexity"
        type="range"
        min="0"
        max="400"
        step="100"
        defaultValue="50"
      />
      <input id="show-original-box-btn" type="checkbox" />
      <div className="teamNameTemp">

      <div id="scale-wrap-front">
        <div id="svg-container-front">
          <svg id="svg-control-front">
            <path id="control-path-front" />
          </svg>
          <svg id="svg-element-front"></svg>
        </div>
      </div>

      <div id="scale-wrap-back">
        <div id="svg-container-back">
          <svg id="svg-control-back">
            <path id="control-path-back" />
          </svg>
          <svg id="svg-element-back"></svg>
        </div>
      </div>
      <div id="svgpath-front"></div>
      <div id="svgpath-back"></div>
    </div>
    <input type="text" id="textInput" placeholder="Enter text" />
    <button id="applyButton" onClick={handleClick}>Apply</button>
  </>

  );
};

export default index;

