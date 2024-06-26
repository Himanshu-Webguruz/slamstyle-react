import React from "react";
import { useState, useEffect } from "react";

import allColors from "../../utils/colors.js";
import AddPlayerNum from "./AddPlayerNum.jsx";
import AddPlayerName from "./AddPlayerName.jsx";
import AddText from "./AddText.jsx";

const AddTeam = ({
  onCanvasTemp,
  getNumValue,
  onPlayerTemp,
  txtPosition,
  isOpen,
  onAccordionToggle,
  numPosition,
  backNumPosition,
  backTextPosition,
}) => {
  // this state is for showing/hiding the tab of AddText
  const handleTab = () => {
    onAccordionToggle();
  };

  return (
    <>
      <li className={`${isOpen ? "active" : ""} text-style`}>
        {/* this is the heading of tab */}
        <h3 onClick={handleTab} className="forMob">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            width="300.000000pt"
            height="300.000000pt"
            viewBox="0 0 300.000000 300.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <metadata>
              Created by potrace 1.10, written by Peter Selinger 2001-2011
            </metadata>
            <g
              transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
              fill="#ffffff"
              stroke="none"
            >
              <path d="M347 2969 c-147 -50 -262 -164 -313 -308 -22 -62 -24 -80 -24 -307 0 -234 1 -242 23 -274 32 -48 69 -72 120 -77 61 -7 128 25 159 75 22 35 23 50 28 259 5 243 7 247 74 297 25 19 45 21 249 26 209 5 224 6 259 28 50 31 82 98 75 159 -5 51 -29 88 -77 121 -32 21 -40 22 -274 22 -215 -1 -247 -3 -299 -21z m533 -27 c40 -20 80 -74 80 -109 0 -40 -28 -87 -63 -108 -28 -18 -57 -20 -249 -25 l-216 -5 -43 -30 c-23 -16 -53 -50 -66 -74 -22 -42 -23 -55 -23 -230 0 -207 -7 -244 -49 -285 -58 -56 -145 -39 -191 36 -18 30 -20 51 -20 233 0 215 8 264 54 359 55 111 189 213 319 241 39 8 132 14 247 14 157 1 190 -2 220 -17z" />
              <path d="M2080 2968 c-48 -33 -72 -70 -77 -121 -7 -61 25 -128 75 -159 35 -22 50 -23 259 -28 204 -5 224 -7 249 -26 67 -50 69 -54 74 -297 5 -209 6 -224 28 -259 31 -50 98 -82 159 -75 51 5 88 29 121 77 21 32 22 41 22 264 0 161 -4 246 -14 281 -44 167 -175 299 -345 349 -43 13 -104 16 -286 16 -224 0 -233 -1 -265 -22z m503 -24 c184 -41 319 -173 362 -355 10 -45 15 -119 15 -249 0 -208 -7 -236 -69 -277 -40 -27 -71 -29 -117 -7 -62 30 -68 53 -74 294 -6 244 -10 260 -92 316 l-41 29 -216 5 c-203 5 -218 6 -253 28 -87 54 -68 181 32 221 43 17 371 13 453 -5z" />
              <path d="M935 2151 c-28 -12 -76 -61 -86 -89 -17 -44 -10 -117 14 -152 45 -68 70 -75 280 -77 l188 -3 -1 -495 c0 -340 3 -508 11 -537 14 -55 73 -114 122 -123 88 -17 173 36 196 123 8 29 11 197 11 537 l-1 495 188 3 c211 2 235 9 281 78 20 28 23 44 20 94 -4 63 -20 94 -67 131 -25 18 -49 19 -581 21 -305 1 -564 -2 -575 -6z m1151 -73 c38 -43 45 -88 19 -138 -29 -56 -61 -65 -262 -68 -167 -3 -183 -5 -200 -24 -17 -19 -18 -54 -23 -543 l-5 -523 -24 -26 c-53 -56 -135 -55 -184 4 l-24 28 -7 518 c-6 421 -10 523 -21 541 -14 20 -23 21 -202 25 -205 4 -221 7 -253 61 -37 59 -21 130 36 168 28 18 48 19 572 17 l544 -3 34 -37z" />
              <path d="M110 989 c-32 -13 -68 -47 -86 -81 -21 -41 -20 -464 2 -539 50 -170 172 -292 343 -343 43 -13 102 -16 286 -16 224 0 233 1 265 22 48 33 72 70 77 121 7 61 -25 128 -75 159 -35 22 -50 23 -259 28 -243 5 -247 7 -297 74 -19 25 -21 45 -26 249 -5 209 -6 224 -28 259 -39 63 -134 94 -202 67z m136 -57 c43 -32 48 -57 54 -283 l5 -216 29 -42 c16 -23 48 -53 70 -66 39 -22 53 -23 251 -27 235 -4 260 -10 289 -72 21 -45 20 -74 -4 -114 -41 -66 -62 -72 -279 -72 -215 0 -275 10 -374 62 -113 61 -197 171 -232 305 -11 41 -15 112 -15 251 0 181 2 197 22 233 36 65 124 85 184 41z" />
              <path d="M2753 980 c-24 -12 -53 -38 -65 -58 -22 -35 -23 -50 -28 -259 -5 -204 -7 -224 -26 -249 -50 -67 -54 -69 -297 -74 -209 -5 -224 -6 -259 -28 -50 -31 -82 -98 -75 -159 5 -51 29 -88 77 -121 32 -21 41 -22 265 -22 254 0 291 6 397 62 68 36 156 125 191 194 51 101 57 140 57 389 0 224 -1 233 -22 265 -52 76 -137 100 -215 60z m147 -48 c53 -39 60 -70 60 -276 0 -139 -4 -204 -16 -250 -45 -175 -175 -305 -350 -350 -84 -22 -432 -23 -472 -2 -71 37 -98 105 -67 170 30 64 53 70 290 74 198 4 212 5 251 27 22 13 54 43 70 66 l29 42 5 216 c6 240 12 264 72 295 39 20 91 15 128 -12z" />
            </g>
          </svg>
          Text
        </h3>

        {isOpen && (
          <div className="answer-wrap">
            
            <div>
               <AddPlayerName
                          onPlayerTemp={onPlayerTemp}
                          backTextPosition={backTextPosition}
                        />
                         
            </div> <div>
              <AddText onCanvasTemp={onCanvasTemp} txtPosition={txtPosition} />
            </div>
            <div>
               <AddPlayerNum
                          getNumValue={getNumValue}
                          numPosition={numPosition}
                          backNumPosition={backNumPosition}
                        /> 
            </div> 
          </div>
        )}
      </li>
    </>
  );
};

export default AddTeam;
