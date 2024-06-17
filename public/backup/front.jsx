import React, { useRef, useEffect,forwardRef, useImperativeHandle } from "react";
import { fabric } from "fabric";
import JerseyCustomisableData from "../../utils/jerseyCustomisableData.js";

// forwardRef and useImperativeHandle for allowing parent to have access to child specific data.
const JerseyFront = forwardRef(({
  selectedNeckImage,
  selectedShoulderImage,
  shapeColors,
  selectedImage,
  imagePosition,
  setImagePosition,
},ref) => {

  // these are canvas ref for fabric and base canvas
  const canvasRef = useRef(null);
  const fabricCanvasRef = useRef(null);

  // this is defined here bcz we want it dynamically inside condition and it will be used as base image
  let shirtImage = ``;

  // which jersey is selected from jersey list
  const jersyNum = localStorage.getItem("selectedJersy");


  // based on shoulder clicked we want our base image i.e shirtImage
  if (selectedShoulderImage.includes("narrow")) {
    shirtImage = `assets/jerseys/${jersyNum}/slicings/crew_front_narrow_shoulder.png`;
  } else {
    shirtImage = `assets/jerseys/${jersyNum}/slicings/crew_front_wide_shoulder.png`;
  }


  // we want background image for our image so that i look original image
  const shirtBg = `assets/jerseys/${jersyNum}/slicings/crew_front_narrow_shoulderbg.png`;

  // this is for storing the value of uniform_layer which helps to decide how many stripes will be there
  // in a jersey and this is taken from util folder
  const stripesNum = JerseyCustomisableData[jersyNum].uniform_layers;

  // initially we defined one front-stripes based on selected jersey
  const frontStripes = `assets/jerseys/${jersyNum}/slicings/front-stripes.png`;


  // here we are getting remaining all stripes for selected jersey based on uniform_layer value
  const stripeImages = [];
  for (let i = 2; i < stripesNum; i++) {
    stripeImages.push(
      `assets/jerseys/${jersyNum}/slicings/front-stripes-${i}.png`
    );
  }


  // this is the function for loading images asynchronously
  const loadImages = async (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = (error) => {
        console.error("Image loading failed:", img);
        reject(error);
      };
    });
  };


  // this is the function for changing the color of components of jersey
  const changeColor = (imageData, color) => {
    if (!color) {
      console.error("Color is undefined or null.");
      return imageData;
    }
    const { data } = imageData;
    const hexColor = color.replace(/^#/, "");
    const [r, g, b] = hexColor.match(/.{1,2}/g).map((c) => parseInt(c, 16));
    for (let i = 0; i < data.length; i += 4) {
      data[i] = r;
      data[i + 1] = g;
      data[i + 2] = b;
    }
    return imageData;
  };


  // this is the function for drawiing our jersey in the canvas and having temporary canvas for drawing 
  // neck, stripes, shoulder in our jersye
  const drawImages = async (context) => {
    try {
      const [
        shirt,
        shoulderImg,
        frontStripesImg,
        selectedImg,
        selectedNeckbgImg,
        shirtbg,
        ...additionalStripes
      ] = await Promise.all([
        loadImages(shirtImage),
        loadImages(selectedShoulderImage),
        loadImages(frontStripes),
        loadImages(selectedNeckImage.NeckImg),
        loadImages(selectedNeckImage.NeckImgShd),
        loadImages(shirtBg),
        ...stripeImages.map((src) => loadImages(src)),
      ]);

      let additionalShoulderImg;
      if (
        selectedShoulderImage.includes("wide") &&
        JerseyCustomisableData[jersyNum].shoulder_layers === 2
      ) {
        additionalShoulderImg = await loadImages(
          `assets/jerseys/${jersyNum}/slicings/front-shoulders-wide-2.png`
        );
      }

      var selectedNeckImg2 = "";
      if (
        selectedNeckImage.NeckId === 2 ||
        selectedNeckImage.NeckId === 4 ||
        selectedNeckImage.NeckId === 12
      ) {
        selectedNeckImg2 = await loadImages(selectedNeckImage.NeckClr);
      }

      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      context.drawImage(shirt, 10, 30, 300, 600);
      let imageData = context.getImageData(10, 30, 300, 600);
      imageData = changeColor(imageData, shapeColors.shirt1);
      context.putImageData(imageData, 10, 30);
      context.drawImage(shirtbg, 10, 30, 300, 600);

      const images1 = [
        {
          image: shoulderImg,
          color: shapeColors.shoulder1,
          position: [10, 30],
        },
        {
          image: frontStripesImg,
          color: shapeColors.shirt2,
          position: [10, 30],
        },
      ];

      additionalStripes.forEach((stripeImg, index) => {
        const colorKey = `shirt${index + 3}`;
        images1.push({
          image: stripeImg,
          color: shapeColors[colorKey],
          position: [10, 30],
        });
      });

      images1.forEach(({ image, color, position }) => {
        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = 300;
        tempCanvas.height = 600;
        const tempContext = tempCanvas.getContext("2d");
        tempContext.drawImage(image, 0, 0, 300, 600);
        let tempImageData = tempContext.getImageData(0, 0, 300, 600);
        tempImageData = changeColor(tempImageData, color);
        tempContext.putImageData(tempImageData, 0, 0);
        context.drawImage(tempCanvas, ...position);
      });

      if (selectedNeckImage) {
        const tempCanvasbackStr = document.createElement("canvas");
        tempCanvasbackStr.width = 173;
        tempCanvasbackStr.height = 105;
        const textContextbackStr = tempCanvasbackStr.getContext("2d");
        textContextbackStr.drawImage(selectedImg, -8, -3, 173, 105);
        const tempImagebackStr = textContextbackStr.getImageData(
          -8,
          -3,
          173,
          105
        );
        const updatedTempImagebackStr = changeColor(
          tempImagebackStr,
          shapeColors.neck1
        );
        textContextbackStr.putImageData(updatedTempImagebackStr, -8, -3);
        context.drawImage(tempCanvasbackStr, 80, 30);

        if (
          selectedNeckImage.NeckId === 2 ||
          selectedNeckImage.NeckId === 4 ||
          selectedNeckImage.NeckId === 12
        ) {
          const tempCanvasbackStr = document.createElement("canvas");
          tempCanvasbackStr.width = 300;
          tempCanvasbackStr.height = 600;
          const textContextbackStr = tempCanvasbackStr.getContext("2d");
          textContextbackStr.drawImage(selectedNeckImg2, 4, 14, 300, 600);
          const tempImagebackStr = textContextbackStr.getImageData(
            4,
            14,
            300,
            600
          );
          const updatedTempImagebackStr = changeColor(
            tempImagebackStr,
            shapeColors.neck2
          );
          textContextbackStr.putImageData(updatedTempImagebackStr, 4, 14);
          context.drawImage(tempCanvasbackStr, 4, 14);
        }
      }

      if (additionalShoulderImg) {
        const tempCanvasbackStr = document.createElement("canvas");
        tempCanvasbackStr.width = 300;
        tempCanvasbackStr.height = 600;
        const textContextbackStr = tempCanvasbackStr.getContext("2d");
        textContextbackStr.drawImage(additionalShoulderImg, 5, 15, 300, 600);
        const tempImagebackStr = textContextbackStr.getImageData(
          5,
          15,
          300,
          600
        );
        const updatedTempImagebackStr = changeColor(
          tempImagebackStr,
          shapeColors.shoulder2
        );
        textContextbackStr.putImageData(updatedTempImagebackStr, 5, 15);
        context.drawImage(tempCanvasbackStr, 5, 15);
      }

      context.drawImage(selectedNeckbgImg, 9, 30);
    } catch (error) {
      console.error("Error loading images:", error);
    }
  };


  // loading our drawImages() inside the useEffect and will render when these dependencies changes
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    drawImages(context);
  }, [selectedNeckImage, selectedShoulderImage, shapeColors]);


  // this useEffect is for generating the selected image in our jersey with fabric control points and
  // draggable functionality
  useEffect(() => {
    const fabricCanvas = new fabric.Canvas(fabricCanvasRef.current, {
      width: 300,
      height: 600,
    });

   

    if (selectedImage) {
      // Using fabric.Image.fromURL, the code loads the image specified by selectedImage. Once the image is loaded, the callback function is
      //  executed with the loaded image object img.
      fabric.Image.fromURL(selectedImage, (img) => {
        img.set({
          left: imagePosition.left,
          top: imagePosition.top,
          scaleX: imagePosition.scaleX,
          scaleY: imagePosition.scaleY,
          angle: imagePosition.angle,
          hasRotatingPoint: false,
          lockScalingFlip: true,
          cornerSize: 10,
          transparentCorners: false,
        });

        fabricCanvas.add(img);
        fabricCanvas.setActiveObject(img);

        // when the image is modified then we have to extract left, top, scaleX, scaleY, angle from the img and then set it. Here modiefied is a predefined object of fabric js
        img.on("modified", () => {
          const { left, top, scaleX, scaleY, angle } = img;
          setImagePosition({ left, top, scaleX, scaleY, angle });

          
        });
      });
    }
    // The dispose method is used to clean up the Fabric.js canvas
    return () => {
      fabricCanvas.dispose();
    };
  }, [selectedImage]);


  // using this we allow our parent i.e canvas to have excess to this means parent is getting the whole final
  // image
  console.log("image position is >>>>>>>>>>>", imagePosition)
  useImperativeHandle(ref, () => ({
    captureCanvas: async () => {
      const mainCanvas = canvasRef.current;
      const fabricCanvas = fabricCanvasRef.current;

      const combinedCanvas = document.createElement("canvas");
      combinedCanvas.width = mainCanvas.width;
      combinedCanvas.height = mainCanvas.height;
      const combinedContext = combinedCanvas.getContext("2d");

      combinedContext.drawImage(mainCanvas, 0, 0);
      if (fabricCanvas) {
      
        const fabricImageData = fabricCanvas.toDataURL({
          format: "png",
          multiplier: 1,
        });
        const fabricImg = new Image();
        fabricImg.src = fabricImageData;
        await new Promise((resolve) => {
          fabricImg.onload = () => {
            combinedContext.drawImage(
              fabricImg,
              imagePosition.left,
              imagePosition.top,
              imagePosition.scaleX * 700,
              imagePosition.scaleY * 1400
            );
            
            resolve();
          };
        });
      }

      return combinedCanvas.toDataURL("image/png");
    },
  }));

  return (
    <div style={{ position: "relative", width: 300, height: 600 }}>
      <canvas
        ref={canvasRef}
        width={300}
        height={600}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      <canvas
        ref={fabricCanvasRef}
        width={300}
        height={600}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
        }}
      />
    </div>
  );
});

export default JerseyFront;
