//////// Common Function ////////

// function commonFunc(){
//   // alert("common function");
  
//   let mainCanvas1 = document.getElementById('main-preview');
//   let ctxMain1 = mainCanvas1.getContext('2d');
//   ctxMain1.clearRect(0, 0, mainCanvas1.width, mainCanvas1.height);

//   let mainCanvas = document.getElementById('main-preview');
//   let ctxMain = mainCanvas.getContext('2d');
  
//   // Main body
//   let image = document.getElementById("static-preview");
//   let imgsrc = image.src;
//   draw(imgsrc,'');
//   // Main body
  

//   // Collar
//   let imageObj = new Image();
//   imageObj.src = jQuery('.choosenone').attr('src');
  
//   imageObj.onload = function() {
//     ctxMain.drawImage(imageObj, 0, 0);
//   };
//   // Collar


//  // Shoulder
//   let imageObj1 = new Image();
//   imageObj1.src = jQuery('.choosenShoulder').attr('front-narrow-shoulder');
//   imageObj1.onload = function() {
//   ctxMain.drawImage(imageObj1, 0, 0);
//   };
//   // Shoulder


//    // Stripes
//    let imageObj2 = new Image();
//    imageObj2.src = jQuery('.choosenStripe').attr('front-stripe');
//    imageObj2.onload = function() {
//    ctxMain.drawImage(imageObj2, 0, 0);
//    };
//    // Stripes
// }

function canvasbackup (){
  document.getElementById('onteamname').remove();
  html2canvas(document.getElementById("html-content-holder")).then(function (canvas) {
    var imgTag = document.createElement("img");
    var canvasTag = document.createElement("div");		
    canvasTag.id = "tcanvas";
    imgTag.src = canvas.toDataURL();
    imgTag.id = "onteamname";
    draw(imgTag.src,'');
    if($('#tcanvas').length == 0){
      document.getElementById("html-content-holder").appendChild(canvasTag);
    }
  });
}
function draw(imgsrcpar,cls){
  let canvas = document.getElementById(cls+'main-preview');
  let ctx = canvas.getContext("2d");
  var img2 = document.createElement('img'); // Use DOM HTMLImageElement
  img2.src = imgsrcpar;
  img2.class = 'dnone';
  img2.id = 'imagetobeused';
  document.getElementById(cls+'main-preview').appendChild(img2);
  let imagetobeused = document.getElementById('imagetobeused');
  imagetobeused.onload = function () {
    ctx.drawImage(imagetobeused, 0, 0);
    document.getElementById('imagetobeused').remove();
  }
}


//////// Temp Front Side ////////

function tempFrontSide(){

  let mainCanvas1 = document.getElementById('temp-front-main-preview');
  let ctxMain1 = mainCanvas1.getContext('2d');
  ctxMain1.clearRect(0, 0, mainCanvas1.width, mainCanvas1.height);


  //Main body
  let mainBody = document.getElementById('temp-front-main-preview');
  let ctxmainBody = mainBody.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasBody = document.createElement('canvas');
  tempCanvasBody.width = mainBody.width;
  tempCanvasBody.height = mainBody.height;
  let ctxTempBody = tempCanvasBody.getContext('2d');

  let imageSrcBody = jQuery('#static-preview').attr('src');
  let imageBody = new Image();
  imageBody.src = imageSrcBody;
  imageBody.onload = function() {
    ctxTempBody.drawImage(imageBody, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempBody.globalCompositeOperation = 'source-in';
    ctxTempBody.fillStyle = jQuery('#main-color').val();
    ctxTempBody.fillRect(0, 0, tempCanvasBody.width, tempCanvasBody.height);
    ctxTempBody.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxmainBody.drawImage(tempCanvasBody, 0, 0);
  //Main body


  // Main body shadow
  let mainShadowCanvas = document.getElementById('temp-front-main-preview');
  let ctxMainShadow = mainShadowCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempShadowCanvas = document.createElement('canvas');
  tempShadowCanvas.width = mainShadowCanvas.width;
  tempShadowCanvas.height = mainShadowCanvas.height;
  let ctxTempShadow = tempShadowCanvas.getContext('2d');

  let imageSrcShadow = jQuery('#front-shadow-preview').attr('src');
  let imageShadow = new Image();
  imageShadow.src = imageSrcShadow;
  imageShadow.onload = function() {
    ctxTempShadow.drawImage(imageShadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainShadow.drawImage(tempShadowCanvas, 0, 0);
  };
  // Main body shadow


  // Collar
  let mainCanvasCollar = document.getElementById('temp-front-main-preview');
  let ctxMainCollar = mainCanvasCollar.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar = document.createElement('canvas');
  tempCanvasCollar.width = mainCanvasCollar.width;
  tempCanvasCollar.height = mainCanvasCollar.height;
  let ctxTempCollar = tempCanvasCollar.getContext('2d');

  let imageSrcCollar = jQuery('.choosenone').attr('front-collar');
  let imageCollar = new Image();
  imageCollar.src = imageSrcCollar;
  imageCollar.onload = function() {
    ctxTempCollar.drawImage(imageCollar, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempCollar.globalCompositeOperation = 'source-in';
    ctxTempCollar.fillStyle = jQuery('#collar-color').val();
    ctxTempCollar.fillRect(0, 0, tempCanvasCollar.width, tempCanvasCollar.height);
    ctxTempCollar.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainCollar.drawImage(tempCanvasCollar, 0, 0);
  };
  // Collar


  // Collar shadow
  let mainCanvasCollar_shadow = document.getElementById('temp-front-main-preview');
  let ctxMainCollar_shadow = mainCanvasCollar_shadow.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar_shadow = document.createElement('canvas');
  tempCanvasCollar_shadow.width = mainCanvasCollar_shadow.width;
  tempCanvasCollar_shadow.height = mainCanvasCollar_shadow.height;
  let ctxTempCollar_shadow = tempCanvasCollar_shadow.getContext('2d');

  let imageSrcCollar_shadow = jQuery('.choosenone').attr('front-collar-shadow');
  let imageCollar_shadow = new Image();
  imageCollar_shadow.src = imageSrcCollar_shadow;
  imageCollar_shadow.onload = function() {
    ctxTempCollar_shadow.drawImage(imageCollar_shadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainCollar_shadow.drawImage(tempCanvasCollar_shadow, 0, 0);
  };
  // Collar shadow


  // Collar Layer
  let mainCanvasCollarLayer = document.getElementById('temp-front-main-preview');
  let ctxMainCollarLayer = mainCanvasCollarLayer.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollarLayer = document.createElement('canvas');
  tempCanvasCollarLayer.width = mainCanvasCollarLayer.width;
  tempCanvasCollarLayer.height = mainCanvasCollarLayer.height;
  let ctxTempCollarLayer = tempCanvasCollarLayer.getContext('2d');

  let imageSrcCollarLayer = jQuery('.choosenone').attr('collar-layer');
  let imageCollarLayer = new Image();
  imageCollarLayer.src = imageSrcCollarLayer;
  imageCollarLayer.onload = function() {
    ctxTempCollarLayer.drawImage(imageCollarLayer, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempCollarLayer.globalCompositeOperation = 'source-in';
    ctxTempCollarLayer.fillStyle = jQuery('#collar-layer-color').val();
    ctxTempCollarLayer.fillRect(0, 0, tempCanvasCollarLayer.width, tempCanvasCollarLayer.height);
    ctxTempCollarLayer.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainCollarLayer.drawImage(tempCanvasCollarLayer, 0, 0);
  };
  // Collar Layer


  // Shoulder
  let mainCanvasShoulder = document.getElementById('temp-front-main-preview');
  let ctxMainShoulder = mainCanvasShoulder.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasShoulder = document.createElement('canvas');
  tempCanvasShoulder.width = mainCanvasShoulder.width;
  tempCanvasShoulder.height = mainCanvasShoulder.height;
  let ctxTempShoulder = tempCanvasShoulder.getContext('2d');

  let imageObj1 = new Image();
  imageObj1.src = jQuery('.choosenShoulder').attr('front-narrow-shoulder');
  imageObj1.onload = function() {
    ctxTempShoulder.drawImage(imageObj1, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempShoulder.globalCompositeOperation = 'source-in';
    ctxTempShoulder.fillStyle = jQuery('#shoulder-color').val();
    ctxTempShoulder.fillRect(0, 0, tempCanvasShoulder.width, tempCanvasShoulder.height);
    ctxTempShoulder.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainShoulder.drawImage(tempCanvasShoulder, 0, 0);
  };
  // Shoulder


  // Stripes
  let mainCanvas = document.getElementById('temp-front-main-preview');
  let ctxMain = mainCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvas = document.createElement('canvas');
  tempCanvas.width = mainCanvas.width;
  tempCanvas.height = mainCanvas.height;
  let ctxTemp = tempCanvas.getContext('2d');

  let imageSrc = jQuery('.choosenStripe').attr('front-stripe');
  let image = new Image();
  image.src = imageSrc;
  image.onload = function() {
    ctxTemp.drawImage(image, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTemp.globalCompositeOperation = 'source-in';
    ctxTemp.fillStyle = jQuery('#stripes-color').val();
    ctxTemp.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    ctxTemp.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMain.drawImage(tempCanvas, 0, 0);
  };
  // Stripes
 };
}

//////// Temp Front Side ////////


//////// Temp Back Side ////////

function tempBackSide(){
  let mainCanvas1 = document.getElementById('temp-back-main-preview');
  let ctxMain1 = mainCanvas1.getContext('2d');
  ctxMain1.clearRect(0, 0, mainCanvas1.width, mainCanvas1.height);

  
  //Main body
  let mainBody = document.getElementById('temp-back-main-preview');
  let ctxmainBody = mainBody.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasBody = document.createElement('canvas');
  tempCanvasBody.width = mainBody.width;
  tempCanvasBody.height = mainBody.height;
  let ctxTempBody = tempCanvasBody.getContext('2d');

  let imageSrcBody = jQuery('#back-preview').attr('src');
  let imageBody = new Image();
  imageBody.src = imageSrcBody;
  imageBody.onload = function() {
    ctxTempBody.drawImage(imageBody, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempBody.globalCompositeOperation = 'source-in';
    ctxTempBody.fillStyle = jQuery('#main-color').val();
    ctxTempBody.fillRect(0, 0, tempCanvasBody.width, tempCanvasBody.height);
    ctxTempBody.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxmainBody.drawImage(tempCanvasBody, 0, 0);
  //Main body


  // Main body shadow
  let mainShadowCanvas = document.getElementById('temp-back-main-preview');
  let ctxMainShadow = mainShadowCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempShadowCanvas = document.createElement('canvas');
  tempShadowCanvas.width = mainShadowCanvas.width;
  tempShadowCanvas.height = mainShadowCanvas.height;
  let ctxTempShadow = tempShadowCanvas.getContext('2d');

  let imageSrcShadow = jQuery('#back-shadow-preview').attr('src');
  let imageShadow = new Image();
  imageShadow.src = imageSrcShadow;
  imageShadow.onload = function() {
    ctxTempShadow.drawImage(imageShadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainShadow.drawImage(tempShadowCanvas, 0, 0);
  };
 // Main body shadow

  
  // Collar
  let mainCanvasCollar = document.getElementById('temp-back-main-preview');
  let ctxMainCollar = mainCanvasCollar.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar = document.createElement('canvas');
  tempCanvasCollar.width = mainCanvasCollar.width;
  tempCanvasCollar.height = mainCanvasCollar.height;
  let ctxTempCollar = tempCanvasCollar.getContext('2d');

  let imageSrcCollar = jQuery('.choosenone').attr('back-collar');
  let imageCollar = new Image();
  imageCollar.src = imageSrcCollar;
  imageCollar.onload = function() {
    ctxTempCollar.drawImage(imageCollar, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempCollar.globalCompositeOperation = 'source-in';
    ctxTempCollar.fillStyle = jQuery('#collar-color').val();
    ctxTempCollar.fillRect(0, 0, tempCanvasCollar.width, tempCanvasCollar.height);
    ctxTempCollar.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainCollar.drawImage(tempCanvasCollar, 0, 0);
  };
  // Collar


  // Collar shadow
  let mainCanvasCollar_shadow = document.getElementById('temp-back-main-preview');
  let ctxMainCollar_shadow = mainCanvasCollar_shadow.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar_shadow = document.createElement('canvas');
  tempCanvasCollar_shadow.width = mainCanvasCollar_shadow.width;
  tempCanvasCollar_shadow.height = mainCanvasCollar_shadow.height;
  let ctxTempCollar_shadow = tempCanvasCollar_shadow.getContext('2d');

  let imageSrcCollar_shadow = jQuery('.choosenone').attr('back-collar-shadow');
  let imageCollar_shadow = new Image();
  imageCollar_shadow.src = imageSrcCollar_shadow;
  imageCollar_shadow.onload = function() {
    ctxTempCollar_shadow.drawImage(imageCollar_shadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainCollar_shadow.drawImage(tempCanvasCollar_shadow, 0, 0);
  };
  // Collar shadow
  
  
  // Shoulder
  let mainCanvasShoulder = document.getElementById('temp-back-main-preview');
  let ctxMainShoulder = mainCanvasShoulder.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasShoulder = document.createElement('canvas');
  tempCanvasShoulder.width = mainCanvasShoulder.width;
  tempCanvasShoulder.height = mainCanvasShoulder.height;
  let ctxTempShoulder = tempCanvasShoulder.getContext('2d');

  let imageObj1 = new Image();
  imageObj1.src = jQuery('.choosenShoulder').attr('back-narrow-shoulder');
  imageObj1.onload = function() {
    ctxTempShoulder.drawImage(imageObj1, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempShoulder.globalCompositeOperation = 'source-in';
    ctxTempShoulder.fillStyle = jQuery('#shoulder-color').val();
    ctxTempShoulder.fillRect(0, 0, tempCanvasShoulder.width, tempCanvasShoulder.height);
    ctxTempShoulder.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainShoulder.drawImage(tempCanvasShoulder, 0, 0);
  };
  // Shoulder
  
  
  // Stripes
  let mainCanvas = document.getElementById('temp-back-main-preview');
  let ctxMain = mainCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvas = document.createElement('canvas');
  tempCanvas.width = mainCanvas.width;
  tempCanvas.height = mainCanvas.height;
  let ctxTemp = tempCanvas.getContext('2d');
  let imageSrc = jQuery('.choosenStripe').attr('back-stripe');
  let image = new Image();
  image.src = imageSrc;
  image.onload = function() {
    ctxTemp.drawImage(image, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTemp.globalCompositeOperation = 'source-in';
    ctxTemp.fillStyle = jQuery('#stripes-color').val();
    ctxTemp.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    ctxTemp.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMain.drawImage(tempCanvas, 0, 0);
  };
  // Stripes
  };
}
//////// Temp Back Side ////////


//////// Temp Right Side ////////

function tempRightSide(){

  let mainCanvas1 = document.getElementById('temp-rightside-main-preview');
  let ctxMain1 = mainCanvas1.getContext('2d');
  ctxMain1.clearRect(0, 0, mainCanvas1.width, mainCanvas1.height);
  
  //Main body
  let mainBody = document.getElementById('temp-rightside-main-preview');
  let ctxmainBody = mainBody.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasBody = document.createElement('canvas');
  tempCanvasBody.width = mainBody.width;
  tempCanvasBody.height = mainBody.height;
  let ctxTempBody = tempCanvasBody.getContext('2d');

  let imageSrcBody = jQuery('#rightside-preview').attr('src');
  let imageBody = new Image();
  imageBody.src = imageSrcBody;
  imageBody.onload = function() {
    ctxTempBody.drawImage(imageBody, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempBody.globalCompositeOperation = 'source-in';
    ctxTempBody.fillStyle = jQuery('#main-color').val();
    ctxTempBody.fillRect(0, 0, tempCanvasBody.width, tempCanvasBody.height);
    ctxTempBody.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxmainBody.drawImage(tempCanvasBody, 0, 0);
  //Main body


  // Main body shadow
  let mainShadowCanvas = document.getElementById('temp-rightside-main-preview');
  let ctxMainShadow = mainShadowCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempShadowCanvas = document.createElement('canvas');
  tempShadowCanvas.width = mainShadowCanvas.width;
  tempShadowCanvas.height = mainShadowCanvas.height;
  let ctxTempShadow = tempShadowCanvas.getContext('2d');

  let imageSrcShadow = jQuery('#rightside-shadow-preview').attr('src');
  let imageShadow = new Image();
  imageShadow.src = imageSrcShadow;
  imageShadow.onload = function() {
    ctxTempShadow.drawImage(imageShadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainShadow.drawImage(tempShadowCanvas, 0, 0);
  };
  // Main body shadow

  
  // Collar
  let mainCanvasCollar = document.getElementById('temp-rightside-main-preview');
  let ctxMainCollar = mainCanvasCollar.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar = document.createElement('canvas');
  tempCanvasCollar.width = mainCanvasCollar.width;
  tempCanvasCollar.height = mainCanvasCollar.height;
  let ctxTempCollar = tempCanvasCollar.getContext('2d');

  let imageSrcCollar = jQuery('.choosenone').attr('rightside-collar');
  let imageCollar = new Image();
  imageCollar.src = imageSrcCollar;
  imageCollar.onload = function() {
    ctxTempCollar.drawImage(imageCollar, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempCollar.globalCompositeOperation = 'source-in';
    ctxTempCollar.fillStyle = jQuery('#collar-color').val();
    ctxTempCollar.fillRect(0, 0, tempCanvasCollar.width, tempCanvasCollar.height);
    ctxTempCollar.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainCollar.drawImage(tempCanvasCollar, 0, 0);
  };
  // Collar
  
  
  // Shoulder
  let mainCanvasShoulder = document.getElementById('temp-rightside-main-preview');
  let ctxMainShoulder = mainCanvasShoulder.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasShoulder = document.createElement('canvas');
  tempCanvasShoulder.width = mainCanvasShoulder.width;
  tempCanvasShoulder.height = mainCanvasShoulder.height;
  let ctxTempShoulder = tempCanvasShoulder.getContext('2d');

  let imageObj1 = new Image();
  imageObj1.src = jQuery('.choosenShoulder').attr('rightside-shoulder');
  imageObj1.onload = function() {
    ctxTempShoulder.drawImage(imageObj1, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempShoulder.globalCompositeOperation = 'source-in';
    ctxTempShoulder.fillStyle = jQuery('#shoulder-color').val();
    ctxTempShoulder.fillRect(0, 0, tempCanvasShoulder.width, tempCanvasShoulder.height);
    ctxTempShoulder.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainShoulder.drawImage(tempCanvasShoulder, 0, 0);
  };
  // Shoulder
  
  
  // Stripes
  let mainCanvas = document.getElementById('temp-rightside-main-preview');
  let ctxMain = mainCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvas = document.createElement('canvas');
  tempCanvas.width = mainCanvas.width;
  tempCanvas.height = mainCanvas.height;
  let ctxTemp = tempCanvas.getContext('2d');

  let imageObj2 = new Image();
  imageObj2.src = jQuery('.choosenStripe').attr('rightside-stripe');
  imageObj2.onload = function() {
  ctxTemp.drawImage(imageObj2, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTemp.globalCompositeOperation = 'source-in';
    ctxTemp.fillStyle = jQuery('#stripes-color').val();
    ctxTemp.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    ctxTemp.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMain.drawImage(tempCanvas, 0, 0);
  };
  // Stripes
  };
}

//////// Temp Right Side ////////


//////// Temp Left Side ////////

function tempLeftSide(){

  let mainCanvas1 = document.getElementById('temp-leftside-main-preview');
  let ctxMain1 = mainCanvas1.getContext('2d');
  ctxMain1.clearRect(0, 0, mainCanvas1.width, mainCanvas1.height);
  
  //Main body
  let mainBody = document.getElementById('temp-leftside-main-preview');
  let ctxmainBody = mainBody.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasBody = document.createElement('canvas');
  tempCanvasBody.width = mainBody.width;
  tempCanvasBody.height = mainBody.height;
  let ctxTempBody = tempCanvasBody.getContext('2d');

  let imageSrcBody = jQuery('#leftside-preview').attr('src');
  let imageBody = new Image();
  imageBody.src = imageSrcBody;
  imageBody.onload = function() {
    ctxTempBody.drawImage(imageBody, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempBody.globalCompositeOperation = 'source-in';
    ctxTempBody.fillStyle = jQuery('#main-color').val();
    ctxTempBody.fillRect(0, 0, tempCanvasBody.width, tempCanvasBody.height);
    ctxTempBody.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxmainBody.drawImage(tempCanvasBody, 0, 0);
  //Main body


  // Main body shadow
  let mainShadowCanvas = document.getElementById('temp-leftside-main-preview');
  let ctxMainShadow = mainShadowCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempShadowCanvas = document.createElement('canvas');
  tempShadowCanvas.width = mainShadowCanvas.width;
  tempShadowCanvas.height = mainShadowCanvas.height;
  let ctxTempShadow = tempShadowCanvas.getContext('2d');

  let imageSrcShadow = jQuery('#leftside-shadow-preview').attr('src');
  let imageShadow = new Image();
  imageShadow.src = imageSrcShadow;
  imageShadow.onload = function() {
    ctxTempShadow.drawImage(imageShadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainShadow.drawImage(tempShadowCanvas, 0, 0);
  };
  // Main body shadow
  
    
  // Collar
  let mainCanvasCollar = document.getElementById('temp-leftside-main-preview');
  let ctxMainCollar = mainCanvasCollar.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar = document.createElement('canvas');
  tempCanvasCollar.width = mainCanvasCollar.width;
  tempCanvasCollar.height = mainCanvasCollar.height;
  let ctxTempCollar = tempCanvasCollar.getContext('2d');

  let imageSrcCollar = jQuery('.choosenone').attr('leftside-collar');
  let imageCollar = new Image();
  imageCollar.src = imageSrcCollar;
  imageCollar.onload = function() {
    ctxTempCollar.drawImage(imageCollar, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempCollar.globalCompositeOperation = 'source-in';
    ctxTempCollar.fillStyle = jQuery('#collar-color').val();
    ctxTempCollar.fillRect(0, 0, tempCanvasCollar.width, tempCanvasCollar.height);
    ctxTempCollar.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainCollar.drawImage(tempCanvasCollar, 0, 0);
  };
  // Collar
    
    
  // Shoulder
  let mainCanvasShoulder = document.getElementById('temp-leftside-main-preview');
  let ctxMainShoulder = mainCanvasShoulder.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasShoulder = document.createElement('canvas');
  tempCanvasShoulder.width = mainCanvasShoulder.width;
  tempCanvasShoulder.height = mainCanvasShoulder.height;
  let ctxTempShoulder = tempCanvasShoulder.getContext('2d');

  let imageObj1 = new Image();
  imageObj1.src = jQuery('.choosenShoulder').attr('leftside-shoulder');
  imageObj1.onload = function() {
    ctxTempShoulder.drawImage(imageObj1, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempShoulder.globalCompositeOperation = 'source-in';
    ctxTempShoulder.fillStyle = jQuery('#shoulder-color').val();
    ctxTempShoulder.fillRect(0, 0, tempCanvasShoulder.width, tempCanvasShoulder.height);
    ctxTempShoulder.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainShoulder.drawImage(tempCanvasShoulder, 0, 0);
  };
  // Shoulder
    
    
  // Stripes
  let mainCanvas = document.getElementById('temp-leftside-main-preview');
  let ctxMain = mainCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvas = document.createElement('canvas');
  tempCanvas.width = mainCanvas.width;
  tempCanvas.height = mainCanvas.height;
  let ctxTemp = tempCanvas.getContext('2d');

    let imageObj2 = new Image();
    imageObj2.src = jQuery('.choosenStripe').attr('leftside-stripe');
    imageObj2.onload = function() {
    ctxTemp.drawImage(imageObj2, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTemp.globalCompositeOperation = 'source-in';
    ctxTemp.fillStyle = jQuery('#stripes-color').val();
    ctxTemp.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    ctxTemp.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMain.drawImage(tempCanvas, 0, 0);
    };
  // Stripes
  };
}

//////// Temp Left Side ////////


//////// Temp No Cut Right Side ////////

function tempNoCutrightSide(){

  let mainCanvas1 = document.getElementById('temp-nocut-rightside-main-preview');
  let ctxMain1 = mainCanvas1.getContext('2d');
  ctxMain1.clearRect(0, 0, mainCanvas1.width, mainCanvas1.height);
  
  //Main body
  let mainBody = document.getElementById('temp-nocut-rightside-main-preview');
  let ctxmainBody = mainBody.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasBody = document.createElement('canvas');
  tempCanvasBody.width = mainBody.width;
  tempCanvasBody.height = mainBody.height;
  let ctxTempBody = tempCanvasBody.getContext('2d');

  let imageSrcBody = jQuery('#noCut-rightside-preview').attr('src');
  let imageBody = new Image();
  imageBody.src = imageSrcBody;
  imageBody.onload = function() {
    ctxTempBody.drawImage(imageBody, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempBody.globalCompositeOperation = 'source-in';
    ctxTempBody.fillStyle = jQuery('#main-color').val();
    ctxTempBody.fillRect(0, 0, tempCanvasBody.width, tempCanvasBody.height);
    ctxTempBody.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxmainBody.drawImage(tempCanvasBody, 0, 0);
  //Main body


  // Main body shadow
  let mainShadowCanvas = document.getElementById('temp-nocut-rightside-main-preview');
  let ctxMainShadow = mainShadowCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempShadowCanvas = document.createElement('canvas');
  tempShadowCanvas.width = mainShadowCanvas.width;
  tempShadowCanvas.height = mainShadowCanvas.height;
  let ctxTempShadow = tempShadowCanvas.getContext('2d');

  let imageSrcShadow = jQuery('#noCut-rightside-shadow-preview').attr('src');
  let imageShadow = new Image();
  imageShadow.src = imageSrcShadow;
  imageShadow.onload = function() {
    ctxTempShadow.drawImage(imageShadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainShadow.drawImage(tempShadowCanvas, 0, 0);
  };
  // Main body shadow

  
  // Collar
  let mainCanvasCollar = document.getElementById('temp-nocut-rightside-main-preview');
  let ctxMainCollar = mainCanvasCollar.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar = document.createElement('canvas');
  tempCanvasCollar.width = mainCanvasCollar.width;
  tempCanvasCollar.height = mainCanvasCollar.height;
  let ctxTempCollar = tempCanvasCollar.getContext('2d');

  let imageSrcCollar = jQuery('.choosenone').attr('rightside-collar');
  let imageCollar = new Image();
  imageCollar.src = imageSrcCollar;
  imageCollar.onload = function() {
    ctxTempCollar.drawImage(imageCollar, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempCollar.globalCompositeOperation = 'source-in';
    ctxTempCollar.fillStyle = jQuery('#collar-color').val();
    ctxTempCollar.fillRect(0, 0, tempCanvasCollar.width, tempCanvasCollar.height);
    ctxTempCollar.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainCollar.drawImage(tempCanvasCollar, 0, 0);
  };
  // Collar
  
  
  // Shoulder
  let mainCanvasShoulder = document.getElementById('temp-nocut-rightside-main-preview');
  let ctxMainShoulder = mainCanvasShoulder.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasShoulder = document.createElement('canvas');
  tempCanvasShoulder.width = mainCanvasShoulder.width;
  tempCanvasShoulder.height = mainCanvasShoulder.height;
  let ctxTempShoulder = tempCanvasShoulder.getContext('2d');

  let imageObj1 = new Image();
  imageObj1.src = jQuery('.choosenShoulder').attr('rightside-shoulder');
  imageObj1.onload = function() {
    ctxTempShoulder.drawImage(imageObj1, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempShoulder.globalCompositeOperation = 'source-in';
    ctxTempShoulder.fillStyle = jQuery('#shoulder-color').val();
    ctxTempShoulder.fillRect(0, 0, tempCanvasShoulder.width, tempCanvasShoulder.height);
    ctxTempShoulder.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainShoulder.drawImage(tempCanvasShoulder, 0, 0);
  };
  // Shoulder
  
  
  // Stripes
  let mainCanvas = document.getElementById('temp-nocut-rightside-main-preview');
  let ctxMain = mainCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvas = document.createElement('canvas');
  tempCanvas.width = mainCanvas.width;
  tempCanvas.height = mainCanvas.height;
  let ctxTemp = tempCanvas.getContext('2d');

  let imageObj2 = new Image();
  imageObj2.src = jQuery('.choosenStripe').attr('rightside-stripe');
  imageObj2.onload = function() {
  ctxTemp.drawImage(imageObj2, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTemp.globalCompositeOperation = 'source-in';
    ctxTemp.fillStyle = jQuery('#stripes-color').val();
    ctxTemp.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    ctxTemp.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMain.drawImage(tempCanvas, 0, 0);
  };
  // Stripes
  };
}

//////// Temp No Cut Right Side ////////


//////// Temp No Cut Left Side ////////

function tempNoCutleftSide(){

  let mainCanvas1 = document.getElementById('temp-nocut-leftside-main-preview');
  let ctxMain1 = mainCanvas1.getContext('2d');
  ctxMain1.clearRect(0, 0, mainCanvas1.width, mainCanvas1.height);
  
  //Main body
  let mainBody = document.getElementById('temp-nocut-leftside-main-preview');
  let ctxmainBody = mainBody.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasBody = document.createElement('canvas');
  tempCanvasBody.width = mainBody.width;
  tempCanvasBody.height = mainBody.height;
  let ctxTempBody = tempCanvasBody.getContext('2d');

  let imageSrcBody = jQuery('#noCut-leftside-preview').attr('src');
  let imageBody = new Image();
  imageBody.src = imageSrcBody;
  imageBody.onload = function() {
    ctxTempBody.drawImage(imageBody, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempBody.globalCompositeOperation = 'source-in';
    ctxTempBody.fillStyle = jQuery('#main-color').val();
    ctxTempBody.fillRect(0, 0, tempCanvasBody.width, tempCanvasBody.height);
    ctxTempBody.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxmainBody.drawImage(tempCanvasBody, 0, 0);
  //Main body


  // Main body shadow
  let mainShadowCanvas = document.getElementById('temp-nocut-leftside-main-preview');
  let ctxMainShadow = mainShadowCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempShadowCanvas = document.createElement('canvas');
  tempShadowCanvas.width = mainShadowCanvas.width;
  tempShadowCanvas.height = mainShadowCanvas.height;
  let ctxTempShadow = tempShadowCanvas.getContext('2d');

  let imageSrcShadow = jQuery('#noCut-leftside-shadow-preview').attr('src');
  let imageShadow = new Image();
  imageShadow.src = imageSrcShadow;
  imageShadow.onload = function() {
    ctxTempShadow.drawImage(imageShadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainShadow.drawImage(tempShadowCanvas, 0, 0);
  };
  // Main body shadow

      
  // Collar
  let mainCanvasCollar = document.getElementById('temp-nocut-leftside-main-preview');
  let ctxMainCollar = mainCanvasCollar.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar = document.createElement('canvas');
  tempCanvasCollar.width = mainCanvasCollar.width;
  tempCanvasCollar.height = mainCanvasCollar.height;
  let ctxTempCollar = tempCanvasCollar.getContext('2d');

  let imageSrcCollar = jQuery('.choosenone').attr('leftside-collar');
  let imageCollar = new Image();
  imageCollar.src = imageSrcCollar;
  imageCollar.onload = function() {
    ctxTempCollar.drawImage(imageCollar, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempCollar.globalCompositeOperation = 'source-in';
    ctxTempCollar.fillStyle = jQuery('#collar-color').val();
    ctxTempCollar.fillRect(0, 0, tempCanvasCollar.width, tempCanvasCollar.height);
    ctxTempCollar.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainCollar.drawImage(tempCanvasCollar, 0, 0);
  };
  // Collar
    
    
  // Shoulder
  let mainCanvasShoulder = document.getElementById('temp-nocut-leftside-main-preview');
  let ctxMainShoulder = mainCanvasShoulder.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasShoulder = document.createElement('canvas');
  tempCanvasShoulder.width = mainCanvasShoulder.width;
  tempCanvasShoulder.height = mainCanvasShoulder.height;
  let ctxTempShoulder = tempCanvasShoulder.getContext('2d');

  let imageObj1 = new Image();
  imageObj1.src = jQuery('.choosenShoulder').attr('leftside-shoulder');
  imageObj1.onload = function() {
    ctxTempShoulder.drawImage(imageObj1, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempShoulder.globalCompositeOperation = 'source-in';
    ctxTempShoulder.fillStyle = jQuery('#shoulder-color').val();
    ctxTempShoulder.fillRect(0, 0, tempCanvasShoulder.width, tempCanvasShoulder.height);
    ctxTempShoulder.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainShoulder.drawImage(tempCanvasShoulder, 0, 0);
  };
  // Shoulder
    
    
  // Stripes
  let mainCanvas = document.getElementById('temp-nocut-leftside-main-preview');
  let ctxMain = mainCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvas = document.createElement('canvas');
  tempCanvas.width = mainCanvas.width;
  tempCanvas.height = mainCanvas.height;
  let ctxTemp = tempCanvas.getContext('2d');

    let imageObj2 = new Image();
    imageObj2.src = jQuery('.choosenStripe').attr('leftside-stripe');
    imageObj2.onload = function() {
    ctxTemp.drawImage(imageObj2, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTemp.globalCompositeOperation = 'source-in';
    ctxTemp.fillStyle = jQuery('#stripes-color').val();
    ctxTemp.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    ctxTemp.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMain.drawImage(tempCanvas, 0, 0);
    };
  // Stripes
  };
}

//////// Temp No Cut Left Side ////////


//////// Temp Front side with Wide Shoulder ////////

function tempWidefrontShoulder(){
  
  let mainCanvas1 = document.getElementById('temp-frontside-wideShoulder-preview');
  let ctxMain1 = mainCanvas1.getContext('2d');
  ctxMain1.clearRect(0, 0, mainCanvas1.width, mainCanvas1.height);


  //Main body
  let mainBody = document.getElementById('temp-frontside-wideShoulder-preview');
  let ctxmainBody = mainBody.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasBody = document.createElement('canvas');
  tempCanvasBody.width = mainBody.width;
  tempCanvasBody.height = mainBody.height;
  let ctxTempBody = tempCanvasBody.getContext('2d');

  let imageSrcBody = jQuery('#frontside-wideShoulder-preview').attr('src');
  let imageBody = new Image();
  imageBody.src = imageSrcBody;
  imageBody.onload = function() {
    ctxTempBody.drawImage(imageBody, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempBody.globalCompositeOperation = 'source-in';
    ctxTempBody.fillStyle = jQuery('#main-color').val();
    ctxTempBody.fillRect(0, 0, tempCanvasBody.width, tempCanvasBody.height);
    ctxTempBody.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxmainBody.drawImage(tempCanvasBody, 0, 0);
  //Main body


  // Main body shadow
  let mainShadowCanvas = document.getElementById('temp-frontside-wideShoulder-preview');
  let ctxMainShadow = mainShadowCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempShadowCanvas = document.createElement('canvas');
  tempShadowCanvas.width = mainShadowCanvas.width;
  tempShadowCanvas.height = mainShadowCanvas.height;
  let ctxTempShadow = tempShadowCanvas.getContext('2d');

  let imageSrcShadow = jQuery('#frontside-wideShoulder-shadow-preview').attr('src');
  let imageShadow = new Image();
  imageShadow.src = imageSrcShadow;
  imageShadow.onload = function() {
    ctxTempShadow.drawImage(imageShadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainShadow.drawImage(tempShadowCanvas, 0, 0);
  };
  // Main body shadow


  // Collar
  let mainCanvasCollar = document.getElementById('temp-frontside-wideShoulder-preview');
  let ctxMainCollar = mainCanvasCollar.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar = document.createElement('canvas');
  tempCanvasCollar.width = mainCanvasCollar.width;
  tempCanvasCollar.height = mainCanvasCollar.height;
  let ctxTempCollar = tempCanvasCollar.getContext('2d');

  let imageSrcCollar = jQuery('.choosenone').attr('front-collar');
  let imageCollar = new Image();
  imageCollar.src = imageSrcCollar;
  imageCollar.onload = function() {
    ctxTempCollar.drawImage(imageCollar, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempCollar.globalCompositeOperation = 'source-in';
    ctxTempCollar.fillStyle = jQuery('#collar-color').val();
    ctxTempCollar.fillRect(0, 0, tempCanvasCollar.width, tempCanvasCollar.height);
    ctxTempCollar.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainCollar.drawImage(tempCanvasCollar, 0, 0);
  };
  // Collar


  // Collar shadow
  let mainCanvasCollar_shadow = document.getElementById('temp-frontside-wideShoulder-preview');
  let ctxMainCollar_shadow = mainCanvasCollar_shadow.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar_shadow = document.createElement('canvas');
  tempCanvasCollar_shadow.width = mainCanvasCollar_shadow.width;
  tempCanvasCollar_shadow.height = mainCanvasCollar_shadow.height;
  let ctxTempCollar_shadow = tempCanvasCollar_shadow.getContext('2d');

  let imageSrcCollar_shadow = jQuery('.choosenone').attr('front-collar-shadow');
  let imageCollar_shadow = new Image();
  imageCollar_shadow.src = imageSrcCollar_shadow;
  imageCollar_shadow.onload = function() {
    ctxTempCollar_shadow.drawImage(imageCollar_shadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainCollar_shadow.drawImage(tempCanvasCollar_shadow, 0, 0);
  };
  // Collar shadow


  // Collar Layer
  let mainCanvasCollarLayer = document.getElementById('temp-frontside-wideShoulder-preview');
  let ctxMainCollarLayer = mainCanvasCollarLayer.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollarLayer = document.createElement('canvas');
  tempCanvasCollarLayer.width = mainCanvasCollarLayer.width;
  tempCanvasCollarLayer.height = mainCanvasCollarLayer.height;
  let ctxTempCollarLayer = tempCanvasCollarLayer.getContext('2d');

  let imageSrcCollarLayer = jQuery('.choosenone').attr('collar-layer');
  let imageCollarLayer = new Image();
  imageCollarLayer.src = imageSrcCollarLayer;
  imageCollarLayer.onload = function() {
    ctxTempCollarLayer.drawImage(imageCollarLayer, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempCollarLayer.globalCompositeOperation = 'source-in';
    ctxTempCollarLayer.fillStyle = jQuery('#collar-layer-color').val();
    ctxTempCollarLayer.fillRect(0, 0, tempCanvasCollarLayer.width, tempCanvasCollarLayer.height);
    ctxTempCollarLayer.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainCollarLayer.drawImage(tempCanvasCollarLayer, 0, 0);
  };
  // Collar Layer


  // Shoulder
  let mainCanvasShoulder = document.getElementById('temp-frontside-wideShoulder-preview');
  let ctxMainShoulder = mainCanvasShoulder.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasShoulder = document.createElement('canvas');
  tempCanvasShoulder.width = mainCanvasShoulder.width;
  tempCanvasShoulder.height = mainCanvasShoulder.height;
  let ctxTempShoulder = tempCanvasShoulder.getContext('2d');

  let imageObj1 = new Image();
  imageObj1.src = jQuery('.choosenShoulder').attr('front-wide-shoulder');
  imageObj1.onload = function() {
    ctxTempShoulder.drawImage(imageObj1, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempShoulder.globalCompositeOperation = 'source-in';
    ctxTempShoulder.fillStyle = jQuery('#shoulder-color').val();
    ctxTempShoulder.fillRect(0, 0, tempCanvasShoulder.width, tempCanvasShoulder.height);
    ctxTempShoulder.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainShoulder.drawImage(tempCanvasShoulder, 0, 0);
  };
  // Shoulder


  // Stripes
  let mainCanvas = document.getElementById('temp-frontside-wideShoulder-preview');
  let ctxMain = mainCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvas = document.createElement('canvas');
  tempCanvas.width = mainCanvas.width;
  tempCanvas.height = mainCanvas.height;
  let ctxTemp = tempCanvas.getContext('2d');

  let imageSrc = jQuery('.choosenStripe').attr('front-stripe');
  let image = new Image();
  image.src = imageSrc;
  image.onload = function() {
    ctxTemp.drawImage(image, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTemp.globalCompositeOperation = 'source-in';
    ctxTemp.fillStyle = jQuery('#stripes-color').val();
    ctxTemp.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    ctxTemp.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMain.drawImage(tempCanvas, 0, 0);
  };
  // Stripes
  };
}

//////// Temp Front side with Wide Shoulder ////////


//////// Temp Back side with Wide Shoulder ////////

function tempWidebackShoulder(){
    
  let mainCanvas1 = document.getElementById('temp-backside-wideShoulder-preview');
  let ctxMain1 = mainCanvas1.getContext('2d');
  ctxMain1.clearRect(0, 0, mainCanvas1.width, mainCanvas1.height);


  //Main body
  let mainBody = document.getElementById('temp-backside-wideShoulder-preview');
  let ctxmainBody = mainBody.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasBody = document.createElement('canvas');
  tempCanvasBody.width = mainBody.width;
  tempCanvasBody.height = mainBody.height;
  let ctxTempBody = tempCanvasBody.getContext('2d');

  let imageSrcBody = jQuery('#backside-wideShoulder-preview').attr('src');
  let imageBody = new Image();
  imageBody.src = imageSrcBody;
  imageBody.onload = function() {
    ctxTempBody.drawImage(imageBody, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempBody.globalCompositeOperation = 'source-in';
    ctxTempBody.fillStyle = jQuery('#main-color').val();
    ctxTempBody.fillRect(0, 0, tempCanvasBody.width, tempCanvasBody.height);
    ctxTempBody.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxmainBody.drawImage(tempCanvasBody, 0, 0);
  //Main body


  // Main body shadow
  let mainShadowCanvas = document.getElementById('temp-backside-wideShoulder-preview');
  let ctxMainShadow = mainShadowCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempShadowCanvas = document.createElement('canvas');
  tempShadowCanvas.width = mainShadowCanvas.width;
  tempShadowCanvas.height = mainShadowCanvas.height;
  let ctxTempShadow = tempShadowCanvas.getContext('2d');

  let imageSrcShadow = jQuery('#backside-wideShoulder-shadow-preview').attr('src');
  let imageShadow = new Image();
  imageShadow.src = imageSrcShadow;
  imageShadow.onload = function() {
    ctxTempShadow.drawImage(imageShadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainShadow.drawImage(tempShadowCanvas, 0, 0);
  };
  // Main body shadow


  // Collar
  let mainCanvasCollar = document.getElementById('temp-backside-wideShoulder-preview');
  let ctxMainCollar = mainCanvasCollar.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar = document.createElement('canvas');
  tempCanvasCollar.width = mainCanvasCollar.width;
  tempCanvasCollar.height = mainCanvasCollar.height;
  let ctxTempCollar = tempCanvasCollar.getContext('2d');

  let imageSrcCollar = jQuery('.choosenone').attr('back-collar');
  let imageCollar = new Image();
  imageCollar.src = imageSrcCollar;
  imageCollar.onload = function() {
    ctxTempCollar.drawImage(imageCollar, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempCollar.globalCompositeOperation = 'source-in';
    ctxTempCollar.fillStyle = jQuery('#collar-color').val();
    ctxTempCollar.fillRect(0, 0, tempCanvasCollar.width, tempCanvasCollar.height);
    ctxTempCollar.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainCollar.drawImage(tempCanvasCollar, 0, 0);
  };
  // Collar


  // Collar shadow
  let mainCanvasCollar_shadow = document.getElementById('temp-backside-wideShoulder-preview');
  let ctxMainCollar_shadow = mainCanvasCollar_shadow.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar_shadow = document.createElement('canvas');
  tempCanvasCollar_shadow.width = mainCanvasCollar_shadow.width;
  tempCanvasCollar_shadow.height = mainCanvasCollar_shadow.height;
  let ctxTempCollar_shadow = tempCanvasCollar_shadow.getContext('2d');

  let imageSrcCollar_shadow = jQuery('.choosenone').attr('back-collar-shadow');
  let imageCollar_shadow = new Image();
  imageCollar_shadow.src = imageSrcCollar_shadow;
  imageCollar_shadow.onload = function() {
    ctxTempCollar_shadow.drawImage(imageCollar_shadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainCollar_shadow.drawImage(tempCanvasCollar_shadow, 0, 0);
  };
  // Collar shadow


  // Shoulder
  let mainCanvasShoulder = document.getElementById('temp-backside-wideShoulder-preview');
  let ctxMainShoulder = mainCanvasShoulder.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasShoulder = document.createElement('canvas');
  tempCanvasShoulder.width = mainCanvasShoulder.width;
  tempCanvasShoulder.height = mainCanvasShoulder.height;
  let ctxTempShoulder = tempCanvasShoulder.getContext('2d');

  let imageObj1 = new Image();
  imageObj1.src = jQuery('.choosenShoulder').attr('back-wide-shoulder');
  imageObj1.onload = function() {
    ctxTempShoulder.drawImage(imageObj1, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempShoulder.globalCompositeOperation = 'source-in';
    ctxTempShoulder.fillStyle = jQuery('#shoulder-color').val();
    ctxTempShoulder.fillRect(0, 0, tempCanvasShoulder.width, tempCanvasShoulder.height);
    ctxTempShoulder.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainShoulder.drawImage(tempCanvasShoulder, 0, 0);
  };
  // Shoulder


  // Stripes
  let mainCanvas = document.getElementById('temp-backside-wideShoulder-preview');
  let ctxMain = mainCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvas = document.createElement('canvas');
  tempCanvas.width = mainCanvas.width;
  tempCanvas.height = mainCanvas.height;
  let ctxTemp = tempCanvas.getContext('2d');

  let imageSrc = jQuery('.choosenStripe').attr('back-stripe');
  let image = new Image();
  image.src = imageSrc;
  image.onload = function() {
    ctxTemp.drawImage(image, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTemp.globalCompositeOperation = 'source-in';
    ctxTemp.fillStyle = jQuery('#stripes-color').val();
    ctxTemp.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    ctxTemp.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMain.drawImage(tempCanvas, 0, 0);
  };
  // Stripes
  };
}

//////// Temp Back side with Wide Shoulder ////////


//////// Front Side ////////
function frontSide(){
  
  let mainCanvas1 = document.getElementById('main-preview');
  let ctxMain1 = mainCanvas1.getContext('2d');
  ctxMain1.clearRect(0, 0, mainCanvas1.width, mainCanvas1.height);


  //Main body
  let mainBody = document.getElementById('main-preview');
  let ctxmainBody = mainBody.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasBody = document.createElement('canvas');
  tempCanvasBody.width = mainBody.width;
  tempCanvasBody.height = mainBody.height;
  let ctxTempBody = tempCanvasBody.getContext('2d');

  let imageSrcBody = jQuery('#static-preview').attr('src');
  let imageBody = new Image();
  imageBody.src = imageSrcBody;
  imageBody.onload = function() {
    ctxTempBody.drawImage(imageBody, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempBody.globalCompositeOperation = 'source-in';
    ctxTempBody.fillStyle = jQuery('#main-color').val();
    ctxTempBody.fillRect(0, 0, tempCanvasBody.width, tempCanvasBody.height);
    ctxTempBody.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxmainBody.drawImage(tempCanvasBody, 0, 0);
  //Main body


  // Main body shadow
  let mainShadowCanvas = document.getElementById('main-preview');
  let ctxMainShadow = mainShadowCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempShadowCanvas = document.createElement('canvas');
  tempShadowCanvas.width = mainShadowCanvas.width;
  tempShadowCanvas.height = mainShadowCanvas.height;
  let ctxTempShadow = tempShadowCanvas.getContext('2d');

  let imageSrcShadow = jQuery('#front-shadow-preview').attr('src');
  let imageShadow = new Image();
  imageShadow.src = imageSrcShadow;
  imageShadow.onload = function() {
    ctxTempShadow.drawImage(imageShadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainShadow.drawImage(tempShadowCanvas, 0, 0);
  };
  // Main body shadow


  // Collar
  let mainCanvasCollar = document.getElementById('main-preview');
  let ctxMainCollar = mainCanvasCollar.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar = document.createElement('canvas');
  tempCanvasCollar.width = mainCanvasCollar.width;
  tempCanvasCollar.height = mainCanvasCollar.height;
  let ctxTempCollar = tempCanvasCollar.getContext('2d');

  let imageSrcCollar = jQuery('.choosenone').attr('front-collar');
  let imageCollar = new Image();
  imageCollar.src = imageSrcCollar;
  imageCollar.onload = function() {
    ctxTempCollar.drawImage(imageCollar, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempCollar.globalCompositeOperation = 'source-in';
    ctxTempCollar.fillStyle = jQuery('#collar-color').val();
    ctxTempCollar.fillRect(0, 0, tempCanvasCollar.width, tempCanvasCollar.height);
    ctxTempCollar.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainCollar.drawImage(tempCanvasCollar, 0, 0);
  };
  // Collar


  // Collar shadow
  let mainCanvasCollar_shadow = document.getElementById('main-preview');
  let ctxMainCollar_shadow = mainCanvasCollar_shadow.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar_shadow = document.createElement('canvas');
  tempCanvasCollar_shadow.width = mainCanvasCollar_shadow.width;
  tempCanvasCollar_shadow.height = mainCanvasCollar_shadow.height;
  let ctxTempCollar_shadow = tempCanvasCollar_shadow.getContext('2d');

  let imageSrcCollar_shadow = jQuery('.choosenone').attr('front-collar-shadow');
  let imageCollar_shadow = new Image();
  imageCollar_shadow.src = imageSrcCollar_shadow;
  imageCollar_shadow.onload = function() {
    ctxTempCollar_shadow.drawImage(imageCollar_shadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainCollar_shadow.drawImage(tempCanvasCollar_shadow, 0, 0);
  };
  // Collar shadow


  // Collar Layer
  let mainCanvasCollarLayer = document.getElementById('main-preview');
  let ctxMainCollarLayer = mainCanvasCollarLayer.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollarLayer = document.createElement('canvas');
  tempCanvasCollarLayer.width = mainCanvasCollarLayer.width;
  tempCanvasCollarLayer.height = mainCanvasCollarLayer.height;
  let ctxTempCollarLayer = tempCanvasCollarLayer.getContext('2d');

  let imageSrcCollarLayer = jQuery('.choosenone').attr('collar-layer');
  let imageCollarLayer = new Image();
  imageCollarLayer.src = imageSrcCollarLayer;
  imageCollarLayer.onload = function() {
    ctxTempCollarLayer.drawImage(imageCollarLayer, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempCollarLayer.globalCompositeOperation = 'source-in';
    ctxTempCollarLayer.fillStyle = jQuery('#collar-layer-color').val();
    ctxTempCollarLayer.fillRect(0, 0, tempCanvasCollarLayer.width, tempCanvasCollarLayer.height);
    ctxTempCollarLayer.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainCollarLayer.drawImage(tempCanvasCollarLayer, 0, 0);
  };
  // Collar Layer


  // Shoulder
  let mainCanvasShoulder = document.getElementById('main-preview');
  let ctxMainShoulder = mainCanvasShoulder.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasShoulder = document.createElement('canvas');
  tempCanvasShoulder.width = mainCanvasShoulder.width;
  tempCanvasShoulder.height = mainCanvasShoulder.height;
  let ctxTempShoulder = tempCanvasShoulder.getContext('2d');

  let imageObj1 = new Image();
  imageObj1.src = jQuery('.choosenShoulder').attr('front-narrow-shoulder');
  imageObj1.onload = function() {
    ctxTempShoulder.drawImage(imageObj1, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempShoulder.globalCompositeOperation = 'source-in';
    ctxTempShoulder.fillStyle = jQuery('#shoulder-color').val();
    ctxTempShoulder.fillRect(0, 0, tempCanvasShoulder.width, tempCanvasShoulder.height);
    ctxTempShoulder.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainShoulder.drawImage(tempCanvasShoulder, 0, 0);
  };
  // Shoulder


  // Stripes
  let mainCanvas = document.getElementById('main-preview');
  let ctxMain = mainCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvas = document.createElement('canvas');
  tempCanvas.width = mainCanvas.width;
  tempCanvas.height = mainCanvas.height;
  let ctxTemp = tempCanvas.getContext('2d');

  let imageSrc = jQuery('.choosenStripe').attr('front-stripe');
  let image = new Image();
  image.src = imageSrc;
  image.onload = function() {
    ctxTemp.drawImage(image, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTemp.globalCompositeOperation = 'source-in';
    ctxTemp.fillStyle = jQuery('#stripes-color').val();
    ctxTemp.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    ctxTemp.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMain.drawImage(tempCanvas, 0, 0);
  };
  // Stripes
  };

  setTimeout(tempFrontSide, 200);
}


//////// Back Side ////////
function backSide(){

  let mainCanvas1 = document.getElementById('main-preview');
  let ctxMain1 = mainCanvas1.getContext('2d');
  ctxMain1.clearRect(0, 0, mainCanvas1.width, mainCanvas1.height);

  
  //Main body
  let mainBody = document.getElementById('main-preview');
  let ctxmainBody = mainBody.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasBody = document.createElement('canvas');
  tempCanvasBody.width = mainBody.width;
  tempCanvasBody.height = mainBody.height;
  let ctxTempBody = tempCanvasBody.getContext('2d');

  let imageSrcBody = jQuery('#back-preview').attr('src');
  let imageBody = new Image();
  imageBody.src = imageSrcBody;
  imageBody.onload = function() {
    ctxTempBody.drawImage(imageBody, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempBody.globalCompositeOperation = 'source-in';
    ctxTempBody.fillStyle = jQuery('#main-color').val();
    ctxTempBody.fillRect(0, 0, tempCanvasBody.width, tempCanvasBody.height);
    ctxTempBody.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxmainBody.drawImage(tempCanvasBody, 0, 0);
  //Main body


  // Main body shadow
  let mainShadowCanvas = document.getElementById('main-preview');
  let ctxMainShadow = mainShadowCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempShadowCanvas = document.createElement('canvas');
  tempShadowCanvas.width = mainShadowCanvas.width;
  tempShadowCanvas.height = mainShadowCanvas.height;
  let ctxTempShadow = tempShadowCanvas.getContext('2d');

  let imageSrcShadow = jQuery('#back-shadow-preview').attr('src');
  let imageShadow = new Image();
  imageShadow.src = imageSrcShadow;
  imageShadow.onload = function() {
    ctxTempShadow.drawImage(imageShadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainShadow.drawImage(tempShadowCanvas, 0, 0);
  };
  // Main body shadow

  
  // Collar
  let mainCanvasCollar = document.getElementById('main-preview');
  let ctxMainCollar = mainCanvasCollar.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar = document.createElement('canvas');
  tempCanvasCollar.width = mainCanvasCollar.width;
  tempCanvasCollar.height = mainCanvasCollar.height;
  let ctxTempCollar = tempCanvasCollar.getContext('2d');

  let imageSrcCollar = jQuery('.choosenone').attr('back-collar');
  let imageCollar = new Image();
  imageCollar.src = imageSrcCollar;
  imageCollar.onload = function() {
    ctxTempCollar.drawImage(imageCollar, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempCollar.globalCompositeOperation = 'source-in';
    ctxTempCollar.fillStyle = jQuery('#collar-color').val();
    ctxTempCollar.fillRect(0, 0, tempCanvasCollar.width, tempCanvasCollar.height);
    ctxTempCollar.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainCollar.drawImage(tempCanvasCollar, 0, 0);
  };
  // Collar


  // Collar shadow
  let mainCanvasCollar_shadow = document.getElementById('main-preview');
  let ctxMainCollar_shadow = mainCanvasCollar_shadow.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar_shadow = document.createElement('canvas');
  tempCanvasCollar_shadow.width = mainCanvasCollar_shadow.width;
  tempCanvasCollar_shadow.height = mainCanvasCollar_shadow.height;
  let ctxTempCollar_shadow = tempCanvasCollar_shadow.getContext('2d');

  let imageSrcCollar_shadow = jQuery('.choosenone').attr('back-collar-shadow');
  let imageCollar_shadow = new Image();
  imageCollar_shadow.src = imageSrcCollar_shadow;
  imageCollar_shadow.onload = function() {
    ctxTempCollar_shadow.drawImage(imageCollar_shadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainCollar_shadow.drawImage(tempCanvasCollar_shadow, 0, 0);
  };
  // Collar shadow
  
  
  // Shoulder
  let mainCanvasShoulder = document.getElementById('main-preview');
  let ctxMainShoulder = mainCanvasShoulder.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasShoulder = document.createElement('canvas');
  tempCanvasShoulder.width = mainCanvasShoulder.width;
  tempCanvasShoulder.height = mainCanvasShoulder.height;
  let ctxTempShoulder = tempCanvasShoulder.getContext('2d');

  let imageObj1 = new Image();
  imageObj1.src = jQuery('.choosenShoulder').attr('back-narrow-shoulder');
  imageObj1.onload = function() {
    ctxTempShoulder.drawImage(imageObj1, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempShoulder.globalCompositeOperation = 'source-in';
    ctxTempShoulder.fillStyle = jQuery('#shoulder-color').val();
    ctxTempShoulder.fillRect(0, 0, tempCanvasShoulder.width, tempCanvasShoulder.height);
    ctxTempShoulder.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainShoulder.drawImage(tempCanvasShoulder, 0, 0);
  };
  // Shoulder
  
  
  // Stripes
  let mainCanvas = document.getElementById('main-preview');
  let ctxMain = mainCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvas = document.createElement('canvas');
  tempCanvas.width = mainCanvas.width;
  tempCanvas.height = mainCanvas.height;
  let ctxTemp = tempCanvas.getContext('2d');
  let imageSrc = jQuery('.choosenStripe').attr('back-stripe');
  let image = new Image();
  image.src = imageSrc;
  image.onload = function() {
    ctxTemp.drawImage(image, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTemp.globalCompositeOperation = 'source-in';
    ctxTemp.fillStyle = jQuery('#stripes-color').val();
    ctxTemp.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    ctxTemp.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMain.drawImage(tempCanvas, 0, 0);
  };
  // Stripes
  };

  setTimeout(tempBackSide, 200);
}


//////// Right Side ////////
function rightSide(){

  let mainCanvas1 = document.getElementById('main-preview');
  let ctxMain1 = mainCanvas1.getContext('2d');
  ctxMain1.clearRect(0, 0, mainCanvas1.width, mainCanvas1.height);
  
  //Main body
  let mainBody = document.getElementById('main-preview');
  let ctxmainBody = mainBody.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasBody = document.createElement('canvas');
  tempCanvasBody.width = mainBody.width;
  tempCanvasBody.height = mainBody.height;
  let ctxTempBody = tempCanvasBody.getContext('2d');

  let imageSrcBody = jQuery('#rightside-preview').attr('src');
  let imageBody = new Image();
  imageBody.src = imageSrcBody;
  imageBody.onload = function() {
    ctxTempBody.drawImage(imageBody, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempBody.globalCompositeOperation = 'source-in';
    ctxTempBody.fillStyle = jQuery('#main-color').val();
    ctxTempBody.fillRect(0, 0, tempCanvasBody.width, tempCanvasBody.height);
    ctxTempBody.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxmainBody.drawImage(tempCanvasBody, 0, 0);
  //Main body


  // Main body shadow
  let mainShadowCanvas = document.getElementById('main-preview');
  let ctxMainShadow = mainShadowCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempShadowCanvas = document.createElement('canvas');
  tempShadowCanvas.width = mainShadowCanvas.width;
  tempShadowCanvas.height = mainShadowCanvas.height;
  let ctxTempShadow = tempShadowCanvas.getContext('2d');

  let imageSrcShadow = jQuery('#rightside-shadow-preview').attr('src');
  let imageShadow = new Image();
  imageShadow.src = imageSrcShadow;
  imageShadow.onload = function() {
    ctxTempShadow.drawImage(imageShadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainShadow.drawImage(tempShadowCanvas, 0, 0);
  };
  // Main body shadow

  
  // Collar
  let mainCanvasCollar = document.getElementById('main-preview');
  let ctxMainCollar = mainCanvasCollar.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar = document.createElement('canvas');
  tempCanvasCollar.width = mainCanvasCollar.width;
  tempCanvasCollar.height = mainCanvasCollar.height;
  let ctxTempCollar = tempCanvasCollar.getContext('2d');

  let imageSrcCollar = jQuery('.choosenone').attr('rightside-collar');
  let imageCollar = new Image();
  imageCollar.src = imageSrcCollar;
  imageCollar.onload = function() {
    ctxTempCollar.drawImage(imageCollar, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempCollar.globalCompositeOperation = 'source-in';
    ctxTempCollar.fillStyle = jQuery('#collar-color').val();
    ctxTempCollar.fillRect(0, 0, tempCanvasCollar.width, tempCanvasCollar.height);
    ctxTempCollar.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainCollar.drawImage(tempCanvasCollar, 0, 0);
  };
  // Collar
  
  
  // Shoulder
  let mainCanvasShoulder = document.getElementById('main-preview');
  let ctxMainShoulder = mainCanvasShoulder.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasShoulder = document.createElement('canvas');
  tempCanvasShoulder.width = mainCanvasShoulder.width;
  tempCanvasShoulder.height = mainCanvasShoulder.height;
  let ctxTempShoulder = tempCanvasShoulder.getContext('2d');

  let imageObj1 = new Image();
  imageObj1.src = jQuery('.choosenShoulder').attr('rightside-shoulder');
  imageObj1.onload = function() {
    ctxTempShoulder.drawImage(imageObj1, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempShoulder.globalCompositeOperation = 'source-in';
    ctxTempShoulder.fillStyle = jQuery('#shoulder-color').val();
    ctxTempShoulder.fillRect(0, 0, tempCanvasShoulder.width, tempCanvasShoulder.height);
    ctxTempShoulder.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainShoulder.drawImage(tempCanvasShoulder, 0, 0);
  };
  // Shoulder
  
  
  // Stripes
  let mainCanvas = document.getElementById('main-preview');
  let ctxMain = mainCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvas = document.createElement('canvas');
  tempCanvas.width = mainCanvas.width;
  tempCanvas.height = mainCanvas.height;
  let ctxTemp = tempCanvas.getContext('2d');

  let imageObj2 = new Image();
  imageObj2.src = jQuery('.choosenStripe').attr('rightside-stripe');
  imageObj2.onload = function() {
  ctxTemp.drawImage(imageObj2, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTemp.globalCompositeOperation = 'source-in';
    ctxTemp.fillStyle = jQuery('#stripes-color').val();
    ctxTemp.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    ctxTemp.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMain.drawImage(tempCanvas, 0, 0);
  };
  // Stripes
  };

   setTimeout(tempRightSide, 200);
}


//////// Left Side ////////
function leftSide(){

  let mainCanvas1 = document.getElementById('main-preview');
  let ctxMain1 = mainCanvas1.getContext('2d');
  ctxMain1.clearRect(0, 0, mainCanvas1.width, mainCanvas1.height);
  
  //Main body
  let mainBody = document.getElementById('main-preview');
  let ctxmainBody = mainBody.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasBody = document.createElement('canvas');
  tempCanvasBody.width = mainBody.width;
  tempCanvasBody.height = mainBody.height;
  let ctxTempBody = tempCanvasBody.getContext('2d');

  let imageSrcBody = jQuery('#leftside-preview').attr('src');
  let imageBody = new Image();
  imageBody.src = imageSrcBody;
  imageBody.onload = function() {
    ctxTempBody.drawImage(imageBody, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempBody.globalCompositeOperation = 'source-in';
    ctxTempBody.fillStyle = jQuery('#main-color').val();
    ctxTempBody.fillRect(0, 0, tempCanvasBody.width, tempCanvasBody.height);
    ctxTempBody.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxmainBody.drawImage(tempCanvasBody, 0, 0);
  //Main body


  // Main body shadow
  let mainShadowCanvas = document.getElementById('main-preview');
  let ctxMainShadow = mainShadowCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempShadowCanvas = document.createElement('canvas');
  tempShadowCanvas.width = mainShadowCanvas.width;
  tempShadowCanvas.height = mainShadowCanvas.height;
  let ctxTempShadow = tempShadowCanvas.getContext('2d');

  let imageSrcShadow = jQuery('#leftside-shadow-preview').attr('src');
  let imageShadow = new Image();
  imageShadow.src = imageSrcShadow;
  imageShadow.onload = function() {
    ctxTempShadow.drawImage(imageShadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainShadow.drawImage(tempShadowCanvas, 0, 0);
  };
  // Main body shadow
  
    
  // Collar
  let mainCanvasCollar = document.getElementById('main-preview');
  let ctxMainCollar = mainCanvasCollar.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar = document.createElement('canvas');
  tempCanvasCollar.width = mainCanvasCollar.width;
  tempCanvasCollar.height = mainCanvasCollar.height;
  let ctxTempCollar = tempCanvasCollar.getContext('2d');

  let imageSrcCollar = jQuery('.choosenone').attr('leftside-collar');
  let imageCollar = new Image();
  imageCollar.src = imageSrcCollar;
  imageCollar.onload = function() {
    ctxTempCollar.drawImage(imageCollar, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempCollar.globalCompositeOperation = 'source-in';
    ctxTempCollar.fillStyle = jQuery('#collar-color').val();
    ctxTempCollar.fillRect(0, 0, tempCanvasCollar.width, tempCanvasCollar.height);
    ctxTempCollar.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainCollar.drawImage(tempCanvasCollar, 0, 0);
  };
  // Collar
    
    
  // Shoulder
  let mainCanvasShoulder = document.getElementById('main-preview');
  let ctxMainShoulder = mainCanvasShoulder.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasShoulder = document.createElement('canvas');
  tempCanvasShoulder.width = mainCanvasShoulder.width;
  tempCanvasShoulder.height = mainCanvasShoulder.height;
  let ctxTempShoulder = tempCanvasShoulder.getContext('2d');

  let imageObj1 = new Image();
  imageObj1.src = jQuery('.choosenShoulder').attr('leftside-shoulder');
  imageObj1.onload = function() {
    ctxTempShoulder.drawImage(imageObj1, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempShoulder.globalCompositeOperation = 'source-in';
    ctxTempShoulder.fillStyle = jQuery('#shoulder-color').val();
    ctxTempShoulder.fillRect(0, 0, tempCanvasShoulder.width, tempCanvasShoulder.height);
    ctxTempShoulder.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainShoulder.drawImage(tempCanvasShoulder, 0, 0);
  };
  // Shoulder
    
    
  // Stripes
  let mainCanvas = document.getElementById('main-preview');
  let ctxMain = mainCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvas = document.createElement('canvas');
  tempCanvas.width = mainCanvas.width;
  tempCanvas.height = mainCanvas.height;
  let ctxTemp = tempCanvas.getContext('2d');

    let imageObj2 = new Image();
    imageObj2.src = jQuery('.choosenStripe').attr('leftside-stripe');
    imageObj2.onload = function() {
    ctxTemp.drawImage(imageObj2, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTemp.globalCompositeOperation = 'source-in';
    ctxTemp.fillStyle = jQuery('#stripes-color').val();
    ctxTemp.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    ctxTemp.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMain.drawImage(tempCanvas, 0, 0);
    };
  // Stripes
  };

   setTimeout(tempLeftSide, 200);
}


//////// No Cut Right Side ////////
function noCutrightSide(){

  let mainCanvas1 = document.getElementById('main-preview');
  let ctxMain1 = mainCanvas1.getContext('2d');
  ctxMain1.clearRect(0, 0, mainCanvas1.width, mainCanvas1.height);
  
  //Main body
  let mainBody = document.getElementById('main-preview');
  let ctxmainBody = mainBody.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasBody = document.createElement('canvas');
  tempCanvasBody.width = mainBody.width;
  tempCanvasBody.height = mainBody.height;
  let ctxTempBody = tempCanvasBody.getContext('2d');

  let imageSrcBody = jQuery('#noCut-rightside-preview').attr('src');
  let imageBody = new Image();
  imageBody.src = imageSrcBody;
  imageBody.onload = function() {
    ctxTempBody.drawImage(imageBody, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempBody.globalCompositeOperation = 'source-in';
    ctxTempBody.fillStyle = jQuery('#main-color').val();
    ctxTempBody.fillRect(0, 0, tempCanvasBody.width, tempCanvasBody.height);
    ctxTempBody.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxmainBody.drawImage(tempCanvasBody, 0, 0);
  //Main body


  // Main body shadow
  let mainShadowCanvas = document.getElementById('main-preview');
  let ctxMainShadow = mainShadowCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempShadowCanvas = document.createElement('canvas');
  tempShadowCanvas.width = mainShadowCanvas.width;
  tempShadowCanvas.height = mainShadowCanvas.height;
  let ctxTempShadow = tempShadowCanvas.getContext('2d');

  let imageSrcShadow = jQuery('#noCut-rightside-shadow-preview').attr('src');
  let imageShadow = new Image();
  imageShadow.src = imageSrcShadow;
  imageShadow.onload = function() {
    ctxTempShadow.drawImage(imageShadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainShadow.drawImage(tempShadowCanvas, 0, 0);
  };
  // Main body shadow

  
  // Collar
  let mainCanvasCollar = document.getElementById('main-preview');
  let ctxMainCollar = mainCanvasCollar.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar = document.createElement('canvas');
  tempCanvasCollar.width = mainCanvasCollar.width;
  tempCanvasCollar.height = mainCanvasCollar.height;
  let ctxTempCollar = tempCanvasCollar.getContext('2d');

  let imageSrcCollar = jQuery('.choosenone').attr('rightside-collar');
  let imageCollar = new Image();
  imageCollar.src = imageSrcCollar;
  imageCollar.onload = function() {
    ctxTempCollar.drawImage(imageCollar, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempCollar.globalCompositeOperation = 'source-in';
    ctxTempCollar.fillStyle = jQuery('#collar-color').val();
    ctxTempCollar.fillRect(0, 0, tempCanvasCollar.width, tempCanvasCollar.height);
    ctxTempCollar.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainCollar.drawImage(tempCanvasCollar, 0, 0);
  };
  // Collar
  
  
  // Shoulder
  let mainCanvasShoulder = document.getElementById('main-preview');
  let ctxMainShoulder = mainCanvasShoulder.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasShoulder = document.createElement('canvas');
  tempCanvasShoulder.width = mainCanvasShoulder.width;
  tempCanvasShoulder.height = mainCanvasShoulder.height;
  let ctxTempShoulder = tempCanvasShoulder.getContext('2d');

  let imageObj1 = new Image();
  imageObj1.src = jQuery('.choosenShoulder').attr('rightside-shoulder');
  imageObj1.onload = function() {
    ctxTempShoulder.drawImage(imageObj1, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempShoulder.globalCompositeOperation = 'source-in';
    ctxTempShoulder.fillStyle = jQuery('#shoulder-color').val();
    ctxTempShoulder.fillRect(0, 0, tempCanvasShoulder.width, tempCanvasShoulder.height);
    ctxTempShoulder.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainShoulder.drawImage(tempCanvasShoulder, 0, 0);
  };
  // Shoulder
  
  
  // Stripes
  let mainCanvas = document.getElementById('main-preview');
  let ctxMain = mainCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvas = document.createElement('canvas');
  tempCanvas.width = mainCanvas.width;
  tempCanvas.height = mainCanvas.height;
  let ctxTemp = tempCanvas.getContext('2d');

  let imageObj2 = new Image();
  imageObj2.src = jQuery('.choosenStripe').attr('rightside-stripe');
  imageObj2.onload = function() {
  ctxTemp.drawImage(imageObj2, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTemp.globalCompositeOperation = 'source-in';
    ctxTemp.fillStyle = jQuery('#stripes-color').val();
    ctxTemp.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    ctxTemp.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMain.drawImage(tempCanvas, 0, 0);
  };
  // Stripes
  };

  setTimeout(tempNoCutrightSide, 200);
}


//////// No Cut Left Side ////////
function noCutleftSide(){

  let mainCanvas1 = document.getElementById('main-preview');
  let ctxMain1 = mainCanvas1.getContext('2d');
  ctxMain1.clearRect(0, 0, mainCanvas1.width, mainCanvas1.height);
  
  //Main body
  let mainBody = document.getElementById('main-preview');
  let ctxmainBody = mainBody.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasBody = document.createElement('canvas');
  tempCanvasBody.width = mainBody.width;
  tempCanvasBody.height = mainBody.height;
  let ctxTempBody = tempCanvasBody.getContext('2d');

  let imageSrcBody = jQuery('#noCut-leftside-preview').attr('src');
  let imageBody = new Image();
  imageBody.src = imageSrcBody;
  imageBody.onload = function() {
    ctxTempBody.drawImage(imageBody, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempBody.globalCompositeOperation = 'source-in';
    ctxTempBody.fillStyle = jQuery('#main-color').val();
    ctxTempBody.fillRect(0, 0, tempCanvasBody.width, tempCanvasBody.height);
    ctxTempBody.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxmainBody.drawImage(tempCanvasBody, 0, 0);
  //Main body


  // Main body shadow
  let mainShadowCanvas = document.getElementById('main-preview');
  let ctxMainShadow = mainShadowCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempShadowCanvas = document.createElement('canvas');
  tempShadowCanvas.width = mainShadowCanvas.width;
  tempShadowCanvas.height = mainShadowCanvas.height;
  let ctxTempShadow = tempShadowCanvas.getContext('2d');

  let imageSrcShadow = jQuery('#noCut-leftside-shadow-preview').attr('src');
  let imageShadow = new Image();
  imageShadow.src = imageSrcShadow;
  imageShadow.onload = function() {
    ctxTempShadow.drawImage(imageShadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainShadow.drawImage(tempShadowCanvas, 0, 0);
  };
  // Main body shadow
  
    
  // Collar
  let mainCanvasCollar = document.getElementById('main-preview');
  let ctxMainCollar = mainCanvasCollar.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar = document.createElement('canvas');
  tempCanvasCollar.width = mainCanvasCollar.width;
  tempCanvasCollar.height = mainCanvasCollar.height;
  let ctxTempCollar = tempCanvasCollar.getContext('2d');

  let imageSrcCollar = jQuery('.choosenone').attr('leftside-collar');
  let imageCollar = new Image();
  imageCollar.src = imageSrcCollar;
  imageCollar.onload = function() {
    ctxTempCollar.drawImage(imageCollar, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempCollar.globalCompositeOperation = 'source-in';
    ctxTempCollar.fillStyle = jQuery('#collar-color').val();
    ctxTempCollar.fillRect(0, 0, tempCanvasCollar.width, tempCanvasCollar.height);
    ctxTempCollar.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainCollar.drawImage(tempCanvasCollar, 0, 0);
  };
  // Collar
    
    
  // Shoulder
  let mainCanvasShoulder = document.getElementById('main-preview');
  let ctxMainShoulder = mainCanvasShoulder.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasShoulder = document.createElement('canvas');
  tempCanvasShoulder.width = mainCanvasShoulder.width;
  tempCanvasShoulder.height = mainCanvasShoulder.height;
  let ctxTempShoulder = tempCanvasShoulder.getContext('2d');

  let imageObj1 = new Image();
  imageObj1.src = jQuery('.choosenShoulder').attr('leftside-shoulder');
  imageObj1.onload = function() {
    ctxTempShoulder.drawImage(imageObj1, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempShoulder.globalCompositeOperation = 'source-in';
    ctxTempShoulder.fillStyle = jQuery('#shoulder-color').val();
    ctxTempShoulder.fillRect(0, 0, tempCanvasShoulder.width, tempCanvasShoulder.height);
    ctxTempShoulder.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainShoulder.drawImage(tempCanvasShoulder, 0, 0);
  };
  // Shoulder
    
    
  // Stripes
  let mainCanvas = document.getElementById('main-preview');
  let ctxMain = mainCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvas = document.createElement('canvas');
  tempCanvas.width = mainCanvas.width;
  tempCanvas.height = mainCanvas.height;
  let ctxTemp = tempCanvas.getContext('2d');

    let imageObj2 = new Image();
    imageObj2.src = jQuery('.choosenStripe').attr('leftside-stripe');
    imageObj2.onload = function() {
    ctxTemp.drawImage(imageObj2, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTemp.globalCompositeOperation = 'source-in';
    ctxTemp.fillStyle = jQuery('#stripes-color').val();
    ctxTemp.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    ctxTemp.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMain.drawImage(tempCanvas, 0, 0);
    };
  // Stripes
  };

  setTimeout(tempNoCutleftSide, 200);
}


//////// Front side with Wide Shoulder ////////
function WidefrontShoulder(){
  
  let mainCanvas1 = document.getElementById('main-preview');
  let ctxMain1 = mainCanvas1.getContext('2d');
  ctxMain1.clearRect(0, 0, mainCanvas1.width, mainCanvas1.height);


  //Main body
  let mainBody = document.getElementById('main-preview');
  let ctxmainBody = mainBody.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasBody = document.createElement('canvas');
  tempCanvasBody.width = mainBody.width;
  tempCanvasBody.height = mainBody.height;
  let ctxTempBody = tempCanvasBody.getContext('2d');

  let imageSrcBody = jQuery('#frontside-wideShoulder-preview').attr('src');
  let imageBody = new Image();
  imageBody.src = imageSrcBody;
  imageBody.onload = function() {
    ctxTempBody.drawImage(imageBody, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempBody.globalCompositeOperation = 'source-in';
    ctxTempBody.fillStyle = jQuery('#main-color').val();
    ctxTempBody.fillRect(0, 0, tempCanvasBody.width, tempCanvasBody.height);
    ctxTempBody.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxmainBody.drawImage(tempCanvasBody, 0, 0);
  //Main body


  // Main body shadow
  let mainShadowCanvas = document.getElementById('main-preview');
  let ctxMainShadow = mainShadowCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempShadowCanvas = document.createElement('canvas');
  tempShadowCanvas.width = mainShadowCanvas.width;
  tempShadowCanvas.height = mainShadowCanvas.height;
  let ctxTempShadow = tempShadowCanvas.getContext('2d');

  let imageSrcShadow = jQuery('#frontside-wideShoulder-shadow-preview').attr('src');
  let imageShadow = new Image();
  imageShadow.src = imageSrcShadow;
  imageShadow.onload = function() {
    ctxTempShadow.drawImage(imageShadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainShadow.drawImage(tempShadowCanvas, 0, 0);
  };
  // Main body shadow


  // Collar
  let mainCanvasCollar = document.getElementById('main-preview');
  let ctxMainCollar = mainCanvasCollar.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar = document.createElement('canvas');
  tempCanvasCollar.width = mainCanvasCollar.width;
  tempCanvasCollar.height = mainCanvasCollar.height;
  let ctxTempCollar = tempCanvasCollar.getContext('2d');

  let imageSrcCollar = jQuery('.choosenone').attr('front-collar');
  let imageCollar = new Image();
  imageCollar.src = imageSrcCollar;
  imageCollar.onload = function() {
    ctxTempCollar.drawImage(imageCollar, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempCollar.globalCompositeOperation = 'source-in';
    ctxTempCollar.fillStyle = jQuery('#collar-color').val();
    ctxTempCollar.fillRect(0, 0, tempCanvasCollar.width, tempCanvasCollar.height);
    ctxTempCollar.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainCollar.drawImage(tempCanvasCollar, 0, 0);
  };
  // Collar


  // Collar shadow
  let mainCanvasCollar_shadow = document.getElementById('main-preview');
  let ctxMainCollar_shadow = mainCanvasCollar_shadow.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar_shadow = document.createElement('canvas');
  tempCanvasCollar_shadow.width = mainCanvasCollar_shadow.width;
  tempCanvasCollar_shadow.height = mainCanvasCollar_shadow.height;
  let ctxTempCollar_shadow = tempCanvasCollar_shadow.getContext('2d');

  let imageSrcCollar_shadow = jQuery('.choosenone').attr('front-collar-shadow');
  let imageCollar_shadow = new Image();
  imageCollar_shadow.src = imageSrcCollar_shadow;
  imageCollar_shadow.onload = function() {
    ctxTempCollar_shadow.drawImage(imageCollar_shadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainCollar_shadow.drawImage(tempCanvasCollar_shadow, 0, 0);
  };
  // Collar shadow


  // Collar Layer
  let mainCanvasCollarLayer = document.getElementById('main-preview');
  let ctxMainCollarLayer = mainCanvasCollarLayer.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollarLayer = document.createElement('canvas');
  tempCanvasCollarLayer.width = mainCanvasCollarLayer.width;
  tempCanvasCollarLayer.height = mainCanvasCollarLayer.height;
  let ctxTempCollarLayer = tempCanvasCollarLayer.getContext('2d');

  let imageSrcCollarLayer = jQuery('.choosenone').attr('collar-layer');
  let imageCollarLayer = new Image();
  imageCollarLayer.src = imageSrcCollarLayer;
  imageCollarLayer.onload = function() {
    ctxTempCollarLayer.drawImage(imageCollarLayer, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempCollarLayer.globalCompositeOperation = 'source-in';
    ctxTempCollarLayer.fillStyle = jQuery('#collar-layer-color').val();
    ctxTempCollarLayer.fillRect(0, 0, tempCanvasCollarLayer.width, tempCanvasCollarLayer.height);
    ctxTempCollarLayer.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainCollarLayer.drawImage(tempCanvasCollarLayer, 0, 0);
  };
  // Collar Layer


  // Shoulder
  let mainCanvasShoulder = document.getElementById('main-preview');
  let ctxMainShoulder = mainCanvasShoulder.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasShoulder = document.createElement('canvas');
  tempCanvasShoulder.width = mainCanvasShoulder.width;
  tempCanvasShoulder.height = mainCanvasShoulder.height;
  let ctxTempShoulder = tempCanvasShoulder.getContext('2d');

  let imageObj1 = new Image();
  imageObj1.src = jQuery('.choosenShoulder').attr('front-wide-shoulder');
  imageObj1.onload = function() {
    ctxTempShoulder.drawImage(imageObj1, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempShoulder.globalCompositeOperation = 'source-in';
    ctxTempShoulder.fillStyle = jQuery('#shoulder-color').val();
    ctxTempShoulder.fillRect(0, 0, tempCanvasShoulder.width, tempCanvasShoulder.height);
    ctxTempShoulder.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainShoulder.drawImage(tempCanvasShoulder, 0, 0);
  };
  // Shoulder


  // Stripes
  let mainCanvas = document.getElementById('main-preview');
  let ctxMain = mainCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvas = document.createElement('canvas');
  tempCanvas.width = mainCanvas.width;
  tempCanvas.height = mainCanvas.height;
  let ctxTemp = tempCanvas.getContext('2d');

  let imageSrc = jQuery('.choosenStripe').attr('front-stripe');
  let image = new Image();
  image.src = imageSrc;
  image.onload = function() {
    ctxTemp.drawImage(image, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTemp.globalCompositeOperation = 'source-in';
    ctxTemp.fillStyle = jQuery('#stripes-color').val();
    ctxTemp.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    ctxTemp.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMain.drawImage(tempCanvas, 0, 0);
  };
  // Stripes
  };

  setTimeout(tempWidefrontShoulder, 200);
}


//////// Back side with Wide Shoulder ////////
function WidebackShoulder(){
    
  let mainCanvas1 = document.getElementById('main-preview');
  let ctxMain1 = mainCanvas1.getContext('2d');
  ctxMain1.clearRect(0, 0, mainCanvas1.width, mainCanvas1.height);


  //Main body
  let mainBody = document.getElementById('main-preview');
  let ctxmainBody = mainBody.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasBody = document.createElement('canvas');
  tempCanvasBody.width = mainBody.width;
  tempCanvasBody.height = mainBody.height;
  let ctxTempBody = tempCanvasBody.getContext('2d');

  let imageSrcBody = jQuery('#backside-wideShoulder-preview').attr('src');
  let imageBody = new Image();
  imageBody.src = imageSrcBody;
  imageBody.onload = function() {
    ctxTempBody.drawImage(imageBody, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempBody.globalCompositeOperation = 'source-in';
    ctxTempBody.fillStyle = jQuery('#main-color').val();
    ctxTempBody.fillRect(0, 0, tempCanvasBody.width, tempCanvasBody.height);
    ctxTempBody.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxmainBody.drawImage(tempCanvasBody, 0, 0);
  //Main body


  // Main body shadow
  let mainShadowCanvas = document.getElementById('main-preview');
  let ctxMainShadow = mainShadowCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempShadowCanvas = document.createElement('canvas');
  tempShadowCanvas.width = mainShadowCanvas.width;
  tempShadowCanvas.height = mainShadowCanvas.height;
  let ctxTempShadow = tempShadowCanvas.getContext('2d');

  let imageSrcShadow = jQuery('#backside-wideShoulder-shadow-preview').attr('src');
  let imageShadow = new Image();
  imageShadow.src = imageSrcShadow;
  imageShadow.onload = function() {
    ctxTempShadow.drawImage(imageShadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainShadow.drawImage(tempShadowCanvas, 0, 0);
  };
  // Main body shadow


  // Collar
  let mainCanvasCollar = document.getElementById('main-preview');
  let ctxMainCollar = mainCanvasCollar.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar = document.createElement('canvas');
  tempCanvasCollar.width = mainCanvasCollar.width;
  tempCanvasCollar.height = mainCanvasCollar.height;
  let ctxTempCollar = tempCanvasCollar.getContext('2d');

  let imageSrcCollar = jQuery('.choosenone').attr('back-collar');
  let imageCollar = new Image();
  imageCollar.src = imageSrcCollar;
  imageCollar.onload = function() {
    ctxTempCollar.drawImage(imageCollar, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempCollar.globalCompositeOperation = 'source-in';
    ctxTempCollar.fillStyle = jQuery('#collar-color').val();
    ctxTempCollar.fillRect(0, 0, tempCanvasCollar.width, tempCanvasCollar.height);
    ctxTempCollar.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainCollar.drawImage(tempCanvasCollar, 0, 0);
  };
  // Collar


  // Collar shadow
  let mainCanvasCollar_shadow = document.getElementById('main-preview');
  let ctxMainCollar_shadow = mainCanvasCollar_shadow.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasCollar_shadow = document.createElement('canvas');
  tempCanvasCollar_shadow.width = mainCanvasCollar_shadow.width;
  tempCanvasCollar_shadow.height = mainCanvasCollar_shadow.height;
  let ctxTempCollar_shadow = tempCanvasCollar_shadow.getContext('2d');

  let imageSrcCollar_shadow = jQuery('.choosenone').attr('back-collar-shadow');
  let imageCollar_shadow = new Image();
  imageCollar_shadow.src = imageSrcCollar_shadow;
  imageCollar_shadow.onload = function() {
    ctxTempCollar_shadow.drawImage(imageCollar_shadow, 0, 0);

    // Draw the modified image onto the main canvas
    ctxMainCollar_shadow.drawImage(tempCanvasCollar_shadow, 0, 0);
  };
  // Collar shadow


  // Shoulder
  let mainCanvasShoulder = document.getElementById('main-preview');
  let ctxMainShoulder = mainCanvasShoulder.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvasShoulder = document.createElement('canvas');
  tempCanvasShoulder.width = mainCanvasShoulder.width;
  tempCanvasShoulder.height = mainCanvasShoulder.height;
  let ctxTempShoulder = tempCanvasShoulder.getContext('2d');

  let imageObj1 = new Image();
  imageObj1.src = jQuery('.choosenShoulder').attr('back-wide-shoulder');
  imageObj1.onload = function() {
    ctxTempShoulder.drawImage(imageObj1, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTempShoulder.globalCompositeOperation = 'source-in';
    ctxTempShoulder.fillStyle = jQuery('#shoulder-color').val();
    ctxTempShoulder.fillRect(0, 0, tempCanvasShoulder.width, tempCanvasShoulder.height);
    ctxTempShoulder.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMainShoulder.drawImage(tempCanvasShoulder, 0, 0);
  };
  // Shoulder


  // Stripes
  let mainCanvas = document.getElementById('main-preview');
  let ctxMain = mainCanvas.getContext('2d');
  
  // Create a temporary canvas
  let tempCanvas = document.createElement('canvas');
  tempCanvas.width = mainCanvas.width;
  tempCanvas.height = mainCanvas.height;
  let ctxTemp = tempCanvas.getContext('2d');

  let imageSrc = jQuery('.choosenStripe').attr('back-stripe');
  let image = new Image();
  image.src = imageSrc;
  image.onload = function() {
    ctxTemp.drawImage(image, 0, 0);

    // Apply the color to the image on the temporary canvas
    ctxTemp.globalCompositeOperation = 'source-in';
    ctxTemp.fillStyle = jQuery('#stripes-color').val();
    ctxTemp.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    ctxTemp.globalCompositeOperation = 'source-over';

    // Draw the modified image onto the main canvas
    ctxMain.drawImage(tempCanvas, 0, 0);
  };
  // Stripes
  };

  setTimeout(tempWidebackShoulder, 200);
}


jQuery(document).ready(function($){

  setTimeout(frontSide, 300);

  setTimeout(tempFrontSide, 300);
  setTimeout(tempBackSide, 300);
  setTimeout(tempLeftSide, 300);
  setTimeout(tempRightSide, 300);

// Reset button functionality for the image

$('#btn-reset').click(function(){

  $('.resize-drag-img').remove();
  $('#chosen-filename').val('');
  $('#browse-image').val('');

});


  $('.grid-container').html('<h4 class="recentColours-heading">Recently selected colors</h4><div class="selected-colors"><div class="color-index first"></div><div class="color-index second"></div><div class="color-index third"></div><div class="color-index fouth"></div><div class="color-index fifth"></div><div class="color-index sixth"></div><div class="color-index seven"></div><div class="color-index eigth"></div><div class="color-index nine"></div><div class="color-index tenth"></div></div> <div class="rest-colors"><div colorid="#F7EA48" class="color-index item1"></div><div colorid="#F7EA49" class="color-index item2"></div><div colorid="#F7EA50" class="color-index item3"></div><div colorid="#F7EA51" class="color-index item4"></div><div colorid="#F7EA52" class="color-index item5"></div><div colorid="#F7EA53" class="color-index item6"></div><div colorid="#F7EA54" class="color-index item7"></div><div colorid="#F7EA55" class="color-index item8"></div><div colorid="#F7EA56" class="color-index item9"></div><div colorid="#F7EA57" class="color-index item10"></div><div colorid="#F7EA58" class="color-index item11"></div><div colorid="#F7EA59" class="color-index item12"></div><div colorid="#F7EA60" class="color-index item13"></div><div colorid="#F7EA61" class="color-index item14"></div><div colorid="#F7EA62" class="color-index item15"></div><div colorid="#F7EA63" class="color-index item16"></div><div colorid="#F7EA64" class="color-index item17"></div><div colorid="#F7EA65" class="color-index item18"></div><div colorid="#F7EA66" class="color-index item19"></div><div colorid="#F7EA67" class="color-index item20"></div><div colorid="#F7EA68" class="color-index item21"></div><div colorid="#F7EA69" class="color-index item22"></div><div colorid="#F7EA70" class="color-index item23"></div><div colorid="#F7EA71" class="color-index item24"></div><div colorid="#DAAA00" class="color-index item25"></div><div colorid="#DAAA01" class="color-index item26"></div><div colorid="#DAAA02" class="color-index item27"></div><div colorid="#DAAA03" class="color-index item28"></div><div colorid="#DAAA04" class="color-index item29"></div><div colorid="#DAAA05" class="color-index item30"></div><div colorid="#DAAA06" class="color-index item31"></div><div colorid="#DAAA07" class="color-index item32"></div><div colorid="#DAAA08" class="color-index item33"></div><div colorid="#DAAA09" class="color-index item34"></div><div colorid="#DAAA10" class="color-index item35"></div><div colorid="#DAAA11" class="color-index item36"></div><div colorid="#DAAA12" class="color-index item37"></div><div colorid="#FFBE9F" class="color-index item62"></div><div colorid="#FFB25B" class="color-index item52"></div><div colorid="#FDAA63" class="color-index item49"></div><div colorid="#FFAE62" class="color-index item56"></div><div colorid="#FF9D6E" class="color-index item63"></div><div colorid="#FFA06A" class="color-index item59"></div><div colorid="#FFA38B" class="color-index item68"></div><div colorid="#FF8674" class="color-index item71"></div><div colorid="#DAAA13" class="color-index item38"></div><div colorid="#DAAA14" class="color-index item39"></div><div colorid="#DAAA15" class="color-index item40"></div><div colorid="#DAAA16" class="color-index item41"></div><div colorid="#DAAA17" class="color-index item42"></div><div colorid="#DAAA18" class="color-index item43"></div><div colorid="#DAAA19" class="color-index item44"></div><div colorid="#DAAA20" class="color-index item45"></div><div colorid="#DAAA21" class="color-index item46"></div><div colorid="#DAAA22" class="color-index item47"></div><div colorid="#DAAA23" class="color-index item48"></div><div colorid="#FF7F41" class="color-index item64"></div><div colorid="#FF6A39" class="color-index item69"></div><div colorid="#FF5C39" class="color-index item72"></div><div colorid="#FF8200" class="color-index item53"></div><div colorid="#FF6900" class="color-index item57"></div><div colorid="#FF6A13" class="color-index item60"></div><div colorid="#FF671F" class="color-index item65"></div><div colorid="#EA7600" class="color-index item50"></div><div colorid="#E57200" class="color-index item54"></div><div colorid="#E87722" class="color-index item55"></div><div colorid="#FE5000" class="color-index item58"></div><div colorid="#FC4C02" class="color-index item70"></div><div colorid="#FA4616" class="color-index item73"></div><div colorid="#E35205" class="color-index item66"></div><div colorid="#D86018" class="color-index item61"></div><div colorid="#BE531C" class="color-index item67"></div><div colorid="#BE4D00" class="color-index item51"></div><div colorid="#ECC7CD" class="color-index item89"></div><div colorid="#F5B6CD" class="color-index item93"></div><div colorid="#FABBCB" class="color-index item84"></div><div colorid="#FFB1BB" class="color-index item77"></div><div colorid="#ECC3B2" class="color-index item75"></div><div colorid="#E8927C" class="color-index item74"></div><div colorid="#FF585D" class="color-index item78"></div><div colorid="#F65275" class="color-index item85"></div><div colorid="#F4364C" class="color-index item82"></div><div colorid="#DF4661" class="color-index item90"></div><div colorid="#E0004D" class="color-index item94"></div><div colorid="#EE2737" class="color-index item80"></div><div colorid="#E03C31" class="color-index item79"></div><div colorid="#DA291C" class="color-index item76"></div><div colorid="#E4002B" class="color-index item86"></div><div colorid="#D22630" class="color-index item81"></div><div colorid="#CB333B" class="color-index item83"></div><div colorid="#BF0D3E" class="color-index item95"></div><div colorid="#D50032" class="color-index item91"></div><div colorid="#C8102E" class="color-index item87"></div><div colorid="#BA0C2F" class="color-index item92"></div><div colorid="#A6192E" class="color-index item88"></div><div colorid="#B04A5A" class="color-index item97"></div><div colorid="#9B2242" class="color-index item98"></div><div colorid="#A50050" class="color-index item106"></div><div colorid="#910048" class="color-index item107"></div><div colorid="#8A1538" class="color-index item102"></div><div colorid="#A50034" class="color-index item103"></div><div colorid="#862633" class="color-index item101"></div><div colorid="#76232F" class="color-index item100"></div><div colorid="#732E4A" class="color-index item109"></div><div colorid="#6F263D" class="color-index item104"></div><div colorid="#782F40" class="color-index item96"></div><div colorid="#651D32" class="color-index item99"></div><div colorid="#7D2248" class="color-index item105"></div><div colorid="#6C1D45" class="color-index item108"></div><div colorid="#672146" class="color-index item112"></div><div colorid="#890C58" class="color-index item111"></div><div colorid="#5E2751" class="color-index item113"></div><div colorid="#502B3A" class="color-index item110"></div><div colorid="#EAD3E2" class="color-index item137"></div><div colorid="#F6B6CD" class="color-index item115"></div><div colorid="#F5B6CD" class="color-index item116"></div><div colorid="#ECB3CB" class="color-index item119"></div><div colorid="#F8A3BC" class="color-index item114"></div><div colorid="#F890A5" class="color-index item118"></div><div colorid="#F99FC9" class="color-index item121"></div><div colorid="#EFBAE1" class="color-index item140"></div><div colorid="#F1A7DC" class="color-index item132"></div><div colorid="#F4A6D7" class="color-index item129"></div><div colorid="#EF95CF" class="color-index item126"></div><div colorid="#D986BA" class="color-index item138"></div><div colorid="#EB6FBD" class="color-index item127"></div><div colorid="#E56DB1" class="color-index item124"></div><div colorid="#C6579A" class="color-index item139"></div><div colorid="#E277CD" class="color-index item135"></div><div colorid="#E45DBF" class="color-index item133"></div><div colorid="#E93CAC" class="color-index item130"></div><div colorid="#DB3EB1" class="color-index item134"></div><div colorid="#C800A1" class="color-index item136"></div><div colorid="#D539B5" class="color-index item141"></div><div colorid="#F04E98" class="color-index item122"></div><div colorid="#EF4A81" class="color-index item117"></div><div colorid="#E0457B" class="color-index item120"></div><div colorid="#CE0F69" class="color-index item123"></div><div colorid="#D0006F" class="color-index item128"></div><div colorid="#DA1884" class="color-index item125"></div><div colorid="#C6007E" class="color-index item131"></div><div colorid="#EAB8E4" class="color-index item146"></div><div colorid="#E59BDC" class="color-index item145"></div><div colorid="#DD7FD3" class="color-index item147"></div><div colorid="#E7BAE4" class="color-index item151"></div><div colorid="#C964CF" class="color-index item152"></div><div colorid="#AF1685" class="color-index item142"></div><div colorid="#BB16A3" class="color-index item148"></div><div colorid="#A51890" class="color-index item149"></div><div colorid="#981D97" class="color-index item153"></div><div colorid="#E2ACD7" class="color-index item154"></div><div colorid="#C1A7E2" class="color-index item173"></div><div colorid="#C98BDB" class="color-index item157"></div><div colorid="#B580D1" class="color-index item162"></div><div colorid="#C6A1CF" class="color-index item165"></div><div colorid="#A57FB2" class="color-index item160"></div><div colorid="#933291" class="color-index item155"></div><div colorid="#87189D" class="color-index item158"></div><div colorid="#8031A7" class="color-index item163"></div><div colorid="#702F8A" class="color-index item164"></div><div colorid="#8C4799" class="color-index item166"></div><div colorid="#84329B" class="color-index item168"></div><div colorid="#8246AF" class="color-index item170"></div><div colorid="#753BBD" class="color-index item174"></div><div colorid="#5C068C" class="color-index item171"></div><div colorid="#C5B4E3" class="color-index item176"></div><div colorid="#9678D3" class="color-index item177"></div><div colorid="#80276C" class="color-index item150"></div><div colorid="#80225F" class="color-index item143"></div><div colorid="#840B55" class="color-index item144"></div><div colorid="#653165" class="color-index item159"></div><div colorid="#5F2167" class="color-index item169"></div><div colorid="#59315F" class="color-index item161"></div><div colorid="#612C51" class="color-index item156"></div><div colorid="#51284F" class="color-index item167"></div><div colorid="#5F259F" class="color-index item175"></div><div colorid="#470A68" class="color-index item172"></div><div colorid="#330072" class="color-index item178"></div><div colorid="#C5CFDA" class="color-index item187"></div><div colorid="#D1DDE6" class="color-index item190"></div><div colorid="#C3D7EE" class="color-index item195"></div><div colorid="#8E9FBC" class="color-index item188"></div><div colorid="#94A9CB" class="color-index item205"></div><div colorid="#7DA1C4" class="color-index item191"></div><div colorid="#92C1E9" class="color-index item200"></div><div colorid="#7BA4DB" class="color-index item193"></div><div colorid="#B4B5DF" class="color-index item179"></div><div colorid="#878CB4" class="color-index item184"></div><div colorid="#7474C1" class="color-index item180"></div><div colorid="#7566A0" class="color-index item185"></div><div colorid="#68478D" class="color-index item186"></div><div colorid="#280071" class="color-index item182"></div><div colorid="#201547" class="color-index item183"></div><div colorid="#201747" class="color-index item181"></div><div colorid="#A4DBE8" class="color-index item214"></div><div colorid="#6AD1E3" class="color-index item217"></div><div colorid="#71C5E8" class="color-index item208"></div><div colorid="#00B5E2" class="color-index item215"></div><div colorid="#00A3E0" class="color-index item209"></div><div colorid="#00A9E0" class="color-index item212"></div><div colorid="#0082BA" class="color-index item216"></div><div colorid="#0092BC" class="color-index item218"></div><div colorid="#007FA3" class="color-index item219"></div><div colorid="#004757" class="color-index item196"></div><div colorid="#0077C8" class="color-index item213"></div><div colorid="#005EB8" class="color-index item210"></div><div colorid="#004B87" class="color-index item211"></div><div colorid="#1D4F91" class="color-index item206"></div><div colorid="#1D428A" class="color-index item207"></div><div colorid="#0033A0" class="color-index item201"></div><div colorid="#171C8F" class="color-index item197"></div><div colorid="#001A70" class="color-index item194"></div><div colorid="#001871" class="color-index item198"></div><div colorid="#001A72" class="color-index item199"></div><div colorid="#012169" class="color-index item202"></div><div colorid="#002554" class="color-index item192"></div><div colorid="#1F2A44" class="color-index item189"></div><div colorid="#041E42" class="color-index item203"></div><div colorid="#0C2340" class="color-index item204"></div><div colorid="#9CDBD9" class="color-index item229"></div><div colorid="#88DBDF" class="color-index item226"></div><div colorid="#71DBD4" class="color-index item233"></div><div colorid="#68D2E9" class="color-index item220"></div><div colorid="#B5E3D8" class="color-index item242"></div><div colorid="#A7E6D7" class="color-index item250"></div><div colorid="#00BFB3" class="color-index item234"></div><div colorid="#00B2A9" class="color-index item230"></div><div colorid="#64CDB8" class="color-index item237"></div><div colorid="#6BCABA" class="color-index item243"></div><div colorid="#00AEC7" class="color-index item221"></div><div colorid="#00778B" class="color-index item222"></div><div colorid="#00A7B5" class="color-index item224"></div><div colorid="#007D8A" class="color-index item225"></div><div colorid="#009CA6" class="color-index item227"></div><div colorid="#007377" class="color-index item228"></div><div colorid="#007367" class="color-index item231"></div><div colorid="#008578" class="color-index item235"></div><div colorid="#004F59" class="color-index item223"></div><div colorid="#00534C" class="color-index item232"></div><div colorid="#004C45" class="color-index item236"></div><div colorid="#ADCAB8" class="color-index item246"></div><div colorid="#85B09A" class="color-index item247"></div><div colorid="#3CDBC0" class="color-index item251"></div><div colorid="#00B388" class="color-index item254"></div><div colorid="#009B77" class="color-index item238"></div><div colorid="#008264" class="color-index item239"></div><div colorid="#006A52" class="color-index item240"></div><div colorid="#00816D" class="color-index item244"></div><div colorid="#28724F" class="color-index item248"></div><div colorid="#009775" class="color-index item252"></div><div colorid="#00664F" class="color-index item253"></div><div colorid="#007A53" class="color-index item255"></div><div colorid="#1E4638" class="color-index item241"></div><div colorid="#173F35" class="color-index item245"></div><div colorid="#284734" class="color-index item249"></div><div colorid="#115740" class="color-index item256"></div><div colorid="#154734" class="color-index item257"></div><div colorid="#154734" class="color-index item261"></div><div colorid="#2C5234" class="color-index item265"></div><div colorid="#215732" class="color-index item268"></div><div colorid="#A0DAB3" class="color-index item262"></div><div colorid="#7AE1BF" class="color-index item258"></div><div colorid="#71CC98" class="color-index item263"></div><div colorid="#00C389" class="color-index item259"></div><div colorid="#26D07C" class="color-index item269"></div><div colorid="#00B140" class="color-index item266"></div><div colorid="#00843D" class="color-index item264"></div><div colorid="#007A33" class="color-index item267"></div><div colorid="#007749" class="color-index item260"></div><div colorid="#009F4D" class="color-index item270"></div><div colorid="#00573F" class="color-index item271"></div><div colorid="#4B9560" class="color-index item272"></div><div colorid="#007A3E" class="color-index item273"></div><div colorid="#286140" class="color-index item274"></div><div colorid="#6BA539" class="color-index item275"></div><div colorid="#319B42" class="color-index item276"></div><div colorid="#44883E" class="color-index item277"></div><div colorid="#44693D" class="color-index item278"></div><div colorid="#ADDC91" class="color-index item279"></div><div colorid="#6CC24A" class="color-index item280"></div><div colorid="#509E2F" class="color-index item281"></div><div colorid="#4A7729" class="color-index item282"></div><div colorid="#8EDD65" class="color-index item283"></div><div colorid="#74AA50" class="color-index item284"></div><div colorid="#D4EB8E" class="color-index item285"></div><div colorid="#97D700" class="color-index item286"></div><div colorid="#84BD00" class="color-index item287"></div><div colorid="#658D1B" class="color-index item289"></div><div colorid="#59621D" class="color-index item288"></div><div colorid="#546223" class="color-index item290"></div><div colorid="#F1EB9C" class="color-index item298"></div><div colorid="#F0EC74" class="color-index item294"></div><div colorid="#E2E868" class="color-index item291"></div><div colorid="#F3EA5D" class="color-index item296"></div><div colorid="#EDE04B" class="color-index item299"></div><div colorid="#ECE81A" class="color-index item295"></div><div colorid="#EEDC00" class="color-index item297"></div><div colorid="#E1CD00" class="color-index item301"></div><div colorid="#C4D600" class="color-index item292"></div><div colorid="#BFB800" class="color-index item300"></div><div colorid="#C4B000" class="color-index item303"></div><div colorid="#9A8700" class="color-index item302"></div><div colorid="#949300" class="color-index item293"></div><div colorid="#897630" class="color-index item305"></div><div colorid="#695B24" class="color-index item304"></div><div colorid="#675E33" class="color-index item306"></div><div colorid="#FCD299" class="color-index item307"></div><div colorid="#F0BF9B" class="color-index item313"></div><div colorid="#E59E6D" class="color-index item314"></div><div colorid="#D6A461" class="color-index item308"></div><div colorid="#C88242" class="color-index item310"></div><div colorid="#B77729" class="color-index item309"></div><div colorid="#A45A2A" class="color-index item315"></div><div colorid="#934D11" class="color-index item311"></div><div colorid="#7D3F16" class="color-index item312"></div><div colorid="#E0C09F" class="color-index item316"></div><div colorid="#CDA077" class="color-index item317"></div><div colorid="#D7C4B7" class="color-index item322"></div><div colorid="#AE8A79" class="color-index item323"></div><div colorid="#6D4F47" class="color-index item320"></div><div colorid="#5E4B3C" class="color-index item321"></div><div colorid="#623412" class="color-index item318"></div><div colorid="#703F2A" class="color-index item325"></div><div colorid="#BA5826" class="color-index item327"></div><div colorid="#9E5330" class="color-index item328"></div><div colorid="#5C4738" class="color-index item329"></div><div colorid="#5C3D31" class="color-index item330"></div><div colorid="#8B4720" class="color-index item331"></div><div colorid="#C05131" class="color-index item332"></div><div colorid="#D69A2D" class="color-index item334"></div><div colorid="#CD7925" class="color-index item335"></div><div colorid="#73531D" class="color-index item337"></div><div colorid="#4E3629" class="color-index item326"></div><div colorid="#674736" class="color-index item333"></div><div colorid="#775135" class="color-index item336"></div><div colorid="#7C4D3A" class="color-index item324"></div><div colorid="#99552B" class="color-index item319"></div><div colorid="#4B3D2A" class="color-index item338"></div><div colorid="#D0D0CE" class="color-index item339"></div><div colorid="#BBBCBC" class="color-index item340"></div><div colorid="#A7A8AA" class="color-index item341"></div><div colorid="#888B8D" class="color-index item342"></div><div colorid="#63666A" class="color-index item343"></div><div colorid="#53565A" class="color-index item344"></div></div>');

 $('.grid-container').hide();
 $('.neckColor2').hide();

$('.neckimg').click(function(){

  let neckStyle = $(this).attr('id');

  if(neckStyle == "N2" || neckStyle == "N4" || neckStyle == "N12"){
 
   $('.neckColor2').show();
 
  }else{
   $('.neckColor2').hide();
  }

});


 $("#text-bend-front").change(function() {

  $('#resize-drag3').removeClass();

  let settext = jQuery(this).val();
  let fontstyle = $('#resize-drag3').attr('font-id');
  let text_bendCheck = $('#resize-drag3').text();

  if(settext.length <= '15'){
    if(settext == 'gravity')
    {
      let word = $('#text-string3').val();
      let len = word.length;
      var modified = "";
      for (var i = 0; i < len; i++) {
        modified += "<span class='gravity'>" + word[i] + "</span>";
      }
      $('#resize-drag3').addClass('gv-2-'+len);
      $('#resize-drag3').html(modified);

      $('.gravity', '#resize-drag3').css("font-family", fontstyle);
    } 
    else if(settext == 'trajectory')
    {
      let word = $('#text-string3').val();
      let len = word.length;
      var modified = "";
      for (var i = 0; i < len; i++) {
        modified += "<span class='trajectory'>" + word[i] + "</span>";
      }
      $('#resize-drag3').addClass('tj-4-'+len);
      $('#resize-drag3').html(modified);

      $('.trajectory', '#resize-drag3').css("font-family", fontstyle);
    } 
    else if(settext == 'straight-line')
    {
      let word = $('#text-string3').val();
      let len = word.length;
      var modified = "";
      for (var i = 0; i < len; i++) {
        modified += "<span class='straight-line'>" + word[i] + "</span>";
      }
      $('#resize-drag3').addClass('sl-1-'+len);
      $('#resize-drag3').html(modified);

      $('.straight-line', '#resize-drag3').css("font-family", fontstyle);
    } 
    else if(settext == 'full-rev-arc')
    {
      let word = $('#text-string3').val();
      let len = word.length;
      var modified = "";
      for (var i = 0; i < len; i++) {
        modified += "<span class='full-rev-arc'>" + word[i] + "</span>";
      }
      $('#resize-drag3').addClass('fs-3-'+len);
      $('#resize-drag3').html(modified);

      $('.full-rev-arc', '#resize-drag3').css("font-family", fontstyle);
    } 
    else if(settext == 'vertical-arc')
    {
      let word = $('#text-string3').val();
      let len = word.length;
      var modified = "";
      for (var i = 0; i < len; i++) {
        modified += "<span class='vertical-arc'>" + word[i] + "</span>";
      }
      $('#resize-drag3').addClass('va-5-'+len);
      $('#resize-drag3').html(modified);

      $('.vertical-arc', '#resize-drag3').css("font-family", fontstyle);
    }
    else if(settext == 'bottom-vertical')
    {
      let word = $('#text-string3').val();
      let len = word.length;
      var modified = "";
      for (var i = 0; i < len; i++) {
        modified += "<span class='bottom-vertical'>" + word[i] + "</span>";
      }
      $('#resize-drag3').addClass('bv-6-'+len);
      $('#resize-drag3').html(modified);

      $('.bottom-vertical', '#resize-drag3').css("font-family", fontstyle);
    }  
    else if(settext == 'inverse-vertical')
    {
      let word = $('#text-string3').val();
      let len = word.length;
      var modified = "";
      for (var i = 0; i < len; i++) {
        modified += "<span class='inverse-vertical'>" + word[i] + "</span>";
      }
      $('#resize-drag3').addClass('iv-7-'+len);
      $('#resize-drag3').html(modified);

      $('.inverse-vertical', '#resize-drag3').css("font-family", fontstyle);
    }
    else if(settext == 'center-bulge')
    {
      let word = $('#text-string3').val();
      let len = word.length;
      var modified = "";
      for (var i = 0; i < len; i++) {
        modified += "<span class='center-bulge'>" + word[i] + "</span>";
      }
      $('#resize-drag3').addClass('cb-8-'+len);
      $('#resize-drag3').html(modified);

      $('.center-bulge', '#resize-drag3').css("font-family", fontstyle);
    } 
    else if(settext == 'san-diego')
    {
      let word = $('#text-string3').val();
      let len = word.length;
      var modified = "";
      for (var i = 0; i < len; i++) {
        modified += "<span class='san-diego'>" + word[i] + "</span>";
      }
      $('#resize-drag3').addClass('sd-9-'+len);
      $('#resize-drag3').html(modified);

      $('.san-diego', '#resize-drag3').css("font-family", fontstyle);
    } 
    else if(settext == 'half-asleep-arc')
    {
      let word = $('#text-string3').val();
      let len = word.length;
      var modified = "";
      for (var i = 0; i < len; i++) {
        modified += "<span class='half-asleep-arc'>" + word[i] + "</span>";
      }
      $('#resize-drag3').addClass('ha-10-'+len);
      $('#resize-drag3').html(modified);

      $('.half-asleep-arc', '#resize-drag3').css("font-family", fontstyle);
    } 
    else if(settext == 'breathing-in')
    {
      let word = $('#text-string3').val();
      let len = word.length;
      var modified = "";
      for (var i = 0; i < len; i++) {
        modified += "<span class='breathing-in'>" + word[i] + "</span>";
      }
      $('#resize-drag3').addClass('bi-11-'+len);
      $('#resize-drag3').html(modified);

      $('.breathing-in', '#resize-drag3').css("font-family", fontstyle);
    }
    else {
      // $('#resize-drag3').removeClass();
      // $('#resize-drag3').addClass('arc');
      // $('#resize-drag3').addClass(settext);
    }


  } else {
    $('#text-string3').val(text_bendCheck);
  }

  // let selectedItem = jQuery('#resize-drag3').attr('class');
  // let nameby = '';          
  // if(selectedItem == 'arc trajectory')
  // {
  //   nameby = 'rotate(11deg)';
  // }
  // if(selectedItem == 'arc gravity')
  // {
  //   nameby = 'rotate(-11deg)';
  // }
  //  $('#resize-drag3').css('transform', nameby);

});

 $("#text-bend-back").change(function() {

  $('#resize-drag2').removeClass();

  let settext = jQuery(this).val();
  let fontstyle = $('#resize-drag2').attr('font-id');
  let text_bendCheck2 = $('#resize-drag2').text();

  if(settext.length <= '15'){

  if(settext == 'gravity')
    {
      let word = $('#text-string2').val();
      let len = word.length;
      var modified = "";
      for (var i = 0; i < len; i++) {
        modified += "<span class='gravity'>" + word[i] + "</span>";
      }
      $('#resize-drag2').addClass('gv-2-'+len);
      $('#resize-drag2').html(modified);

      $('.gravity', '#resize-drag2').css("font-family", fontstyle);
    } 
    else if(settext == 'trajectory')
    {
      let word = $('#text-string2').val();
      let len = word.length;
      var modified = "";
      for (var i = 0; i < len; i++) {
        modified += "<span class='trajectory'>" + word[i] + "</span>";
      }
      $('#resize-drag2').addClass('tj-4-'+len);
      $('#resize-drag2').html(modified);

      $('.trajectory', '#resize-drag2').css("font-family", fontstyle);
    } 
    else if(settext == 'straight-line')
    {
      let word = $('#text-string2').val();
      let len = word.length;
      var modified = "";
      for (var i = 0; i < len; i++) {
        modified += "<span class='straight-line'>" + word[i] + "</span>";
      }
      $('#resize-drag2').addClass('sl-1-'+len);
      $('#resize-drag2').html(modified);

      $('.straight-line', '#resize-drag2').css("font-family", fontstyle);
    } 
    else if(settext == 'full-rev-arc')
    {
      let word = $('#text-string2').val();
      let len = word.length;
      var modified = "";
      for (var i = 0; i < len; i++) {
        modified += "<span class='full-rev-arc'>" + word[i] + "</span>";
      }
      $('#resize-drag2').addClass('fs-3-'+len);
      $('#resize-drag2').html(modified);

      $('.full-rev-arc', '#resize-drag2').css("font-family", fontstyle);
    }
    else if(settext == 'vertical-arc')
    {
      let word = $('#text-string2').val();
      let len = word.length;
      var modified = "";
      for (var i = 0; i < len; i++) {
        modified += "<span class='vertical-arc'>" + word[i] + "</span>";
      }
      $('#resize-drag2').addClass('va-5-'+len);
      $('#resize-drag2').html(modified);

      $('.vertical-arc', '#resize-drag2').css("font-family", fontstyle);
    } 
    else if(settext == 'bottom-vertical')
    {
      let word = $('#text-string2').val();
      let len = word.length;
      var modified = "";
      for (var i = 0; i < len; i++) {
        modified += "<span class='bottom-vertical'>" + word[i] + "</span>";
      }
      $('#resize-drag2').addClass('bv-6-'+len);
      $('#resize-drag2').html(modified);

      $('.bottom-vertical', '#resize-drag2').css("font-family", fontstyle);
    }  
    else if(settext == 'inverse-vertical')
    {
      let word = $('#text-string2').val();
      let len = word.length;
      var modified = "";
      for (var i = 0; i < len; i++) {
        modified += "<span class='inverse-vertical'>" + word[i] + "</span>";
      }
      $('#resize-drag2').addClass('iv-7-'+len);
      $('#resize-drag2').html(modified);

      $('.inverse-vertical', '#resize-drag2').css("font-family", fontstyle);
    }
    else if(settext == 'center-bulge')
    {
      let word = $('#text-string2').val();
      let len = word.length;
      var modified = "";
      for (var i = 0; i < len; i++) {
        modified += "<span class='center-bulge'>" + word[i] + "</span>";
      }
      $('#resize-drag2').addClass('cb-8-'+len);
      $('#resize-drag2').html(modified);

      $('.center-bulge', '#resize-drag2').css("font-family", fontstyle);
    } 
    else if(settext == 'san-diego')
    {
      let word = $('#text-string2').val();
      let len = word.length;
      var modified = "";
      for (var i = 0; i < len; i++) {
        modified += "<span class='san-diego'>" + word[i] + "</span>";
      }
      $('#resize-drag2').addClass('sd-9-'+len);
      $('#resize-drag2').html(modified);

      $('.san-diego', '#resize-drag2').css("font-family", fontstyle);
    } 
    else if(settext == 'half-asleep-arc')
    {
      let word = $('#text-string2').val();
      let len = word.length;
      var modified = "";
      for (var i = 0; i < len; i++) {
        modified += "<span class='half-asleep-arc'>" + word[i] + "</span>";
      }
      $('#resize-drag2').addClass('ha-10-'+len);
      $('#resize-drag2').html(modified);

      $('.half-asleep-arc', '#resize-drag2').css("font-family", fontstyle);
    } 
    else if(settext == 'breathing-in')
    {
      let word = $('#text-string2').val();
      let len = word.length;
      var modified = "";
      for (var i = 0; i < len; i++) {
        modified += "<span class='breathing-in'>" + word[i] + "</span>";
      }
      $('#resize-drag2').addClass('bi-11-'+len);
      $('#resize-drag2').html(modified);

      $('.breathing-in', '#resize-drag2').css("font-family", fontstyle);
    }
    else {
      // $('#resize-drag2').removeClass();
      // $('#resize-drag2').addClass('arc');
      // $('#resize-drag2').addClass(settext);
    }

  } else {
    $('#text-string2').val(text_bendCheck2);
  }

  // let selectedItem = jQuery('#resize-drag2').attr('class');
  // let nameby = '';          
  // if(selectedItem == 'arc trajectory')
  // {
  //   nameby = 'rotate(11deg)';
  // }
  // if(selectedItem == 'arc gravity')
  // {
  //   nameby = 'rotate(-11deg)';
  // }
  //  $('#resize-drag2').css('transform', nameby);
  
});


 $('#trim-color').click(function(){

  $('#shirt-color').toggle();

  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#neck-layer-color').hide();
  $('#stripe-color2').hide();
  $('#stripe-color3').hide();
  $('#stripe-color4').hide();
  $('#stripe-color5').hide();
  $('#stripe-color6').hide();
  $('#stripe-color7').hide();
  $('#neck-layer-color2').hide();
  $('#neck-layer-color3').hide();
  $('#neck-layer-color4').hide();
  $('#neck-layer-color5').hide();
  $('#jersey-shoulder-layerColor').hide();
  $('#jersey-shoulder-layerColor2').hide();
  $('#jersey-shoulder-layerColor3').hide();
  $('#jersey-shoulder-layerColor4').hide();

 });

 $('#trim-color2').click(function(){

  $('#stripe-color').toggle();

  $('#shirt-color').hide();
  $('#neck-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#neck-layer-color').hide();
  $('#stripe-color2').hide();
  $('#stripe-color3').hide();
  $('#stripe-color4').hide();
  $('#stripe-color5').hide();
  $('#stripe-color6').hide();
  $('#stripe-color7').hide();
  $('#neck-layer-color2').hide();
  $('#neck-layer-color3').hide();
  $('#neck-layer-color4').hide();
  $('#neck-layer-color5').hide();
  $('#jersey-shoulder-layerColor').hide();
  $('#jersey-shoulder-layerColor2').hide();
  $('#jersey-shoulder-layerColor3').hide();
  $('#jersey-shoulder-layerColor4').hide();

 });

 $('#trim-color3').click(function(){

  $('#neck-color').toggle();

  $('#shirt-color').hide();
  $('#stripe-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#neck-layer-color').hide();
  $('#stripe-color2').hide();
  $('#stripe-color3').hide();
  $('#stripe-color4').hide();
  $('#stripe-color5').hide();
  $('#stripe-color6').hide();
  $('#stripe-color7').hide();
  $('#neck-layer-color2').hide();
  $('#neck-layer-color3').hide();
  $('#neck-layer-color4').hide();
  $('#neck-layer-color5').hide();
  $('#jersey-shoulder-layerColor').hide();
  $('#jersey-shoulder-layerColor2').hide();
  $('#jersey-shoulder-layerColor3').hide();
  $('#jersey-shoulder-layerColor4').hide();

 });

 $('#trim-color4').click(function(){

  $('#jersey-shoulder-color').toggle();

  $('#shirt-color').hide();
  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#neck-layer-color').hide();
  $('#stripe-color2').hide();
  $('#stripe-color3').hide();
  $('#stripe-color4').hide();
  $('#stripe-color5').hide();
  $('#stripe-color6').hide();
  $('#stripe-color7').hide();
  $('#neck-layer-color2').hide();
  $('#neck-layer-color3').hide();
  $('#neck-layer-color4').hide();
  $('#neck-layer-color5').hide();
  $('#jersey-shoulder-layerColor').hide();
  $('#jersey-shoulder-layerColor2').hide();
  $('#jersey-shoulder-layerColor3').hide();
  $('#jersey-shoulder-layerColor4').hide();

 });

 $('#trim-color5').click(function(){

  $('#neck-layer-color').toggle();

  $('#shirt-color').hide();
  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#stripe-color2').hide();
  $('#stripe-color3').hide();
  $('#stripe-color4').hide();
  $('#stripe-color5').hide();
  $('#stripe-color6').hide();
  $('#stripe-color7').hide();
  $('#neck-layer-color2').hide();
  $('#neck-layer-color3').hide();
  $('#neck-layer-color4').hide();
  $('#neck-layer-color5').hide();
  $('#jersey-shoulder-layerColor').hide();
  $('#jersey-shoulder-layerColor2').hide();
  $('#jersey-shoulder-layerColor3').hide();
  $('#jersey-shoulder-layerColor4').hide();

 });

// Extra buttons for stripe layer colours

 $('#trim-color6').click(function(){

  $('#stripe-color2').toggle();

  $('#shirt-color').hide();
  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#neck-layer-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#stripe-color3').hide();
  $('#stripe-color4').hide();
  $('#stripe-color5').hide();
  $('#stripe-color6').hide();
  $('#stripe-color7').hide();
  $('#neck-layer-color2').hide();
  $('#neck-layer-color3').hide();
  $('#neck-layer-color4').hide();
  $('#neck-layer-color5').hide();
  $('#jersey-shoulder-layerColor').hide();
  $('#jersey-shoulder-layerColor2').hide();
  $('#jersey-shoulder-layerColor3').hide();
  $('#jersey-shoulder-layerColor4').hide();

 });

 $('#trim-color7').click(function(){

  $('#stripe-color3').toggle();

  $('#shirt-color').hide();
  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#neck-layer-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#stripe-color2').hide();
  $('#stripe-color4').hide();
  $('#stripe-color5').hide();
  $('#stripe-color6').hide();
  $('#stripe-color7').hide();
  $('#neck-layer-color2').hide();
  $('#neck-layer-color3').hide();
  $('#neck-layer-color4').hide();
  $('#neck-layer-color5').hide();
  $('#jersey-shoulder-layerColor').hide();
  $('#jersey-shoulder-layerColor2').hide();
  $('#jersey-shoulder-layerColor3').hide();
  $('#jersey-shoulder-layerColor4').hide();

 });

 $('#trim-color8').click(function(){

  $('#stripe-color4').toggle();

  $('#shirt-color').hide();
  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#neck-layer-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#stripe-color2').hide();
  $('#stripe-color3').hide();
  $('#stripe-color5').hide();
  $('#stripe-color6').hide();
  $('#stripe-color7').hide();
  $('#neck-layer-color2').hide();
  $('#neck-layer-color3').hide();
  $('#neck-layer-color4').hide();
  $('#neck-layer-color5').hide();
  $('#jersey-shoulder-layerColor').hide();
  $('#jersey-shoulder-layerColor2').hide();
  $('#jersey-shoulder-layerColor3').hide();
  $('#jersey-shoulder-layerColor4').hide();

 });

 $('#trim-color9').click(function(){

  $('#stripe-color5').toggle();

  $('#shirt-color').hide();
  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#neck-layer-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#stripe-color2').hide();
  $('#stripe-color3').hide();
  $('#stripe-color4').hide();
  $('#stripe-color6').hide();
  $('#stripe-color7').hide();
  $('#neck-layer-color2').hide();
  $('#neck-layer-color3').hide();
  $('#neck-layer-color4').hide();
  $('#neck-layer-color5').hide();
  $('#jersey-shoulder-layerColor').hide();
  $('#jersey-shoulder-layerColor2').hide();
  $('#jersey-shoulder-layerColor3').hide();
  $('#jersey-shoulder-layerColor4').hide();

 });

 $('#trim-color10').click(function(){

  $('#stripe-color6').toggle();

  $('#shirt-color').hide();
  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#neck-layer-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#stripe-color2').hide();
  $('#stripe-color3').hide();
  $('#stripe-color4').hide();
  $('#stripe-color5').hide();
  $('#stripe-color7').hide();
  $('#neck-layer-color2').hide();
  $('#neck-layer-color3').hide();
  $('#neck-layer-color4').hide();
  $('#neck-layer-color5').hide();
  $('#jersey-shoulder-layerColor').hide();
  $('#jersey-shoulder-layerColor2').hide();
  $('#jersey-shoulder-layerColor3').hide();
  $('#jersey-shoulder-layerColor4').hide();

 });

 $('#trim-color11').click(function(){

  $('#stripe-color7').toggle();

  $('#shirt-color').hide();
  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#neck-layer-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#stripe-color2').hide();
  $('#stripe-color3').hide();
  $('#stripe-color4').hide();
  $('#stripe-color5').hide();
  $('#stripe-color6').hide();
  $('#neck-layer-color2').hide();
  $('#neck-layer-color3').hide();
  $('#neck-layer-color4').hide();
  $('#neck-layer-color5').hide();
  $('#jersey-shoulder-layerColor').hide();
  $('#jersey-shoulder-layerColor2').hide();
  $('#jersey-shoulder-layerColor3').hide();
  $('#jersey-shoulder-layerColor4').hide();

 });


// Extra buttons for neck layer colours

  $('#trim-color12').click(function(){

  $('#neck-layer-color2').toggle();

  $('#shirt-color').hide();
  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#neck-layer-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#stripe-color2').hide();
  $('#stripe-color3').hide();
  $('#stripe-color4').hide();
  $('#stripe-color5').hide();
  $('#stripe-color6').hide();
  $('#stripe-color7').hide();
  $('#neck-layer-color3').hide();
  $('#neck-layer-color4').hide();
  $('#neck-layer-color5').hide();
  $('#jersey-shoulder-layerColor').hide();
  $('#jersey-shoulder-layerColor2').hide();
  $('#jersey-shoulder-layerColor3').hide();
  $('#jersey-shoulder-layerColor4').hide();

  });

  $('#trim-color13').click(function(){

  $('#neck-layer-color3').toggle();

  $('#shirt-color').hide();
  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#neck-layer-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#stripe-color2').hide();
  $('#stripe-color3').hide();
  $('#stripe-color4').hide();
  $('#stripe-color5').hide();
  $('#stripe-color6').hide();
  $('#stripe-color7').hide();
  $('#neck-layer-color2').hide();
  $('#neck-layer-color4').hide();
  $('#neck-layer-color5').hide();
  $('#jersey-shoulder-layerColor').hide();
  $('#jersey-shoulder-layerColor2').hide();
  $('#jersey-shoulder-layerColor3').hide();
  $('#jersey-shoulder-layerColor4').hide();

  });

  $('#trim-color14').click(function(){

  $('#neck-layer-color4').toggle();

  $('#shirt-color').hide();
  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#neck-layer-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#stripe-color2').hide();
  $('#stripe-color3').hide();
  $('#stripe-color4').hide();
  $('#stripe-color5').hide();
  $('#stripe-color6').hide();
  $('#stripe-color7').hide();
  $('#neck-layer-color2').hide();
  $('#neck-layer-color3').hide();
  $('#neck-layer-color5').hide();
  $('#jersey-shoulder-layerColor').hide();
  $('#jersey-shoulder-layerColor2').hide();
  $('#jersey-shoulder-layerColor3').hide();
  $('#jersey-shoulder-layerColor4').hide();

  });

  $('#trim-color15').click(function(){

  $('#neck-layer-color5').toggle();

  $('#shirt-color').hide();
  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#neck-layer-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#stripe-color2').hide();
  $('#stripe-color3').hide();
  $('#stripe-color4').hide();
  $('#stripe-color5').hide();
  $('#stripe-color6').hide();
  $('#stripe-color7').hide();
  $('#neck-layer-color2').hide();
  $('#neck-layer-color3').hide();
  $('#neck-layer-color4').hide();
  $('#jersey-shoulder-layerColor').hide();
  $('#jersey-shoulder-layerColor2').hide();
  $('#jersey-shoulder-layerColor3').hide();
  $('#jersey-shoulder-layerColor4').hide();

  });


// Extra buttons for shoulder layer colours

  $('#trim-color16').click(function(){

  $('#jersey-shoulder-layerColor').toggle();

  $('#shirt-color').hide();
  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#neck-layer-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#stripe-color2').hide();
  $('#stripe-color3').hide();
  $('#stripe-color4').hide();
  $('#stripe-color5').hide();
  $('#stripe-color6').hide();
  $('#stripe-color7').hide();
  $('#neck-layer-color2').hide();
  $('#neck-layer-color3').hide();
  $('#neck-layer-color4').hide();
  $('#neck-layer-color5').hide();
  $('#jersey-shoulder-layerColor2').hide();
  $('#jersey-shoulder-layerColor3').hide();
  $('#jersey-shoulder-layerColor4').hide();

  });

  $('#trim-color17').click(function(){

  $('#jersey-shoulder-layerColor2').toggle();

  $('#shirt-color').hide();
  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#neck-layer-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#stripe-color2').hide();
  $('#stripe-color3').hide();
  $('#stripe-color4').hide();
  $('#stripe-color5').hide();
  $('#stripe-color6').hide();
  $('#stripe-color7').hide();
  $('#neck-layer-color2').hide();
  $('#neck-layer-color3').hide();
  $('#neck-layer-color4').hide();
  $('#neck-layer-color5').hide();
  $('#jersey-shoulder-layerColor').hide();
  $('#jersey-shoulder-layerColor3').hide();
  $('#jersey-shoulder-layerColor4').hide();

  });

  $('#trim-color18').click(function(){

  $('#jersey-shoulder-layerColor3').toggle();

  $('#shirt-color').hide();
  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#neck-layer-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#stripe-color2').hide();
  $('#stripe-color3').hide();
  $('#stripe-color4').hide();
  $('#stripe-color5').hide();
  $('#stripe-color6').hide();
  $('#stripe-color7').hide();
  $('#neck-layer-color2').hide();
  $('#neck-layer-color3').hide();
  $('#neck-layer-color4').hide();
  $('#neck-layer-color5').hide();
  $('#jersey-shoulder-layerColor').hide();
  $('#jersey-shoulder-layerColor2').hide();
  $('#jersey-shoulder-layerColor4').hide();

  });

  $('#trim-color19').click(function(){

  $('#jersey-shoulder-layerColor4').toggle();

  $('#shirt-color').hide();
  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#neck-layer-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#stripe-color2').hide();
  $('#stripe-color3').hide();
  $('#stripe-color4').hide();
  $('#stripe-color5').hide();
  $('#stripe-color6').hide();
  $('#stripe-color7').hide();
  $('#neck-layer-color2').hide();
  $('#neck-layer-color3').hide();
  $('#neck-layer-color4').hide();
  $('#neck-layer-color5').hide();
  $('#jersey-shoulder-layerColor').hide();
  $('#jersey-shoulder-layerColor2').hide();
  $('#jersey-shoulder-layerColor3').hide();

  });


/////// Stripe Layer 2 Colour //////// 

$('.color-index', '#stripe-color2').on('click', function() {

  let color = $(this).attr('colorid');
  
  $("#trim-color6").css("background", color);
  
  $('.color-index').removeClass('active-stripe-layerColor2');
  $(this).addClass('active-stripe-layerColor2');
  
  $('#stripe-color2').hide();
  
  $('#stripes-layer-color2').val(color);
  let selectedItem = jQuery('.activeSide').attr('data-id');
  let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');
  
  if(selectedItem == "front-view"){
    // alert("frontSide");
    if(selectedShoulder == "wide-shoulder"){
  
      setTimeout(WidefrontShoulder, 5);
  
    }else{
  
    setTimeout(frontSide, 5);
  
    }
  }
  
  if(selectedItem == "back-view"){
    // alert("backSide");
    if(selectedShoulder == "wide-shoulder"){
  
      setTimeout(WidebackShoulder, 5);
  
    }else{
  
    setTimeout(backSide, 5);
  
    }
  }
  
  if(selectedItem == "left-view"){
    // alert("leftSide");
    setTimeout(leftSide, 5);
  }
  
  if(selectedItem == "right-view"){
    // alert("rightSide");
    setTimeout(rightSide, 5);
   }
  });


/////// Stripe Layer 3 Colour //////// 

$('.color-index', '#stripe-color3').on('click', function() {

  let color = $(this).attr('colorid');
  
  $("#trim-color7").css("background", color);
  
  $('.color-index').removeClass('active-stripe-layerColor3');
  $(this).addClass('active-stripe-layerColor3');
  
  $('#stripe-color3').hide();
  
  $('#stripes-layer-color3').val(color);
  let selectedItem = jQuery('.activeSide').attr('data-id');
  let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');
  
  if(selectedItem == "front-view"){
    // alert("frontSide");
    if(selectedShoulder == "wide-shoulder"){
  
      setTimeout(WidefrontShoulder, 5);
  
    }else{
  
    setTimeout(frontSide, 5);
  
    }
  }
  
  if(selectedItem == "back-view"){
    // alert("backSide");
    if(selectedShoulder == "wide-shoulder"){
  
      setTimeout(WidebackShoulder, 5);
  
    }else{
  
    setTimeout(backSide, 5);
  
    }
  }
  
  if(selectedItem == "left-view"){
    // alert("leftSide");
    setTimeout(leftSide, 5);
  }
  
  if(selectedItem == "right-view"){
    // alert("rightSide");
    setTimeout(rightSide, 5);
   }
  });


/////// Stripe Layer 4 Colour //////// 

$('.color-index', '#stripe-color4').on('click', function() {

  let color = $(this).attr('colorid');
  
  $("#trim-color8").css("background", color);
  
  $('.color-index').removeClass('active-stripe-layerColor4');
  $(this).addClass('active-stripe-layerColor4');
  
  $('#stripe-color4').hide();
  
  $('#stripes-layer-color4').val(color);
  let selectedItem = jQuery('.activeSide').attr('data-id');
  let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');
  
  if(selectedItem == "front-view"){
    // alert("frontSide");
    if(selectedShoulder == "wide-shoulder"){
  
      setTimeout(WidefrontShoulder, 5);
  
    }else{
  
    setTimeout(frontSide, 5);
  
    }
  }
  
  if(selectedItem == "back-view"){
    // alert("backSide");
    if(selectedShoulder == "wide-shoulder"){
  
      setTimeout(WidebackShoulder, 5);
  
    }else{
  
    setTimeout(backSide, 5);
  
    }
  }
  
  if(selectedItem == "left-view"){
    // alert("leftSide");
    setTimeout(leftSide, 5);
  }
  
  if(selectedItem == "right-view"){
    // alert("rightSide");
    setTimeout(rightSide, 5);
   }
  });


/////// Stripe Layer 5 Colour //////// 

$('.color-index', '#stripe-color5').on('click', function() {

  let color = $(this).attr('colorid');
  
  $("#trim-color9").css("background", color);
  
  $('.color-index').removeClass('active-stripe-layerColor5');
  $(this).addClass('active-stripe-layerColor5');
  
  $('#stripe-color5').hide();
  
  $('#stripes-layer-color5').val(color);
  let selectedItem = jQuery('.activeSide').attr('data-id');
  let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');
  
  if(selectedItem == "front-view"){
    // alert("frontSide");
    if(selectedShoulder == "wide-shoulder"){
  
      setTimeout(WidefrontShoulder, 5);
  
    }else{
  
    setTimeout(frontSide, 5);
  
    }
  }
  
  if(selectedItem == "back-view"){
    // alert("backSide");
    if(selectedShoulder == "wide-shoulder"){
  
      setTimeout(WidebackShoulder, 5);
  
    }else{
  
    setTimeout(backSide, 5);
  
    }
  }
  
  if(selectedItem == "left-view"){
    // alert("leftSide");
    setTimeout(leftSide, 5);
  }
  
  if(selectedItem == "right-view"){
    // alert("rightSide");
    setTimeout(rightSide, 5);
   }
  });


/////// Stripe Layer 6 Colour //////// 

$('.color-index', '#stripe-color6').on('click', function() {

  let color = $(this).attr('colorid');
  
  $("#trim-color10").css("background", color);
  
  $('.color-index').removeClass('active-stripe-layerColor6');
  $(this).addClass('active-stripe-layerColor6');
  
  $('#stripe-color6').hide();
  
  $('#stripes-layer-color6').val(color);
  let selectedItem = jQuery('.activeSide').attr('data-id');
  let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');
  
  if(selectedItem == "front-view"){
    // alert("frontSide");
    if(selectedShoulder == "wide-shoulder"){
  
      setTimeout(WidefrontShoulder, 5);
  
    }else{
  
    setTimeout(frontSide, 5);
  
    }
  }
  
  if(selectedItem == "back-view"){
    // alert("backSide");
    if(selectedShoulder == "wide-shoulder"){
  
      setTimeout(WidebackShoulder, 5);
  
    }else{
  
    setTimeout(backSide, 5);
  
    }
  }
  
  if(selectedItem == "left-view"){
    // alert("leftSide");
    setTimeout(leftSide, 5);
  }
  
  if(selectedItem == "right-view"){
    // alert("rightSide");
    setTimeout(rightSide, 5);
   }
  });


/////// Stripe Layer 7 Colour //////// 

$('.color-index', '#stripe-color7').on('click', function() {

  let color = $(this).attr('colorid');
  
  $("#trim-color11").css("background", color);
  
  $('.color-index').removeClass('active-stripe-layerColor7');
  $(this).addClass('active-stripe-layerColor7');
  
  $('#stripe-color7').hide();
  
  $('#stripes-layer-color7').val(color);
  let selectedItem = jQuery('.activeSide').attr('data-id');
  let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');
  
  if(selectedItem == "front-view"){
    // alert("frontSide");
    if(selectedShoulder == "wide-shoulder"){
  
      setTimeout(WidefrontShoulder, 5);
  
    }else{
  
    setTimeout(frontSide, 5);
  
    }
  }
  
  if(selectedItem == "back-view"){
    // alert("backSide");
    if(selectedShoulder == "wide-shoulder"){
  
      setTimeout(WidebackShoulder, 5);
  
    }else{
  
    setTimeout(backSide, 5);
  
    }
  }
  
  if(selectedItem == "left-view"){
    // alert("leftSide");
    setTimeout(leftSide, 5);
  }
  
  if(selectedItem == "right-view"){
    // alert("rightSide");
    setTimeout(rightSide, 5);
   }
  });




/////// Collar Layer Colour 2 //////// 

$('.color-index', '#neck-layer-color2').on('click', function() {

  let color = $(this).attr('colorid');
  
  $("#trim-color12").css("background", color);
  
  $('.color-index').removeClass('active-collarLayer-Color2');
  $(this).addClass('active-collarLayer-Color2');
  
  $('#neck-layer-color2').hide();
    
    $('#collar-layer-color2').val(color);
    let selectedItem = jQuery('.activeSide').attr('data-id');
    let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');
    
    if(selectedItem == "front-view"){
      // alert("frontSide");
      if(selectedShoulder == "wide-shoulder"){
  
        setTimeout(WidefrontShoulder, 5);
    
      }else{
  
      setTimeout(frontSide, 5);
  
      }
    }
    
    if(selectedItem == "back-view"){
      // alert("backSide");
      if(selectedShoulder == "wide-shoulder"){
  
        setTimeout(WidebackShoulder, 5);
    
      }else{
  
      setTimeout(backSide, 5);
  
      }
    }
    
    if(selectedItem == "left-view"){
      // alert("leftSide");
      setTimeout(leftSide, 5);
    }
    
    if(selectedItem == "right-view"){
      // alert("rightSide");
      setTimeout(rightSide, 5);
     }
    });


/////// Collar Layer Colour 3 //////// 

$('.color-index', '#neck-layer-color3').on('click', function() {

  let color = $(this).attr('colorid');
  
  $("#trim-color13").css("background", color);
  
  $('.color-index').removeClass('active-collarLayer-Color3');
  $(this).addClass('active-collarLayer-Color3');
  
  $('#neck-layer-color3').hide();
    
    $('#collar-layer-color3').val(color);
    let selectedItem = jQuery('.activeSide').attr('data-id');
    let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');
    
    if(selectedItem == "front-view"){
      // alert("frontSide");
      if(selectedShoulder == "wide-shoulder"){
  
        setTimeout(WidefrontShoulder, 5);
    
      }else{
  
      setTimeout(frontSide, 5);
  
      }
    }
    
    if(selectedItem == "back-view"){
      // alert("backSide");
      if(selectedShoulder == "wide-shoulder"){
  
        setTimeout(WidebackShoulder, 5);
    
      }else{
  
      setTimeout(backSide, 5);
  
      }
    }
    
    if(selectedItem == "left-view"){
      // alert("leftSide");
      setTimeout(leftSide, 5);
    }
    
    if(selectedItem == "right-view"){
      // alert("rightSide");
      setTimeout(rightSide, 5);
     }
    });


/////// Collar Layer Colour 4 //////// 

$('.color-index', '#neck-layer-color4').on('click', function() {

  let color = $(this).attr('colorid');
  
  $("#trim-color14").css("background", color);
  
  $('.color-index').removeClass('active-collarLayer-Color4');
  $(this).addClass('active-collarLayer-Color4');
  
  $('#neck-layer-color4').hide();
    
    $('#collar-layer-color4').val(color);
    let selectedItem = jQuery('.activeSide').attr('data-id');
    let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');
    
    if(selectedItem == "front-view"){
      // alert("frontSide");
      if(selectedShoulder == "wide-shoulder"){
  
        setTimeout(WidefrontShoulder, 5);
    
      }else{
  
      setTimeout(frontSide, 5);
  
      }
    }
    
    if(selectedItem == "back-view"){
      // alert("backSide");
      if(selectedShoulder == "wide-shoulder"){
  
        setTimeout(WidebackShoulder, 5);
    
      }else{
  
      setTimeout(backSide, 5);
  
      }
    }
    
    if(selectedItem == "left-view"){
      // alert("leftSide");
      setTimeout(leftSide, 5);
    }
    
    if(selectedItem == "right-view"){
      // alert("rightSide");
      setTimeout(rightSide, 5);
     }
    });


/////// Collar Layer Colour 5 //////// 

$('.color-index', '#neck-layer-color5').on('click', function() {

  let color = $(this).attr('colorid');
  
  $("#trim-color15").css("background", color);
  
  $('.color-index').removeClass('active-collarLayer-Color5');
  $(this).addClass('active-collarLayer-Color5');
  
  $('#neck-layer-color5').hide();
    
    $('#collar-layer-color5').val(color);
    let selectedItem = jQuery('.activeSide').attr('data-id');
    let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');
    
    if(selectedItem == "front-view"){
      // alert("frontSide");
      if(selectedShoulder == "wide-shoulder"){
  
        setTimeout(WidefrontShoulder, 5);
    
      }else{
  
      setTimeout(frontSide, 5);
  
      }
    }
    
    if(selectedItem == "back-view"){
      // alert("backSide");
      if(selectedShoulder == "wide-shoulder"){
  
        setTimeout(WidebackShoulder, 5);
    
      }else{
  
      setTimeout(backSide, 5);
  
      }
    }
    
    if(selectedItem == "left-view"){
      // alert("leftSide");
      setTimeout(leftSide, 5);
    }
    
    if(selectedItem == "right-view"){
      // alert("rightSide");
      setTimeout(rightSide, 5);
     }
    });




/////// Shoulder Layer Colour //////// 

$('.color-index', '#jersey-shoulder-layerColor').on('click', function() {

  let color = $(this).attr('colorid');
  
  $("#trim-color16").css("background", color);
  
  $('.color-index').removeClass('active-shoulder-layerColor');
  $(this).addClass('active-shoulder-layerColor');
  
  $('#jersey-shoulder-layerColor').hide();
  
  $('#shoulder-layer-color').val(color);
  let selectedItem = jQuery('.activeSide').attr('data-id');
  let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');
  
  if(selectedItem == "front-view"){
    // alert("frontSide");
    if(selectedShoulder == "wide-shoulder"){
  
      setTimeout(WidefrontShoulder, 5);
  
    }else{
  
    setTimeout(frontSide, 5);
  
    }
  }
  
  if(selectedItem == "back-view"){
    // alert("backSide");
    if(selectedShoulder == "wide-shoulder"){
  
      setTimeout(WidebackShoulder, 5);
  
    }else{
  
    setTimeout(backSide, 5);
  
    }
  }
  
  if(selectedItem == "left-view"){
    // alert("leftSide");
    setTimeout(leftSide, 5);
  }
  
  if(selectedItem == "right-view"){
    // alert("rightSide");
    setTimeout(rightSide, 5);
   }
  });


/////// Shoulder Layer Colour 2 //////// 

$('.color-index', '#jersey-shoulder-layerColor2').on('click', function() {

  let color = $(this).attr('colorid');
  
  $("#trim-color17").css("background", color);
  
  $('.color-index').removeClass('active-shoulder-layerColor2');
  $(this).addClass('active-shoulder-layerColor2');
  
  $('#jersey-shoulder-layerColor2').hide();
  
  $('#shoulder-layer-color2').val(color);
  let selectedItem = jQuery('.activeSide').attr('data-id');
  let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');
  
  if(selectedItem == "front-view"){
    // alert("frontSide");
    if(selectedShoulder == "wide-shoulder"){
  
      setTimeout(WidefrontShoulder, 5);
  
    }else{
  
    setTimeout(frontSide, 5);
  
    }
  }
  
  if(selectedItem == "back-view"){
    // alert("backSide");
    if(selectedShoulder == "wide-shoulder"){
  
      setTimeout(WidebackShoulder, 5);
  
    }else{
  
    setTimeout(backSide, 5);
  
    }
  }
  
  if(selectedItem == "left-view"){
    // alert("leftSide");
    setTimeout(leftSide, 5);
  }
  
  if(selectedItem == "right-view"){
    // alert("rightSide");
    setTimeout(rightSide, 5);
   }
  });


/////// Shoulder Layer Colour 3 //////// 

$('.color-index', '#jersey-shoulder-layerColor3').on('click', function() {

  let color = $(this).attr('colorid');
  
  $("#trim-color18").css("background", color);
  
  $('.color-index').removeClass('active-shoulder-layerColor3');
  $(this).addClass('active-shoulder-layerColor3');
  
  $('#jersey-shoulder-layerColor3').hide();
  
  $('#shoulder-layer-color3').val(color);
  let selectedItem = jQuery('.activeSide').attr('data-id');
  let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');
  
  if(selectedItem == "front-view"){
    // alert("frontSide");
    if(selectedShoulder == "wide-shoulder"){
  
      setTimeout(WidefrontShoulder, 5);
  
    }else{
  
    setTimeout(frontSide, 5);
  
    }
  }
  
  if(selectedItem == "back-view"){
    // alert("backSide");
    if(selectedShoulder == "wide-shoulder"){
  
      setTimeout(WidebackShoulder, 5);
  
    }else{
  
    setTimeout(backSide, 5);
  
    }
  }
  
  if(selectedItem == "left-view"){
    // alert("leftSide");
    setTimeout(leftSide, 5);
  }
  
  if(selectedItem == "right-view"){
    // alert("rightSide");
    setTimeout(rightSide, 5);
   }
  });


/////// Shoulder Layer Colour 4 //////// 

$('.color-index', '#jersey-shoulder-layerColor4').on('click', function() {

  let color = $(this).attr('colorid');
  
  $("#trim-color19").css("background", color);
  
  $('.color-index').removeClass('active-shoulder-layerColor4');
  $(this).addClass('active-shoulder-layerColor4');
  
  $('#jersey-shoulder-layerColor4').hide();
  
  $('#shoulder-layer-color4').val(color);
  let selectedItem = jQuery('.activeSide').attr('data-id');
  let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');
  
  if(selectedItem == "front-view"){
    // alert("frontSide");
    if(selectedShoulder == "wide-shoulder"){
  
      setTimeout(WidefrontShoulder, 5);
  
    }else{
  
    setTimeout(frontSide, 5);
  
    }
  }
  
  if(selectedItem == "back-view"){
    // alert("backSide");
    if(selectedShoulder == "wide-shoulder"){
  
      setTimeout(WidebackShoulder, 5);
  
    }else{
  
    setTimeout(backSide, 5);
  
    }
  }
  
  if(selectedItem == "left-view"){
    // alert("leftSide");
    setTimeout(leftSide, 5);
  }
  
  if(selectedItem == "right-view"){
    // alert("rightSide");
    setTimeout(rightSide, 5);
   }
  });




 $('#mateteamname').click(function(){

  $('#pnumber-color').toggle();

  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#neck-layer-color').hide();
  $('#tname-color').hide();
  $('#pname-color').hide();
  $('#pnumber-outline-color').hide();
  $('#tname-outline-color').hide();
  $('#pname-outline-color').hide();

 });

 $('#name-number-outline-color').click(function(){

  $('#pnumber-outline-color').toggle();

  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#neck-layer-color').hide();
  $('#pnumber-color').hide();
  $('#tname-color').hide();
  $('#pname-color').hide();
  $('#tname-outline-color').hide();
  $('#pname-outline-color').hide();

 });


 $('#mateteamname2').click(function(){

  $('#pname-color').toggle();

  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#neck-layer-color').hide();
  $('#tname-color').hide();
  $('#pnumber-color').hide();
  $('#pnumber-outline-color').hide();
  $('#tname-outline-color').hide();
  $('#pname-outline-color').hide();

 });

 $('#name-number-outline-color2').click(function(){

  $('#pname-outline-color').toggle();

  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#neck-layer-color').hide();
  $('#pnumber-color').hide();
  $('#tname-color').hide();
  $('#pname-color').hide();
  $('#tname-outline-color').hide();
  $('#pnumber-outline-color').hide();

 });


 $('#mateteamname3').click(function(){

  $('#tname-color').toggle();

  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#neck-layer-color').hide();
  $('#pnumber-color').hide();
  $('#pname-color').hide();
  $('#pnumber-outline-color').hide();
  $('#tname-outline-color').hide();
  $('#pname-outline-color').hide();

 });

 $('#name-number-outline-color3').click(function(){

  $('#tname-outline-color').toggle();

  $('#stripe-color').hide();
  $('#neck-color').hide();
  $('#jersey-shoulder-color').hide();
  $('#neck-layer-color').hide();
  $('#pnumber-color').hide();
  $('#tname-color').hide();
  $('#pname-color').hide();
  $('#pnumber-outline-color').hide();
  $('#pname-outline-color').hide();

 });

/////// Choose Jersey ////////

$(".uniform-details").click(function(){

  $('.uniform-details').removeClass('activeJersey');
  $(this).addClass('activeJersey');

    // frontSide();
    setTimeout(frontSide, 300);

  $('.viewItem').removeClass('activeSide');
  $('[data-id="front-view"]').addClass( 'activeSide' );

});


/////// Choose Shoulder type ////////

$(".shoulderimg").click(function(){

  $('.shoulderimg').removeClass('choosenShoulder');
  $(this).addClass('choosenShoulder');

  $(".shoulderimg").parent().parent().removeClass('highlightShoulder');
  $(this).parent().parent().addClass('highlightShoulder');

  document.getElementById("tcanvas").style.display = "block";
  document.getElementById("tcanvas2").style.display = "none";
  document.getElementById("tcanvas3").style.display = "block";
  document.getElementById("tcanvas4").style.display = "none";
  document.getElementById("tcanvas5").style.display = "block";

  let selectedItem = jQuery('.activeSide').attr('data-id');
  let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');

  if(selectedShoulder == "wide-shoulder"){
  
    setTimeout(tempWidefrontShoulder, 200);
    setTimeout(tempWidebackShoulder, 200);

    $('.viewItem').removeClass('activeSide');
    $('[data-id="front-view"]').addClass( 'activeSide' );

    setTimeout(WidefrontShoulder, 175);

    document.getElementById("temp-front-main-preview").style.display = "none";
    document.getElementById("temp-back-main-preview").style.display = "none";

    document.getElementById("temp-frontside-wideShoulder-preview").style.display = "inline-block";
    document.getElementById("temp-backside-wideShoulder-preview").style.display = "inline-block";

    if(selectedItem == "front-view"){

      $('.viewItem').removeClass('activeSide');
      $('[data-id="front-view"]').addClass( 'activeSide' );

      setTimeout(WidefrontShoulder, 200);

      document.getElementById("tcanvas").style.display = "block";
      document.getElementById("tcanvas2").style.display = "none";
      document.getElementById("tcanvas3").style.display = "block";
      document.getElementById("tcanvas4").style.display = "none";
      document.getElementById("tcanvas5").style.display = "block";

    }

    if(selectedItem == "back-view"){

      $('.viewItem').removeClass('activeSide');
      $('[data-id="back-view"]').addClass( 'activeSide' );

      setTimeout(WidebackShoulder, 200);

      document.getElementById("tcanvas").style.display = "none";
      document.getElementById("tcanvas2").style.display = "block";
      document.getElementById("tcanvas3").style.display = "none";
      document.getElementById("tcanvas4").style.display = "block";
      document.getElementById("tcanvas5").style.display = "none";
      
    }
  }else{

    setTimeout(tempFrontSide, 200);
    setTimeout(tempBackSide, 200);

    $('.viewItem').removeClass('activeSide');
    $('[data-id="front-view"]').addClass( 'activeSide' );

    setTimeout(frontSide, 175);

    document.getElementById("temp-front-main-preview").style.display = "inline-block";
    document.getElementById("temp-back-main-preview").style.display = "inline-block";

    document.getElementById("temp-frontside-wideShoulder-preview").style.display = "none";
    document.getElementById("temp-backside-wideShoulder-preview").style.display = "none";

    if(selectedItem == "front-view"){

      $('.viewItem').removeClass('activeSide');
      $('[data-id="front-view"]').addClass( 'activeSide' );

      setTimeout(frontSide, 200);

      document.getElementById("tcanvas").style.display = "block";
      document.getElementById("tcanvas2").style.display = "none";
      document.getElementById("tcanvas3").style.display = "block";
      document.getElementById("tcanvas4").style.display = "none";
      document.getElementById("tcanvas5").style.display = "block";

    }

    if(selectedItem == "back-view"){

      $('.viewItem').removeClass('activeSide');
      $('[data-id="back-view"]').addClass( 'activeSide' );

      setTimeout(backSide, 200);

      document.getElementById("tcanvas").style.display = "none";
      document.getElementById("tcanvas2").style.display = "block";
      document.getElementById("tcanvas3").style.display = "none";
      document.getElementById("tcanvas4").style.display = "block";
      document.getElementById("tcanvas5").style.display = "none";
      
    }
  }
});


/////// Choose V-Cut and No V-Cut ////////

$(".jersey-cutting").click(function(){

  $('.jersey-cutting').removeClass('active-jerseyCut');
  $(this).addClass('active-jerseyCut');
  
  let selected_JerseyCut = jQuery('.active-jerseyCut').attr('data-id');

  if(selected_JerseyCut == "vCut"){

    $('.viewItem').removeClass('activeSide');
    $('[data-id="left-view"]').addClass('activeSide');

    setTimeout(tempLeftSide, 200);
    setTimeout(tempRightSide, 200);

    setTimeout(leftSide, 200);

    document.getElementById("temp-rightside-main-preview").style.display = "inline-block";
    document.getElementById("temp-leftside-main-preview").style.display = "inline-block";

    document.getElementById("temp-nocut-rightside-main-preview").style.display = "none";
    document.getElementById("temp-nocut-leftside-main-preview").style.display = "none";

    document.getElementById("tcanvas").style.display = "none";
    document.getElementById("tcanvas2").style.display = "none";
    document.getElementById("tcanvas3").style.display = "none";
    document.getElementById("tcanvas4").style.display = "none";
    document.getElementById("tcanvas5").style.display = "none";

  }else{

    $('.viewItem').removeClass('activeSide');
    $('[data-id="left-view"]').addClass('activeSide');

    setTimeout(tempNoCutleftSide, 200);
    setTimeout(tempNoCutrightSide, 200);

    setTimeout(noCutleftSide, 200);

    document.getElementById("temp-rightside-main-preview").style.display = "none";
    document.getElementById("temp-leftside-main-preview").style.display = "none";

    document.getElementById("temp-nocut-rightside-main-preview").style.display = "inline-block";
    document.getElementById("temp-nocut-leftside-main-preview").style.display = "inline-block";

    document.getElementById("tcanvas").style.display = "none";
    document.getElementById("tcanvas2").style.display = "none";
    document.getElementById("tcanvas3").style.display = "none";
    document.getElementById("tcanvas4").style.display = "none";
    document.getElementById("tcanvas5").style.display = "none";

  }
});


/////// Choose Front, Back, Left, Right View ////////

$(".viewItem").click(function(){

  $('.viewItem').removeClass('activeSide');
  $(this).addClass('activeSide');
  
  let selectedItem = jQuery('.activeSide').attr('data-id');
  let selected_JerseyCut = jQuery('.active-jerseyCut').attr('data-id');
  let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');
  
  if(selectedItem == "back-view"){

    if(selectedShoulder == "wide-shoulder"){
   
      setTimeout(WidebackShoulder, 200);

      document.getElementById("tcanvas").style.display = "none";
      document.getElementById("tcanvas2").style.display = "block";
      document.getElementById("tcanvas3").style.display = "none";
      document.getElementById("tcanvas4").style.display = "block";
      document.getElementById("tcanvas5").style.display = "none";

    }else{

      setTimeout(backSide, 200);

      document.getElementById("tcanvas").style.display = "none";
      document.getElementById("tcanvas2").style.display = "block";
      document.getElementById("tcanvas3").style.display = "none";
      document.getElementById("tcanvas4").style.display = "block";
      document.getElementById("tcanvas5").style.display = "none";
    }
  }

  if(selectedItem == "front-view"){

    if(selectedShoulder == "wide-shoulder"){

      setTimeout(WidefrontShoulder, 200);

      document.getElementById("tcanvas").style.display = "block";
      document.getElementById("tcanvas2").style.display = "none";
      document.getElementById("tcanvas3").style.display = "block";
      document.getElementById("tcanvas4").style.display = "none";
      document.getElementById("tcanvas5").style.display = "block";
    }else{
    
    setTimeout(frontSide, 200);
  
    document.getElementById("tcanvas").style.display = "block";
    document.getElementById("tcanvas2").style.display = "none";
    document.getElementById("tcanvas3").style.display = "block";
    document.getElementById("tcanvas4").style.display = "none";
    document.getElementById("tcanvas5").style.display = "block";
  }
}

  if(selectedItem == "right-view"){

    if(selected_JerseyCut == "noCut"){
      
      setTimeout(noCutrightSide, 200);

      document.getElementById("temp-rightside-main-preview").style.display = "none";
      document.getElementById("temp-leftside-main-preview").style.display = "none";
  
      document.getElementById("temp-nocut-rightside-main-preview").style.display = "inline-block";
      document.getElementById("temp-nocut-leftside-main-preview").style.display = "inline-block";
      
      document.getElementById("tcanvas").style.display = "none";
      document.getElementById("tcanvas2").style.display = "none";
      document.getElementById("tcanvas3").style.display = "none";
      document.getElementById("tcanvas4").style.display = "none";
      document.getElementById("tcanvas5").style.display = "none";
    }else{
    
    setTimeout(rightSide, 200);

    document.getElementById("temp-rightside-main-preview").style.display = "inline-block";
    document.getElementById("temp-leftside-main-preview").style.display = "inline-block";

    document.getElementById("temp-nocut-rightside-main-preview").style.display = "none";
    document.getElementById("temp-nocut-leftside-main-preview").style.display = "none";
    
    document.getElementById("tcanvas").style.display = "none";
    document.getElementById("tcanvas2").style.display = "none";
    document.getElementById("tcanvas3").style.display = "none";
    document.getElementById("tcanvas4").style.display = "none";
    document.getElementById("tcanvas5").style.display = "none";
  }
}

  if(selectedItem == "left-view"){

    if(selected_JerseyCut == "noCut"){
      
      setTimeout(noCutleftSide, 200);

      document.getElementById("temp-rightside-main-preview").style.display = "none";
      document.getElementById("temp-leftside-main-preview").style.display = "none";
  
      document.getElementById("temp-nocut-rightside-main-preview").style.display = "inline-block";
      document.getElementById("temp-nocut-leftside-main-preview").style.display = "inline-block";
      
      document.getElementById("tcanvas").style.display = "none";
      document.getElementById("tcanvas2").style.display = "none";
      document.getElementById("tcanvas3").style.display = "none";
      document.getElementById("tcanvas4").style.display = "none";
      document.getElementById("tcanvas5").style.display = "none";
    }else{
     
      setTimeout(leftSide, 200);

      document.getElementById("temp-rightside-main-preview").style.display = "inline-block";
      document.getElementById("temp-leftside-main-preview").style.display = "inline-block";
  
      document.getElementById("temp-nocut-rightside-main-preview").style.display = "none";
      document.getElementById("temp-nocut-leftside-main-preview").style.display = "none";
      
      document.getElementById("tcanvas").style.display = "none";
      document.getElementById("tcanvas2").style.display = "none";
      document.getElementById("tcanvas3").style.display = "none";
      document.getElementById("tcanvas4").style.display = "none";
      document.getElementById("tcanvas5").style.display = "none";
    }
  }
});


/////// Choose Neck styles ////////

$('.neckimg').click(function() {
$('.neckimg').removeClass('choosenone');
$(this).addClass('choosenone');

$(".neckimg").parent().parent().removeClass('highlightNeck');
$(this).parent().parent().addClass('highlightNeck');

$('.viewItem').removeClass('activeSide');
$('[data-id="front-view"]').addClass( 'activeSide' );

document.getElementById("tcanvas").style.display = "block";
document.getElementById("tcanvas2").style.display = "none";
document.getElementById("tcanvas3").style.display = "block";
document.getElementById("tcanvas4").style.display = "none";
document.getElementById("tcanvas5").style.display = "block";

let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');

if(selectedShoulder == "wide-shoulder"){

  let mainCanvas = document.getElementById('main-preview');
  let ctxMain = mainCanvas.getContext('2d');
  let imageObj = new Image();
  imageObj.src = jQuery('.choosenone').attr('front-collar');

  // Draw the image onto the main canvas      
  imageObj.onload = function() {
  ctxMain.drawImage(imageObj, 0, 0);
 };
 setTimeout(WidefrontShoulder, 20);
 document.getElementById("tcanvas").style.display = "block";
 document.getElementById("tcanvas2").style.display = "none";
 document.getElementById("tcanvas3").style.display = "block";
 document.getElementById("tcanvas4").style.display = "none";
 document.getElementById("tcanvas5").style.display = "block";
}else{

  let mainCanvas = document.getElementById('main-preview');
  let ctxMain = mainCanvas.getContext('2d');
  let imageObj = new Image();
  imageObj.src = jQuery('.choosenone').attr('front-collar');

  // Draw the image onto the main canvas      
  imageObj.onload = function() {
  ctxMain.drawImage(imageObj, 0, 0);
 };
 setTimeout(frontSide, 20);
 document.getElementById("tcanvas").style.display = "block";
 document.getElementById("tcanvas2").style.display = "none";
 document.getElementById("tcanvas3").style.display = "block";
 document.getElementById("tcanvas4").style.display = "none";
 document.getElementById("tcanvas5").style.display = "block";
}
});


let defaultcolor = "#ff000000";
if (localStorage.getItem("firstcolor") === null) {
  localStorage.setItem("firstcolor", defaultcolor);
}
if (localStorage.getItem("secondcolor") === null) {
  localStorage.setItem("secondcolor", defaultcolor);
}
if (localStorage.getItem("thirdcolor") === null) {
  localStorage.setItem("thirdcolor", defaultcolor);
}
if (localStorage.getItem("fouthcolor") === null) {
  localStorage.setItem("fouthcolor", defaultcolor);
}
if (localStorage.getItem("fifthcolor") === null) {
  localStorage.setItem("fifthcolor", defaultcolor);
}
if (localStorage.getItem("sixthcolor") === null) {
  localStorage.setItem("sixthcolor", defaultcolor);
}
if (localStorage.getItem("sevencolor") === null) {
  localStorage.setItem("sevencolor", defaultcolor);
}
if (localStorage.getItem("eigthcolor") === null) {
  localStorage.setItem("eigthcolor", defaultcolor);
}
if (localStorage.getItem("ninecolor") === null) {
  localStorage.setItem("ninecolor", defaultcolor);
}
if (localStorage.getItem("tenthcolor") === null) {
  localStorage.setItem("tenthcolor", defaultcolor);
}


let getfirst = localStorage.getItem("firstcolor")
$(".first").attr("colorid", getfirst);
$('.first').css('background-color', getfirst);
let getsecond = localStorage.getItem("secondcolor")
$(".second").attr("colorid", getsecond);
$('.second').css('background-color', getsecond);
let getthird = localStorage.getItem("thirdcolor")
$(".third").attr("colorid", getthird);
$('.third').css('background-color', getthird);
let getfouth = localStorage.getItem("fouthcolor")
$(".fouth").attr("colorid", getfouth);
$('.fouth').css('background-color', getfouth);
let getfifth = localStorage.getItem("fifthcolor")
$(".fifth").attr("colorid", getfifth);
$('.fifth').css('background-color', getfifth);
let getsixth = localStorage.getItem("sixthcolor")
$(".sixth").attr("colorid", getsixth);
$('.sixth').css('background-color', getsixth);
let getseven = localStorage.getItem("sevencolor")
$(".seven").attr("colorid", getseven);
$('.seven').css('background-color', getseven);
let geteigth = localStorage.getItem("eigthcolor")
$(".eigth").attr("colorid", geteigth);
$('.eigth').css('background-color', geteigth);
let getnine = localStorage.getItem("ninecolor")
$(".nine").attr("colorid", getnine);
$('.nine').css('background-color', getnine);
let gettenth = localStorage.getItem("tenthcolor")
$(".tenth").attr("colorid", gettenth);
$('.tenth').css('background-color', gettenth);
var m = 1;
$('.color-index').click(function() {
  
  let color = $(this).attr('colorid');
  let getfirsts = localStorage.getItem("firstcolor");
  let getseconds = localStorage.getItem("secondcolor");
  let getthirds = localStorage.getItem("thirdcolor");
  let getfouths = localStorage.getItem("fouthcolor");
  let getfifths = localStorage.getItem("fifthcolor");
  let getsixths = localStorage.getItem("sixthcolor");
  let getsevens = localStorage.getItem("sevencolor");
  let geteigths = localStorage.getItem("eigthcolor");
  let getnines = localStorage.getItem("ninecolor");
  let gettenths = localStorage.getItem("tenthcolor");

  // console.log('insert color:- '+color+' 1 '+getfirsts+' 2 '+getseconds+' 3 '+getthirds+' 4 '+getfouths+' 5 '+getfifths+' 6 '+getsixths+' 7 '+getsevens+' 8 '+geteigths+' 9 '+getnines+' 10 '+gettenths);

  var arr2=[getfirsts,getseconds,getthirds,getfouths,getfifths,getsixths,getsevens,geteigths,getnines,gettenths];
  // console.log(arr2);

  if(jQuery.inArray(color, arr2) == -1)
  {
    if(m == '1')
    {
      let checkfirst = localStorage.setItem("firstcolor", color);
    }
    if(m == '2')
    {
      let checksecond = localStorage.setItem("secondcolor", color);
    }
    if(m == '3')
    {
      let checkthird = localStorage.setItem("thirdcolor", color);
    }
    if(m == '4')
    {
      let checkfouth = localStorage.setItem("fouthcolor", color);
    }
    if(m == '5')
    {
      let checkfifth = localStorage.setItem("fifthcolor", color);
    }
    if(m == '6')
    {let checkfirst = localStorage.setItem("sixthcolor", color);
    }
    if(m == '7')
    {
      let checksecond = localStorage.setItem("sevencolor", color);
    }
    if(m == '8')
    {
      let checkthird = localStorage.setItem("eigthcolor", color);
    }
    if(m == '9')
    {
      let checkfouth = localStorage.setItem("ninecolor", color);
    }
    if(m == '10')
    {
      let checkfifth = localStorage.setItem("tenthcolor", color);
      m = 0;
    }
    m += 1;
  }
  let getfirst = localStorage.getItem("firstcolor")
  $(".first").attr("colorid", getfirst);
  $('.first').css('background-color', getfirst);
  let getsecond = localStorage.getItem("secondcolor")
  $(".second").attr("colorid", getsecond);
  $('.second').css('background-color', getsecond);
  let getthird = localStorage.getItem("thirdcolor")
  $(".third").attr("colorid", getthird);
  $('.third').css('background-color', getthird);
  let getfouth = localStorage.getItem("fouthcolor")
  $(".fouth").attr("colorid", getfouth);
  $('.fouth').css('background-color', getfouth);
  let getfifth = localStorage.getItem("fifthcolor")
  $(".fifth").attr("colorid", getfifth);
  $('.fifth').css('background-color', getfifth);
  let getsixth = localStorage.getItem("sixthcolor")
  $(".sixth").attr("colorid", getsixth);
  $('.sixth').css('background-color', getsixth);
  let getseven = localStorage.getItem("sevencolor")
  $(".seven").attr("colorid", getseven);
  $('.seven').css('background-color', getseven);
  let geteigth = localStorage.getItem("eigthcolor")
  $(".eigth").attr("colorid", geteigth);
  $('.eigth').css('background-color', geteigth);
  let getnine = localStorage.getItem("ninecolor")
  $(".nine").attr("colorid", getnine);
  $('.nine').css('background-color', getnine);
  let gettenth = localStorage.getItem("tenthcolor")
  $(".tenth").attr("colorid", gettenth);
  $('.tenth').css('background-color', gettenth);
});

/////// Shirt Colour //////// 

$('.color-index', '#shirt-color').on('click', function() {

let color = $(this).attr('colorid');

$('#main-color').val(color);

$("#trim-color").css("background", color);

$('.color-index').removeClass('active-shirtColor');
$(this).addClass('active-shirtColor');

$('#shirt-color').hide();

let selectedItem = jQuery('.activeSide').attr('data-id');
let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');

// $('#coloring1').click(function() {

if(selectedItem == "front-view"){
  // alert("frontSide");
  if(selectedShoulder == "wide-shoulder"){

    setTimeout(WidefrontShoulder, 5);

  }else{

  setTimeout(frontSide, 5);

  }
}

if(selectedItem == "back-view"){
  // alert("backSide");
  if(selectedShoulder == "wide-shoulder"){

    setTimeout(WidebackShoulder, 5);

  }else{

  setTimeout(backSide, 5);

  }
}

if(selectedItem == "left-view"){
  // alert("leftSide");
  setTimeout(leftSide, 5);
}

if(selectedItem == "right-view"){
  // alert("rightSide");
  setTimeout(rightSide, 5);
 }
//  });
});


/////// Stripe Colour //////// 

$('.color-index', '#stripe-color').on('click', function() {

let color = $(this).attr('colorid');

$("#trim-color2").css("background", color);

$('.color-index').removeClass('active-stripeColor');
$(this).addClass('active-stripeColor');

$('#stripe-color').hide();

$('#stripes-color').val(color);
let selectedItem = jQuery('.activeSide').attr('data-id');
let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');

if(selectedItem == "front-view"){
  // alert("frontSide");
  if(selectedShoulder == "wide-shoulder"){

    setTimeout(WidefrontShoulder, 5);

  }else{

  setTimeout(frontSide, 5);

  }
}

if(selectedItem == "back-view"){
  // alert("backSide");
  if(selectedShoulder == "wide-shoulder"){

    setTimeout(WidebackShoulder, 5);

  }else{

  setTimeout(backSide, 5);

  }
}

if(selectedItem == "left-view"){
  // alert("leftSide");
  setTimeout(leftSide, 5);
}

if(selectedItem == "right-view"){
  // alert("rightSide");
  setTimeout(rightSide, 5);
 }
});


/////// Collar Colour //////// 

$('.color-index', '#neck-color').on('click', function() {

let color = $(this).attr('colorid');

$("#trim-color3").css("background", color);

$('.color-index').removeClass('active-collarColor');
$(this).addClass('active-collarColor');

$('#neck-color').hide();

$('#collar-color').val(color);
let selectedItem = jQuery('.activeSide').attr('data-id');
let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');

if(selectedItem == "front-view"){
  // alert("frontSide");
  if(selectedShoulder == "wide-shoulder"){

    setTimeout(WidefrontShoulder, 5);

  }else{

  setTimeout(frontSide, 5);

  }
}

if(selectedItem == "back-view"){
  // alert("backSide");
  if(selectedShoulder == "wide-shoulder"){

    setTimeout(WidebackShoulder, 5);

  }else{

  setTimeout(backSide, 5);

  }
}

if(selectedItem == "left-view"){
  // alert("leftSide");
  setTimeout(leftSide, 5);
}

if(selectedItem == "right-view"){
  // alert("rightSide");
  setTimeout(rightSide, 5);
 }
});


/////// Collar 2nd Layer Colour //////// 

$('.color-index', '#neck-layer-color').on('click', function() {

let color = $(this).attr('colorid');

$("#trim-color5").css("background", color);

$('.color-index').removeClass('active-collarLayer-Color');
$(this).addClass('active-collarLayer-Color');

$('#neck-layer-color').hide();
  
  $('#collar-layer-color').val(color);
  let selectedItem = jQuery('.activeSide').attr('data-id');
  let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');
  
  if(selectedItem == "front-view"){
    // alert("frontSide");
    if(selectedShoulder == "wide-shoulder"){

      setTimeout(WidefrontShoulder, 5);
  
    }else{

    setTimeout(frontSide, 5);

    }
  }
  
  if(selectedItem == "back-view"){
    // alert("backSide");
    if(selectedShoulder == "wide-shoulder"){

      setTimeout(WidebackShoulder, 5);
  
    }else{

    setTimeout(backSide, 5);

    }
  }
  
  if(selectedItem == "left-view"){
    // alert("leftSide");
    setTimeout(leftSide, 5);
  }
  
  if(selectedItem == "right-view"){
    // alert("rightSide");
    setTimeout(rightSide, 5);
   }
  });


/////// Shoulder Colour //////// 

$('.color-index', '#jersey-shoulder-color').on('click', function() {

let color = $(this).attr('colorid');

$("#trim-color4").css("background", color);

$('.color-index').removeClass('active-shoulderColor');
$(this).addClass('active-shoulderColor');

$('#jersey-shoulder-color').hide();

$('#shoulder-color').val(color);
let selectedItem = jQuery('.activeSide').attr('data-id');
let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');

if(selectedItem == "front-view"){
  // alert("frontSide");
  if(selectedShoulder == "wide-shoulder"){

    setTimeout(WidefrontShoulder, 5);

  }else{

  setTimeout(frontSide, 5);

  }
}

if(selectedItem == "back-view"){
  // alert("backSide");
  if(selectedShoulder == "wide-shoulder"){

    setTimeout(WidebackShoulder, 5);

  }else{

  setTimeout(backSide, 5);

  }
}

if(selectedItem == "left-view"){
  // alert("leftSide");
  setTimeout(leftSide, 5);
}

if(selectedItem == "right-view"){
  // alert("rightSide");
  setTimeout(rightSide, 5);
 }
});



$('.uniform-list > li').click(function(){
  
  $('.navone').removeClass('active');
  $('.navtwo').addClass('active');
  $(this).closest('.tab-content').addClass('dnone');
  let activeContent = $(this).find('a').attr('href');
  $(activeContent).show();
  let image = document.getElementById("static-preview");
  let imgsrc = image.src;
  draw(imgsrc,'');
  $("#static-preview").addClass('dnone');
  $("#back-preview").addClass('dnone');
  $("#rightside-preview").addClass('dnone');
  $("#leftside-preview").addClass('dnone');
  $("#main-preview").removeClass('dnone');
  $("#front-shadow-preview").addClass('dnone');
  $("#back-shadow-preview").addClass('dnone');
  $("#rightside-shadow-preview").addClass('dnone');
  $("#leftside-shadow-preview").addClass('dnone');

  $("#temp-front-main-preview").removeClass('dnone');
  $("#temp-back-main-preview").removeClass('dnone');
  $("#temp-rightside-main-preview").removeClass('dnone');
  $("#temp-leftside-main-preview").removeClass('dnone');

  $("#noCut-rightside-preview").addClass('dnone');
  $("#noCut-rightside-shadow-preview").addClass('dnone');
  $("#noCut-leftside-preview").addClass('dnone');
  $("#noCut-leftside-shadow-preview").addClass('dnone');

  $("#frontside-wideShoulder-preview").addClass('dnone');
  $("#frontside-wideShoulder-shadow-preview").addClass('dnone');

  $("#backside-wideShoulder-preview").addClass('dnone');
  $("#backside-wideShoulder-shadow-preview").addClass('dnone');

  setTimeout(frontSide, 200);
});

// Show the first tab and hide the rest
$('#uniform-tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#uniform-tabs-nav li').click(function(){
  $('#uniform-tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();

  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  $(activeTab).removeClass('dnone');
});

// Accordion
$('.accordion-list > li .answer-wrap').hide();
$(".accordion-list > li.active").find(".answer-wrap").slideDown();
$('.accordion-list > li > *:first-child').click(function() {
  if ($(this).parent('li').hasClass("active")) {
    $(this).parent('li').removeClass("active").find(".answer-wrap").slideUp("fast");
  } else {
    $(".accordion-list > li.active .answer-wrap").slideUp("fast");
    $(".accordion-list > li.active").removeClass("active");
    $(this).parent('li').addClass("active").find(".answer-wrap").slideDown("fast");
  }
});

//////CANVAS////////
$('.navtwo').click(function(){ 
  
  let imageObj = document.getElementById("static-preview");
  draw(imageObj.src,'');

  $("#back-preview").addClass('dnone');
  $("#static-preview").addClass('dnone');
  $("#leftside-preview").addClass('dnone');
  $("#rightside-preview").addClass('dnone');
  $("#main-preview").removeClass('dnone');
  $("#front-shadow-preview").addClass('dnone');
  $("#back-shadow-preview").addClass('dnone');
  $("#rightside-shadow-preview").addClass('dnone');
  $("#leftside-shadow-preview").addClass('dnone');

  $("#temp-front-main-preview").removeClass('dnone');
  $("#temp-back-main-preview").removeClass('dnone');
  $("#temp-rightside-main-preview").removeClass('dnone');
  $("#temp-leftside-main-preview").removeClass('dnone');

  $("#noCut-rightside-preview").addClass('dnone');
  $("#noCut-rightside-shadow-preview").addClass('dnone');
  $("#noCut-leftside-preview").addClass('dnone');
  $("#noCut-leftside-shadow-preview").addClass('dnone');

  $("#frontside-wideShoulder-preview").addClass('dnone');
  $("#frontside-wideShoulder-shadow-preview").addClass('dnone');

  $("#backside-wideShoulder-preview").addClass('dnone');
  $("#backside-wideShoulder-shadow-preview").addClass('dnone');
});


jQuery('.customize-view__image figure').attr('id', 'temp-canvases');
document.getElementById("saveunii").addEventListener("click", function() {
  html2canvas(document.getElementById("temp-canvases")).then(function (canvas) {			
    var anchorTag = document.createElement("a");
      document.body.appendChild(anchorTag);
      document.getElementById("temp-canvases").appendChild(canvas);
      anchorTag.download = "filename.jpg";
      anchorTag.href = canvas.toDataURL();
      let saveimage = canvas.toDataURL();
          // anchorTag.target = '_blank';
          // anchorTag.click();
          //document.body.appendChild('<img class="dnone" id="onteamname" src="'+canvas.toDataURL()+'">');

          $.ajax({
            url: 'save_image.php', // Replace with the URL of your server-side script
            type: 'POST',
            data: { image: saveimage },
            success: function(response) {
              // Handle the response from the server
              console.log(response);
            },
            error: function(xhr, status, error) {
              // Handle the error
              console.error(error);
            }
          });
    });
    alert("Uniform saved over the server folder successfully.");
});


// $('#solid-color').on('change', function(){
  
//   //$('#main-preview').hide();
//   //$('#soulder-preview').show();
//   let solcol = this.value;
//   let canvas = document.getElementById('main-preview');
//   let ctx = canvas.getContext("2d");
//   let region = new Path2D();
//   let img = new Image();
//   img.setAttribute('crossOrigin', 'anonymous');
//   img.src = document.getElementById("main-preview").toDataURL("image/png").replace("image/png", "image/octet-stream");
//   $('.main-preview').append('<img src = "'+img.src+'">');
//   if($('#text-preview').length != ''){
//       $('#text-preview').remove();
//   }
//   $('#main-preview').after('<img class="dnone" id="text-preview" src="'+img.src+'"/>');
//   let x = $('#text-preview').attr('src');
//   let url = x.replace(/^data:image\/[^;]+/, 'data:application/octet-stream');      
// });


$('li#namenumber h3').click(function(){
  html2canvas(document.getElementById("html-content-holder")).then(function (canvas) {
    var imgTag = document.createElement("img");
    var canvasTag = document.createElement("div");		
    canvasTag.id = "tcanvas";
    imgTag.src = canvas.toDataURL();
    imgTag.id = "onteamname";
    if($('#tcanvas').length == 0){
      document.getElementById("html-content-holder").appendChild(canvasTag);
    }
  });
});


$('#text-string').blur(function(){

  $('#drag-resize').css('background-color', 'transparent');
  $('#drag-resize4').css('background-color', 'transparent');

});

$('#text-string2').blur(function(){

  $('#drag-resize2').css('background-color', 'transparent');

});

$('#text-string3').blur(function(){

  $('#drag-resize3').css('background-color', 'transparent');

});


$('#text-string').on('click', function(){

  $('#tcanvas').css('z-index', 9999);
  $('#tcanvas2').css('z-index', 0);
  $('#tcanvas3').css('z-index', 0);
  $('#tcanvas4').css('z-index', 1);
  $('#tcanvas5').css('z-index', 0);

  $('#drag-resize').css('background-color', 'rgba(34, 153, 238, 0.171)');
  $('#drag-resize4').css('background-color', 'rgba(34, 153, 238, 0.171)');
  $('#drag-resize3').css('background-color', 'transparent');

});

$('#text-string2').on('click', function(){

  $('#tcanvas').css('z-index', 0);
  $('#tcanvas2').css('z-index', 1);
  $('#tcanvas3').css('z-index', 0);
  $('#tcanvas4').css('z-index', 0);
  $('#tcanvas5').css('z-index', 0);

  $('#drag-resize2').css('background-color', 'rgba(34, 153, 238, 0.171)');
  $('#drag-resize4').css('background-color', 'transparent');

});

$('#text-string3').on('click', function(){

  $('#tcanvas').css('z-index', 0);
  $('#tcanvas2').css('z-index', 0);
  $('#tcanvas3').css('z-index', 1);
  $('#tcanvas4').css('z-index', 0);
  $('#tcanvas5').css('z-index', 0);

  $('#drag-resize').css('background-color', 'transparent');
  $('#drag-resize3').css('background-color', 'rgba(34, 153, 238, 0.171)');

});


$('#text-string').keyup(function(e){

  var key =  e.keyCode|e.which;
  
  if (key >= 48 && key <= 57 || key >= 96 && key <= 105 || key == 8){

  $('.viewItem').removeClass('activeSide');
  $('[data-id="front-view"]').addClass( 'activeSide' );

  $('#drag-resize').css('background-color', 'rgba(34, 153, 238, 0.171)');
  $('#drag-resize3').css('background-color', 'transparent');

  frontSide();

let selectedItem = jQuery('.activeSide').attr('data-id');

var checkId = document.getElementById("resize-drag1");
let insttext = $('#text-string').val();
let fontstyle = $('#resize-drag1').attr('font-id');
let textCheck = $('#resize-drag1').text();

if(insttext.length <= '3'){
  if(checkId){

    $('#resize-drag1').text(insttext);
    $('#resize-drag1').css("font-family", fontstyle);
    
  } else {

    // $('#resize-drag1').text('');
    $('#tcanvas').html('<div class="resize-drag resize-drag1" id="drag-resize"><p id="resize-drag1" font-id="">'+insttext+'</p></div>');
    $(':checkbox').prop('checked', false);
  }
} else {
  $('#text-string').val(textCheck);
}


var checkId2 = document.getElementById("resize-drag2");
let insttext2 = $('#text-string2').val();
let settext2 = jQuery('#text-bend-back').val();
let fontstyle2 = $('#resize-drag2').attr('font-id');
let textCheck2 = $('#resize-drag2').text();

if(insttext2.length <= '15'){
if(checkId2){

  $('#resize-drag2').removeClass();

  if(settext2 == 'gravity')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='gravity'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('gv-2-'+len);
    $('#resize-drag2').html(modified);

    $('.gravity', '#resize-drag2').css("font-family", fontstyle);
  } 
  else if(settext2 == 'trajectory')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='trajectory'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('tj-4-'+len);
    $('#resize-drag2').html(modified);

    $('.trajectory', '#resize-drag2').css("font-family", fontstyle);
  } 
  else if(settext2 == 'straight-line')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='straight-line'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('sl-1-'+len);
    $('#resize-drag2').html(modified);

    $('.straight-line', '#resize-drag2').css("font-family", fontstyle);
  } 
  else if(settext2 == 'full-rev-arc')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='full-rev-arc'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('fs-3-'+len);
    $('#resize-drag2').html(modified);

    $('.full-rev-arc', '#resize-drag2').css("font-family", fontstyle2);
  }
  else if(settext2 == 'vertical-arc'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='vertical-arc'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('va-5-'+len);
    $('#resize-drag2').html(modified);

    $('.vertical-arc', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'bottom-vertical'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='bottom-vertical'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('bv-6-'+len);
    $('#resize-drag2').html(modified);

    $('.bottom-vertical', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'inverse-vertical'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='inverse-vertical'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('iv-7-'+len);
    $('#resize-drag2').html(modified);

    $('.inverse-vertical', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'center-bulge'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='center-bulge'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('cb-8-'+len);
    $('#resize-drag2').html(modified);

    $('.center-bulge', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'san-diego'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='san-diego'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('sd-9-'+len);
    $('#resize-drag2').html(modified);

    $('.san-diego', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'half-asleep-arc'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='half-asleep-arc'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('ha-10-'+len);
    $('#resize-drag2').html(modified);

    $('.half-asleep-arc', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'breathing-in'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='breathing-in'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('bi-11-'+len);
    $('#resize-drag2').html(modified);

    $('.breathing-in', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else {
    // $('#resize-drag2').text(insttext2);
  }
}else{
  if(settext2 == 'gravity')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='gravity'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('gv-2-'+len);
  } 
  else if(settext2 == 'trajectory')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='trajectory'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('tj-4-'+len);
  } 
  else if(settext2 == 'straight-line')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='straight-line'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('sl-1-'+len);
  } 
  else if(settext2 == 'full-rev-arc')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='full-rev-arc'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('fs-3-'+len);
  }
  else if(settext2 == 'vertical-arc'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='vertical-arc'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('va-5-'+len);
  }
  else if(settext2 == 'bottom-vertical'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='bottom-vertical'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('bv-6-'+len);
  }
  else if(settext2 == 'inverse-vertical'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='inverse-vertical'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('iv-7-'+len);
  }
  else if(settext2 == 'center-bulge'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='center-bulge'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('cb-8-'+len);
  }
  else if(settext2 == 'san-diego'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='san-diego'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('sd-9-'+len);
  }
  else if(settext2 == 'half-asleep-arc'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='half-asleep-arc'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('ha-10-'+len);
  }
  else if(settext2 == 'breathing-in'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='breathing-in'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('bi-11-'+len);
  }
    else {
    // $('#resize-drag2').text('');
    // $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2" font-id="">'+insttext2+'</p></div>');
    $(':checkbox').prop('checked', false);
  }
}
} else {
  $('#text-string2').val(textCheck2);
}


var checkId3 = document.getElementById("resize-drag3");
let insttext3 = $('#text-string3').val();
let settext3 = jQuery('#text-bend-front').val();
let fontstyle3 = $('#resize-drag3').attr('font-id');
let textCheck3 = $('#resize-drag3').text();

if(insttext3.length <= '15'){

if(checkId3){

  $('#resize-drag3').removeClass();

  if(settext3 == 'gravity')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='gravity'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('gv-2-'+len);
    $('#resize-drag3').html(modified);

    $('.gravity', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'trajectory')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='trajectory'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('tj-4-'+len);
    $('#resize-drag3').html(modified);

    $('.trajectory', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'straight-line')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='straight-line'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('sl-1-'+len);
    $('#resize-drag3').html(modified);

    $('.straight-line', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'full-rev-arc')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='full-rev-arc'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('fs-3-'+len);
    $('#resize-drag3').html(modified);

    $('.full-rev-arc', '#resize-drag3').css("font-family", fontstyle3);
  }
  else if(settext3 == 'vertical-arc'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='vertical-arc'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('va-5-'+len);
    $('#resize-drag3').html(modified);

    $('.vertical-arc', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'bottom-vertical'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='bottom-vertical'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('bv-6-'+len);
    $('#resize-drag3').html(modified);

    $('.bottom-vertical', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'inverse-vertical'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='inverse-vertical'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('iv-7-'+len);
    $('#resize-drag3').html(modified);

    $('.inverse-vertical', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'center-bulge'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='center-bulge'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('cb-8-'+len);
    $('#resize-drag3').html(modified);

    $('.center-bulge', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'san-diego'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='san-diego'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('sd-9-'+len);
    $('#resize-drag3').html(modified);

    $('.san-diego', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'half-asleep-arc'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='half-asleep-arc'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('ha-10-'+len);
    $('#resize-drag3').html(modified);

    $('.half-asleep-arc', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'breathing-in'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='breathing-in'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('bi-11-'+len);
    $('#resize-drag3').html(modified);

    $('.breathing-in', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else {
    // $('#resize-drag3').text(insttext3);
  }
}else{
  if(settext3 == 'gravity')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='gravity'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('gv-2-'+len);
  } 
  else if(settext3 == 'trajectory')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='trajectory'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('tj-4-'+len);
  } 
  else if(settext3 == 'straight-line')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='straight-line'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('sl-1-'+len);
  } 
  else if(settext3 == 'full-rev-arc')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='full-rev-arc'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('fs-3-'+len);
  }
  else if(settext3 == 'vertical-arc'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='vertical-arc'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('va-5-'+len);
  }
  else if(settext3 == 'bottom-vertical'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='bottom-vertical'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('bv-6-'+len);
  }
  else if(settext3 == 'inverse-vertical'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='inverse-vertical'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('iv-7-'+len);
  }
  else if(settext3 == 'center-bulge'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='center-bulge'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('cb-8-'+len);
  }
  else if(settext3 == 'san-diego'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='san-diego'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('sd-9-'+len);
  }
  else if(settext3 == 'half-asleep-arc'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='half-asleep-arc'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('ha-10-'+len);
  }
  else if(settext3 == 'breathing-in'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='breathing-in'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('bi-11-'+len);
  }
    else {
    // $('#resize-drag3').text('');
    // $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3" font-id="">'+insttext3+'</p></div>');
    $(':checkbox').prop('checked', false);
  }
}
} else {
  $('#text-string3').val(textCheck3);
}


var checkId4 = document.getElementById("resize-drag4");
let insttext4 = $('#text-string').val();
let fontstyle4 = $('#resize-drag4').attr('font-id');
let textCheck4 = $('#resize-drag4').text();

if(insttext4.length <= '3'){
  if(checkId4){
    
    $('#resize-drag4').text(insttext4);
    $('#resize-drag4').css("font-family", fontstyle4);

  }else{
    // $('#resize-drag4').text('');
    $('#tcanvas4').html('<div class="resize-drag resize-drag4" id="drag-resize4"><p id="resize-drag4" font-id="">'+insttext4+'</p></div>');
    $(':checkbox').prop('checked', false);
  }  
} else {
  $('#text-string').val(textCheck4);
}
  // let insttext2 = $('#text-string2').val();
  // // $('#resize-drag2').text('');
  // $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+insttext2+'</p></div>');
  // $(':checkbox').prop('checked', false);

  if(selectedItem == "back-view"){
    // alert("view item back");
    document.getElementById("tcanvas").style.display = "none";
    document.getElementById("tcanvas2").style.display = "block";
    document.getElementById("tcanvas3").style.display = "none";
    document.getElementById("tcanvas4").style.display = "block";
    document.getElementById("tcanvas5").style.display = "none";
  }

  if(selectedItem == "front-view"){
    // alert("view item front");
    document.getElementById("tcanvas").style.display = "block";
    document.getElementById("tcanvas2").style.display = "none";
    document.getElementById("tcanvas3").style.display = "block";
    document.getElementById("tcanvas4").style.display = "none";
    document.getElementById("tcanvas5").style.display = "block";
  }

  if(selectedItem == "right-view"){
    // alert("view item right");
    rightSide();
    document.getElementById("tcanvas").style.display = "none";
    document.getElementById("tcanvas2").style.display = "none";
    document.getElementById("tcanvas3").style.display = "none";
    document.getElementById("tcanvas4").style.display = "none";
    document.getElementById("tcanvas5").style.display = "none";
  }

  if(selectedItem == "left-view"){
    // alert("view item left");
    leftSide();
    document.getElementById("tcanvas").style.display = "none";
    document.getElementById("tcanvas2").style.display = "none";
    document.getElementById("tcanvas3").style.display = "none";
    document.getElementById("tcanvas4").style.display = "none";
    document.getElementById("tcanvas5").style.display = "none";
  }
}
else{
  $('#text-string').val("");
  $('#resize-drag1').text("");
  $('#resize-drag4').text("");
}
});


$('#text-string2').keyup(function(){

  $('.viewItem').removeClass('activeSide');
  $('[data-id="back-view"]').addClass( 'activeSide' );

  backSide();

let selectedItem = jQuery('.activeSide').attr('data-id');

var checkId = document.getElementById("resize-drag1");
let insttext = $('#text-string').val();
let fontstyle = $('#resize-drag1').attr('font-id');

if(checkId){

  $('#resize-drag1').text(insttext);
  $('#resize-drag1').css("font-family", fontstyle);
  
}else{

  // $('#resize-drag1').text('');
  $('#tcanvas').html('<div class="resize-drag resize-drag1" id="drag-resize"><p id="resize-drag1" font-id="">'+insttext+'</p></div>');
  $(':checkbox').prop('checked', false);
}


var checkId2 = document.getElementById("resize-drag2");
let insttext2 = $('#text-string2').val();
let settext2 = jQuery('#text-bend-back').val();
let fontstyle2 = $('#resize-drag2').attr('font-id');
let textCheck2 = $('#resize-drag2').text();

if(insttext2.length <= '15'){

if(checkId2){

  $('#resize-drag2').removeClass();

  if(settext2 == 'gravity')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='gravity'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('gv-2-'+len);
    $('#resize-drag2').html(modified);

    $('.gravity', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'trajectory')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='trajectory'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('tj-4-'+len);
    $('#resize-drag2').html(modified);

    $('.trajectory', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'straight-line')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='straight-line'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('sl-1-'+len);
    $('#resize-drag2').html(modified);

    $('.straight-line', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'full-rev-arc')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='full-rev-arc'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('fs-3-'+len);
    $('#resize-drag2').html(modified);

    $('.full-rev-arc', '#resize-drag2').css("font-family", fontstyle2);
  }
  else if(settext2 == 'vertical-arc'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='vertical-arc'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('va-5-'+len);
    $('#resize-drag2').html(modified);

    $('.vertical-arc', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'bottom-vertical'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='bottom-vertical'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('bv-6-'+len);
    $('#resize-drag2').html(modified);

    $('.bottom-vertical', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'inverse-vertical'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='inverse-vertical'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('iv-7-'+len);
    $('#resize-drag2').html(modified);

    $('.inverse-vertical', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'center-bulge'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='center-bulge'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('cb-8-'+len);
    $('#resize-drag2').html(modified);

    $('.center-bulge', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'san-diego'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='san-diego'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('sd-9-'+len);
    $('#resize-drag2').html(modified);

    $('.san-diego', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'half-asleep-arc'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='half-asleep-arc'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('ha-10-'+len);
    $('#resize-drag2').html(modified);

    $('.half-asleep-arc', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'breathing-in'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='breathing-in'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('bi-11-'+len);
    $('#resize-drag2').html(modified);

    $('.breathing-in', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else {
    // $('#resize-drag2').text(insttext2);
  }
}else{
  if(settext2 == 'gravity')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='gravity'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('gv-2-'+len);
  } 
  else if(settext2 == 'trajectory')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='trajectory'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('tj-4-'+len);
  } 
  else if(settext2 == 'straight-line')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='straight-line'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('sl-1-'+len);
  } 
  else if(settext2 == 'full-rev-arc')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='full-rev-arc'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('fs-3-'+len);
  }
  else if(settext2 == 'vertical-arc'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='vertical-arc'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('va-5-'+len);
  }
  else if(settext2 == 'bottom-vertical'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='bottom-vertical'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('bv-6-'+len);
  }
  else if(settext2 == 'inverse-vertical'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='inverse-vertical'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('iv-7-'+len);
  }
  else if(settext2 == 'center-bulge'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='center-bulge'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('cb-8-'+len);
  }
  else if(settext2 == 'san-diego'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='san-diego'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('sd-9-'+len);
  }
  else if(settext2 == 'half-asleep-arc'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='half-asleep-arc'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('ha-10-'+len);
  }
  else if(settext2 == 'breathing-in'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='breathing-in'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('bi-11-'+len);
  }
    else {
    // $('#resize-drag2').text('');
    // $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2" font-id="">'+insttext2+'</p></div>');
    $(':checkbox').prop('checked', false);
  }
}

} else {
  $('#text-string2').val(textCheck2);
}


var checkId3 = document.getElementById("resize-drag3");
let insttext3 = $('#text-string3').val();
let settext3 = jQuery('#text-bend-front').val();
let fontstyle3 = $('#resize-drag3').attr('font-id');
let textCheck3 = $('#resize-drag3').text();

if(insttext3.length <= '15'){

if(checkId3){

  $('#resize-drag3').removeClass();


  if(settext3 == 'gravity')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='gravity'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('gv-2-'+len);
    $('#resize-drag3').html(modified);

    $('.gravity', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'trajectory')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='trajectory'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('tj-4-'+len);
    $('#resize-drag3').html(modified);

    $('.trajectory', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'straight-line')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='straight-line'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('sl-1-'+len);
    $('#resize-drag3').html(modified);

    $('.straight-line', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'full-rev-arc')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='full-rev-arc'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('fs-3-'+len);
    $('#resize-drag3').html(modified);

    $('.full-rev-arc', '#resize-drag3').css("font-family", fontstyle3);
  }
  else if(settext3 == 'vertical-arc'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='vertical-arc'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('va-5-'+len);
    $('#resize-drag3').html(modified);

    $('.vertical-arc', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'bottom-vertical'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='bottom-vertical'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('bv-6-'+len);
    $('#resize-drag3').html(modified);

    $('.bottom-vertical', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'inverse-vertical'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='inverse-vertical'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('iv-7-'+len);
    $('#resize-drag3').html(modified);

    $('.inverse-vertical', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'center-bulge'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='center-bulge'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('cb-8-'+len);
    $('#resize-drag3').html(modified);

    $('.center-bulge', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'san-diego'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='san-diego'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('sd-9-'+len);
    $('#resize-drag3').html(modified);

    $('.san-diego', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'half-asleep-arc'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='half-asleep-arc'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('ha-10-'+len);
    $('#resize-drag3').html(modified);

    $('.half-asleep-arc', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'breathing-in'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='breathing-in'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('bi-11-'+len);
    $('#resize-drag3').html(modified);

    $('.breathing-in', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else {
    // $('#resize-drag3').text(insttext3);
  }
}else{
  if(settext3 == 'gravity')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='gravity'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('gv-2-'+len);
  } 
  else if(settext3 == 'trajectory')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='trajectory'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('tj-4-'+len);
  } 
  else if(settext3 == 'straight-line')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='straight-line'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('sl-1-'+len);
  } 
  else if(settext3 == 'full-rev-arc')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='full-rev-arc'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('fs-3-'+len);
  }
  else if(settext3 == 'vertical-arc'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='vertical-arc'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('va-5-'+len);
  }
  else if(settext3 == 'bottom-vertical'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='bottom-vertical'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('bv-6-'+len);
  }
  else if(settext3 == 'inverse-vertical'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='inverse-vertical'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('iv-7-'+len);
  }
  else if(settext3 == 'center-bulge'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='center-bulge'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('cb-8-'+len);
  }
  else if(settext3 == 'san-diego'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='san-diego'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('sd-9-'+len);
  }
  else if(settext3 == 'half-asleep-arc'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='half-asleep-arc'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('ha-10-'+len);
  }
  else if(settext3 == 'breathing-in'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='breathing-in'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('bi-11-'+len);
  }
    else {
    // $('#resize-drag3').text('');
    // $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3" font-id="">'+insttext3+'</p></div>');
    $(':checkbox').prop('checked', false);
  }
}

} else {
  $('#text-string3').val(textCheck3);
}


var checkId4 = document.getElementById("resize-drag4");
let insttext4 = $('#text-string').val();
let fontstyle4 = $('#resize-drag4').attr('font-id');

if(checkId4){
  
  $('#resize-drag4').text(insttext4);
  $('#resize-drag4').css("font-family", fontstyle4);

}else{

  // $('#resize-drag4').text('');
  $('#tcanvas4').html('<div class="resize-drag resize-drag4" id="drag-resize4"><p id="resize-drag4" font-id="">'+insttext4+'</p></div>');
  $(':checkbox').prop('checked', false);
}

  // let insttext2 = $('#text-string2').val();
  // // $('#resize-drag2').text('');
  // $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+insttext2+'</p></div>');
  // $(':checkbox').prop('checked', false);

  if(selectedItem == "back-view"){
    // alert("view item back");
    document.getElementById("tcanvas").style.display = "none";
    document.getElementById("tcanvas2").style.display = "block";
    document.getElementById("tcanvas3").style.display = "none";
    document.getElementById("tcanvas4").style.display = "block";
    document.getElementById("tcanvas5").style.display = "none";
  }

  if(selectedItem == "front-view"){
    // alert("view item front");
    document.getElementById("tcanvas").style.display = "block";
    document.getElementById("tcanvas2").style.display = "none";
    document.getElementById("tcanvas3").style.display = "block";
    document.getElementById("tcanvas4").style.display = "none";
    document.getElementById("tcanvas5").style.display = "block";
  }

  if(selectedItem == "right-view"){
    // alert("view item right");
    rightSide();
    document.getElementById("tcanvas").style.display = "none";
    document.getElementById("tcanvas2").style.display = "none";
    document.getElementById("tcanvas3").style.display = "none";
    document.getElementById("tcanvas4").style.display = "none";
    document.getElementById("tcanvas5").style.display = "none";
  }

  if(selectedItem == "left-view"){
    // alert("view item left");
    leftSide();
    document.getElementById("tcanvas").style.display = "none";
    document.getElementById("tcanvas2").style.display = "none";
    document.getElementById("tcanvas3").style.display = "none";
    document.getElementById("tcanvas4").style.display = "none";
    document.getElementById("tcanvas5").style.display = "none";
  }

});


$('#text-string3').keyup(function(){

  $('.viewItem').removeClass('activeSide');
  $('[data-id="front-view"]').addClass( 'activeSide' );

  $('#drag-resize').css('background-color', 'transparent');
  $('#drag-resize3').css('background-color', 'rgba(34, 153, 238, 0.171)');

  frontSide();

let selectedItem = jQuery('.activeSide').attr('data-id');

var checkId = document.getElementById("resize-drag1");
let insttext = $('#text-string').val();
let fontstyle = $('#resize-drag1').attr('font-id');

if(checkId){

  $('#resize-drag1').text(insttext);
  $('#resize-drag1').css("font-family", fontstyle);
  
}else{

  // $('#resize-drag1').text('');
  $('#tcanvas').html('<div class="resize-drag resize-drag1" id="drag-resize"><p id="resize-drag1" font-id="">'+insttext+'</p></div>');
  $(':checkbox').prop('checked', false);
}


var checkId2 = document.getElementById("resize-drag2");
let insttext2 = $('#text-string2').val();
let settext2 = jQuery('#text-bend-back').val();
let fontstyle2 = $('#resize-drag2').attr('font-id');
let textCheck2 = $('#resize-drag2').text();

if(insttext2.length <= '15'){

if(checkId2){

  $('#resize-drag2').removeClass();

  if(settext2 == 'gravity')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='gravity'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('gv-2-'+len);
    $('#resize-drag2').html(modified);

    $('.full-rev-arc', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'trajectory')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='trajectory'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('tj-4-'+len);
    $('#resize-drag2').html(modified);

    $('.full-rev-arc', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'straight-line')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='straight-line'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('sl-1-'+len);
    $('#resize-drag2').html(modified);

    $('.full-rev-arc', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'full-rev-arc')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='full-rev-arc'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('fs-3-'+len);
    $('#resize-drag2').html(modified);

    $('.full-rev-arc', '#resize-drag2').css("font-family", fontstyle2);
  }
  else if(settext2 == 'vertical-arc'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='vertical-arc'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('va-5-'+len);
    $('#resize-drag2').html(modified);

    $('.vertical-arc', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'bottom-vertical'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='bottom-vertical'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('bv-6-'+len);
    $('#resize-drag2').html(modified);

    $('.bottom-vertical', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'inverse-vertical'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='inverse-vertical'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('iv-7-'+len);
    $('#resize-drag2').html(modified);

    $('.inverse-vertical', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'center-bulge'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='center-bulge'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('cb-8-'+len);
    $('#resize-drag2').html(modified);

    $('.center-bulge', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'san-diego'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='san-diego'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('sd-9-'+len);
    $('#resize-drag2').html(modified);

    $('.san-diego', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'half-asleep-arc'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='half-asleep-arc'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('ha-10-'+len);
    $('#resize-drag2').html(modified);

    $('.half-asleep-arc', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else if(settext2 == 'breathing-in'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='breathing-in'>" + word[i] + "</span>";
    }
    $('#resize-drag2').addClass('bi-11-'+len);
    $('#resize-drag2').html(modified);

    $('.breathing-in', '#resize-drag2').css("font-family", fontstyle2);
  } 
  else {
    // $('#resize-drag2').text(insttext2);
  }
}else{
  if(settext2 == 'gravity')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='gravity'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('gv-2-'+len);
  } 
  else if(settext2 == 'trajectory')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='trajectory'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('tj-4-'+len);
  } 
  else if(settext2 == 'straight-line')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='straight-line'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('sl-1-'+len);
  } 
  else if(settext2 == 'full-rev-arc')
  {
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='full-rev-arc'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('fs-3-'+len);
  }
  else if(settext2 == 'vertical-arc'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='vertical-arc'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('va-5-'+len);
  }
  else if(settext2 == 'bottom-vertical'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='bottom-vertical'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('bv-6-'+len);
  }
  else if(settext2 == 'inverse-vertical'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='inverse-vertical'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('iv-7-'+len);
  }
  else if(settext2 == 'center-bulge'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='center-bulge'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('cb-8-'+len);
  }
  else if(settext2 == 'san-diego'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='san-diego'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('sd-9-'+len);
  }
  else if(settext2 == 'half-asleep-arc'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='half-asleep-arc'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('ha-10-'+len);
  }
  else if(settext2 == 'breathing-in'){
    let word = $('#text-string2').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='breathing-in'>" + word[i] + "</span>";
    }
    $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+modified+'</p></div>');
    $('#resize-drag2').addClass('bi-11-'+len);
  }
    else {
    // $('#resize-drag2').text('');
    // $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2" font-id="">'+insttext2+'</p></div>');
    $(':checkbox').prop('checked', false);
  }
}
} else {
  $('#text-string2').val(textCheck2);
}


var checkId3 = document.getElementById("resize-drag3");
let insttext3 = $('#text-string3').val();
let settext3 = jQuery('#text-bend-front').val();
let fontstyle3 = $('#resize-drag3').attr('font-id');
let textCheck3 = $('#resize-drag3').text();

if(insttext3.length <= '15'){

if(checkId3){

  $('#resize-drag3').removeClass();

  if(settext3 == 'gravity')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='gravity'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('gv-2-'+len);
    $('#resize-drag3').html(modified);

    $('.full-rev-arc', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'trajectory')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='trajectory'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('tj-4-'+len);
    $('#resize-drag3').html(modified);

    $('.full-rev-arc', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'straight-line')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='straight-line'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('sl-1-'+len);
    $('#resize-drag3').html(modified);

    $('.full-rev-arc', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'full-rev-arc')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='full-rev-arc'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('fs-3-'+len);
    $('#resize-drag3').html(modified);

    $('.full-rev-arc', '#resize-drag3').css("font-family", fontstyle3);
  }
  else if(settext3 == 'vertical-arc'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='vertical-arc'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('va-5-'+len);
    $('#resize-drag3').html(modified);

    $('.vertical-arc', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'bottom-vertical'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='bottom-vertical'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('bv-6-'+len);
    $('#resize-drag3').html(modified);

    $('.bottom-vertical', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'inverse-vertical'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='inverse-vertical'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('iv-7-'+len);
    $('#resize-drag3').html(modified);

    $('.inverse-vertical', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'center-bulge'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='center-bulge'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('cb-8-'+len);
    $('#resize-drag3').html(modified);

    $('.center-bulge', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'san-diego'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='san-diego'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('sd-9-'+len);
    $('#resize-drag3').html(modified);

    $('.san-diego', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'half-asleep-arc'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='half-asleep-arc'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('ha-10-'+len);
    $('#resize-drag3').html(modified);

    $('.half-asleep-arc', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else if(settext3 == 'breathing-in'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='breathing-in'>" + word[i] + "</span>";
    }
    $('#resize-drag3').addClass('bi-11-'+len);
    $('#resize-drag3').html(modified);

    $('.breathing-in', '#resize-drag3').css("font-family", fontstyle3);
  } 
  else {
    // $('#resize-drag3').text(insttext3);
  }
}else{
  if(settext3 == 'gravity')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='gravity'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('gv-2-'+len);
  } 
  else if(settext3 == 'trajectory')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='trajectory'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('tj-4-'+len);
  } 
  else if(settext3 == 'straight-line')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='straight-line'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('sl-1-'+len);
  } 
  else if(settext3 == 'full-rev-arc')
  {
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='full-rev-arc'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('fs-3-'+len);
  }
  else if(settext3 == 'vertical-arc'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='vertical-arc'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('va-5-'+len);
  }
  else if(settext3 == 'bottom-vertical'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='bottom-vertical'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('bv-6-'+len);
  }
  else if(settext3 == 'inverse-vertical'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='inverse-vertical'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('iv-7-'+len);
  }
  else if(settext3 == 'center-bulge'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='center-bulge'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('cb-8-'+len);
  }
  else if(settext3 == 'san-diego'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='san-diego'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('sd-9-'+len);
  }
  else if(settext3 == 'half-asleep-arc'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='half-asleep-arc'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('ha-10-'+len);
  }
  else if(settext3 == 'breathing-in'){
    let word = $('#text-string3').val();
    let len = word.length;
    var modified = "";
    for (var i = 0; i < len; i++) {
      modified += "<span class='breathing-in'>" + word[i] + "</span>";
    }
    $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3">'+modified+'</p></div>');
    $('#resize-drag3').addClass('bi-11-'+len);
  }
    else {
    // $('#resize-drag3').text('');
    // $('#tcanvas3').html('<div class="resize-drag resize-drag3" id="drag-resize3"><p id="resize-drag3" font-id="">'+insttext3+'</p></div>');
    $(':checkbox').prop('checked', false);
  }
}

} else {
  $('#text-string3').val(textCheck3);
}


var checkId4 = document.getElementById("resize-drag4");
let insttext4 = $('#text-string').val();
let fontstyle4 = $('#resize-drag4').attr('font-id');

if(checkId4){
  
  $('#resize-drag4').text(insttext4);
  $('#resize-drag4').css("font-family", fontstyle4);

}else{

  // $('#resize-drag4').text('');
  $('#tcanvas4').html('<div class="resize-drag resize-drag4" id="drag-resize4"><p id="resize-drag4" font-id="">'+insttext4+'</p></div>');
  $(':checkbox').prop('checked', false);
}

  // let insttext2 = $('#text-string2').val();
  // // $('#resize-drag2').text('');
  // $('#tcanvas2').html('<div class="resize-drag resize-drag2" id="drag-resize2"><p id="resize-drag2">'+insttext2+'</p></div>');
  // $(':checkbox').prop('checked', false);

  if(selectedItem == "back-view"){
    // alert("view item back");
    document.getElementById("tcanvas").style.display = "none";
    document.getElementById("tcanvas2").style.display = "block";
    document.getElementById("tcanvas3").style.display = "none";
    document.getElementById("tcanvas4").style.display = "block";
    document.getElementById("tcanvas5").style.display = "none";
  }

  if(selectedItem == "front-view"){
    // alert("view item front");
    document.getElementById("tcanvas").style.display = "block";
    document.getElementById("tcanvas2").style.display = "none";
    document.getElementById("tcanvas3").style.display = "block";
    document.getElementById("tcanvas4").style.display = "none";
    document.getElementById("tcanvas5").style.display = "block";
  }

  if(selectedItem == "right-view"){
    // alert("view item right");
    rightSide();
    document.getElementById("tcanvas").style.display = "none";
    document.getElementById("tcanvas2").style.display = "none";
    document.getElementById("tcanvas3").style.display = "none";
    document.getElementById("tcanvas4").style.display = "none";
    document.getElementById("tcanvas5").style.display = "none";
  }

  if(selectedItem == "left-view"){
    // alert("view item left");
    leftSide();
    document.getElementById("tcanvas").style.display = "none";
    document.getElementById("tcanvas2").style.display = "none";
    document.getElementById("tcanvas3").style.display = "none";
    document.getElementById("tcanvas4").style.display = "none";
    document.getElementById("tcanvas5").style.display = "none";
  }

});

// Browse image

$('#chosen-filename').click(function(){

  $('#tcanvas').css('z-index', 0);
  $('#tcanvas4').css('z-index', 0);
  $('#tcanvas5').css('z-index', 1);
  $('#imginimg').css('background-color', 'rgba(34, 153, 238, 0.171)');
});


$('#chosen-filename').blur(function(){

  $('#imginimg').css('background-color', 'transparent');

});

document.getElementById('browse-image').onchange = function(e) {
  $('.resize-drag-img').remove();

  $('.viewItem').removeClass('activeSide');
  $('[data-id="front-view"]').addClass( 'activeSide' );

  var filename = $('#browse-image').val();
  var lastIndex = filename.lastIndexOf("\\");

  if (lastIndex >= 0) {
    filename = filename.substring(lastIndex + 1);
  }
  document.getElementById('chosen-filename').value = filename;

  var img = new Image();
  img.src = URL.createObjectURL(this.files[0]);
  html2canvas(document.getElementById("html-content-holder")).then(function (canvas) {
    var imgTag = document.createElement("img");
    var canvasTag = document.createElement("div");    
    canvasTag.id = "tcanvas";
    imgTag.src = canvas.toDataURL();
    imgTag.id = "onteamname";
    if($('#tcanvas5').length == 0){
      document.getElementById("html-content-holder").appendChild(canvasTag);
    }
    $('#tcanvas5').append('<div class="resize-drag-img"><img id="imginimg"src="'+img.src+'"></div>');
    $('#tcanvas').css('z-index', 0);
    $('#tcanvas2').css('z-index', 0);
    $('#tcanvas3').css('z-index', 0);
    $('#tcanvas4').css('z-index', 0);
    $('#tcanvas5').css('z-index', 1);

    document.getElementById("tcanvas").style.display = "block";
    document.getElementById("tcanvas2").style.display = "none";
    document.getElementById("tcanvas3").style.display = "block";
    document.getElementById("tcanvas4").style.display = "none";
    document.getElementById("tcanvas5").style.display = "block";
  });
  setTimeout(frontSide, 200);
};


$('.color-index', '#pnumber-color').on('click', function() {

  let color = $(this).attr('colorid');

  $('#resize-drag1').css('color', color); 
  $('#resize-drag4').css('color', color);
  
  $("#mateteamname").css("background", color);
  
  $('.color-index').removeClass('active-pnum-color');
  $(this).addClass('active-pnum-color');
  
  $('#pnumber-color').hide();

});


$('.color-index', '#pnumber-outline-color').on('click', function() {

  let color = $(this).attr('colorid');
  
  $("#name-number-outline-color").css("background", color);
  
  $('.color-index').removeClass('active-pnum-outlineColor');
  $(this).addClass('active-pnum-outlineColor');
  
  $('#pnumber-outline-color').hide();

  if($('#resize-drag1').hasClass('stroketext')){
    $('#resize-drag1').css('text-shadow',' -.5px -.5px 0 '+color+', .5px -.5px 0 '+color+', -.5px .5px 0 '+color+', .5px .5px 0 '+color); 
  }

  if($('#resize-drag4').hasClass('stroketext')){
    $('#resize-drag4').css('text-shadow',' -.5px -.5px 0 '+color+', .5px -.5px 0 '+color+', -.5px .5px 0 '+color+', .5px .5px 0 '+color); 
  }

});

$('#name-number-bold').on('change',function(){
  $('#resize-drag1').toggleClass('boldtext');
  $('#resize-drag4').toggleClass('boldtext');
});
$('#name-number-italic').on('change',function(){
  $('#resize-drag1').toggleClass('italictext');
  $('#resize-drag4').toggleClass('italictext');
});
$('#name-number-outline').on('change',function(){
  $('#resize-drag1').toggleClass('stroketext');
  $('#resize-drag4').toggleClass('stroketext');
});


$("#text-style-number").change(function() {
  
  $('#resize-drag1').css("font-family", $(this).val());
  $('#resize-drag4').css("font-family", $(this).val());

  $('#resize-drag1').attr("font-id", $(this).val());
  $('#resize-drag4').attr("font-id", $(this).val());

  let fontstyle1 = $('#resize-drag1').attr('font-id');
  let fontstyle2 = $('#resize-drag4').attr('font-id');

  $('.full-rev-arc', '#resize-drag1').css("font-family", fontstyle1);
  $('.vertical-arc', '#resize-drag1').css("font-family", fontstyle1);
  $('.bottom-vertical', '#resize-drag1').css("font-family", fontstyle1);
  $('.inverse-vertical', '#resize-drag1').css("font-family", fontstyle1);
  $('.center-bulge', '#resize-drag1').css("font-family",  fontstyle1);
  $('.san-diego', '#resize-drag1').css("font-family",  fontstyle1);
  $('.half-asleep-arc', '#resize-drag1').css("font-family",  fontstyle1);
  $('.breathing-in', '#resize-drag1').css("font-family",  fontstyle1);

  $('.full-rev-arc', '#resize-drag4').css("font-family", fontstyle2);
  $('.vertical-arc', '#resize-drag4').css("font-family", fontstyle2);
  $('.bottom-vertical', '#resize-drag4').css("font-family", fontstyle2);
  $('.inverse-vertical', '#resize-drag4').css("font-family", fontstyle2);
  $('.center-bulge', '#resize-drag4').css("font-family", fontstyle2);
  $('.san-diego', '#resize-drag4').css("font-family", fontstyle2);
  $('.half-asleep-arc', '#resize-drag4').css("font-family", fontstyle2);
  $('.breathing-in', '#resize-drag4').css("font-family", fontstyle2);

});

$("#text-style-pname").change(function() {
  
  $('#resize-drag2').css("font-family", $(this).val());

  $('#resize-drag2').attr("font-id", $(this).val());

  let fontstyle = $('#resize-drag2').attr('font-id');

  $('.full-rev-arc', '#resize-drag2').css("font-family", fontstyle);
  $('.vertical-arc', '#resize-drag2').css("font-family", fontstyle);
  $('.bottom-vertical', '#resize-drag2').css("font-family", fontstyle);
  $('.inverse-vertical', '#resize-drag2').css("font-family", fontstyle);
  $('.center-bulge', '#resize-drag2').css("font-family",  fontstyle);
  $('.san-diego', '#resize-drag2').css("font-family",  fontstyle);
  $('.half-asleep-arc', '#resize-drag2').css("font-family",  fontstyle);
  $('.breathing-in', '#resize-drag2').css("font-family",  fontstyle);

});

$("#text-style-tname").change(function() {
  
  $('#resize-drag3').css("font-family", $(this).val());

  $('#resize-drag3').attr("font-id", $(this).val());

  let fontstyle = $('#resize-drag3').attr('font-id');

  $('.full-rev-arc', '#resize-drag3').css("font-family", fontstyle);
  $('.vertical-arc', '#resize-drag3').css("font-family", fontstyle);
  $('.bottom-vertical', '#resize-drag3').css("font-family", fontstyle);
  $('.inverse-vertical', '#resize-drag3').css("font-family", fontstyle);
  $('.center-bulge', '#resize-drag3').css("font-family",  fontstyle);
  $('.san-diego', '#resize-drag3').css("font-family",  fontstyle);
  $('.half-asleep-arc', '#resize-drag3').css("font-family",  fontstyle);
  $('.breathing-in', '#resize-drag3').css("font-family",  fontstyle);

});


$('.color-index', '#pname-color').on('click', function() {

  let color = $(this).attr('colorid');

  $('#resize-drag2').css('color', color); 
  
  $("#mateteamname2").css("background", color);
  
  $('.color-index').removeClass('active-pname-color');
  $(this).addClass('active-pname-color');
  
  $('#pname-color').hide();

});


$('.color-index', '#pname-outline-color').on('click', function() {

  let color = $(this).attr('colorid');
  
  $("#name-number-outline-color2").css("background", color);
  
  $('.color-index').removeClass('active-pname-outlineColor');
  $(this).addClass('active-pname-outlineColor');
  
  $('#pname-outline-color').hide();

  if($('#resize-drag2').hasClass('stroketext2')){
    $('#resize-drag2').css('text-shadow',' -.5px -.5px 0 '+color+', .5px -.5px 0 '+color+', -.5px .5px 0 '+color+', .5px .5px 0 '+color); 
  }

});


$('#name-number-bold2').on('change',function(){
  $('#resize-drag2').toggleClass('boldtext2');
});
$('#name-number-italic2').on('change',function(){
  $('#resize-drag2').toggleClass('italictext2');
});
$('#name-number-outline2').on('change',function(){
  $('#resize-drag2').toggleClass('stroketext2');
});


$('.color-index', '#tname-color').on('click', function() {

  let color = $(this).attr('colorid');

  $('#resize-drag3').css('color', color); 
  
  $("#mateteamname3").css("background", color);
  
  $('.color-index').removeClass('active-tname-color');
  $(this).addClass('active-tname-color');
  
  $('#tname-color').hide();

});


$('.color-index', '#tname-outline-color').on('click', function() {

  let color = $(this).attr('colorid');
  
  $("#name-number-outline-color3").css("background", color);
  
  $('.color-index').removeClass('active-pname-outlineColor');
  $(this).addClass('active-pname-outlineColor');
  
  $('#tname-outline-color').hide();

  if($('#resize-drag3').hasClass('stroketext3')){
    $('#resize-drag3').css('text-shadow',' -.5px -.5px 0 '+color+', .5px -.5px 0 '+color+', -.5px .5px 0 '+color+', .5px .5px 0 '+color); 
  }
});


$('#name-number-bold3').on('change',function(){
  $('#resize-drag3').toggleClass('boldtext3');
});
$('#name-number-italic3').on('change',function(){
  $('#resize-drag3').toggleClass('italictext3');
});
$('#name-number-outline3').on('change',function(){
  $('#resize-drag3').toggleClass('stroketext3');
 });
});


///////T/E/X/T///D/R/A/G///D/R/O/P/////////

const position = { x: 0, y: 0 };
interact('.resize-drag1')
.resizable({
  edges: { top: false, left: false, bottom: true, right: false },
  listeners: {
    move: function (event) {
      
      let { x, y } = event.target.dataset

      x = (parseFloat(x) || 0) + event.deltaRect.left
      y = (parseFloat(y) || 0) + event.deltaRect.top
      Object.assign(event.target.style, {
        width: `${event.rect.width}px`,
        height: `${event.rect.height}px`,
        //transform: `translate(${x}px, ${y}px)`
      })
      w = (event.rect.height - 30) * 0.1;
      h = (event.rect.height - 30) * 0.1;

      let selectedItem = jQuery('#resize-drag1').attr('class');
      // alert("sfdsd");
      // console.log(selectedItem);
      let nameby = '';          
      if(selectedItem == 'arc trajectory')
      {
        nameby = 'rotate(11deg)';
      }
      if(selectedItem == 'arc gravity')
      {
        nameby = 'rotate(-11deg)';
      }

      Object.assign(event.target.dataset, { x, y })
      // var target = event.target
      a = document.getElementById('resize-drag1')
      Object.assign(a.style, {
        // transform: `scale(${w}, ${h})`,
        transform: 'scale('+w+', '+h+') '+nameby+'',
        padding: `10px 0 0 0`,
        margin: `0`
      })
    }
  },
  modifiers: [
    // keep the edges inside the parent
    interact.modifiers.restrictEdges({
      outer: 'parent'
    }),

    // minimum size
    interact.modifiers.restrictSize({
      min: { width: 85, height: 30 },
      max: { width: 85, height: 80 }
    })
  ],
})
.draggable({
  listeners: {
    start (event) {
      //console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy
      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
    
  },
  modifiers: [
    interact.modifiers.restrict({
      restriction: 'parent',
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    })
  ]
});


const position2 = { x: 0, y: 0 };
interact('.resize-drag2')
.resizable({
  edges: { top: false, left: false, bottom: true, right: false },
  listeners: {
    move: function (event) {
      
      let { x, y } = event.target.dataset

      x = (parseFloat(x) || 0) + event.deltaRect.left
      y = (parseFloat(y) || 0) + event.deltaRect.top
      Object.assign(event.target.style, {
        width: `${event.rect.width}px`,
        height: `${event.rect.height}px`,
        //transform: `translate(${x}px, ${y}px)`
      })
      w = (event.rect.height - 30) * 0.1;
      h = (event.rect.height - 30) * 0.1;

      let selectedItem = jQuery('#resize-drag2').attr('class');
      let nameby = '';          
      if(selectedItem == 'arc trajectory')
      {
        nameby = 'rotate(11deg)';
      }
      if(selectedItem == 'arc gravity')
      {
        nameby = 'rotate(-11deg)';
      }

      Object.assign(event.target.dataset, { x, y })
      // var target = event.target
      a = document.getElementById('resize-drag2')
      Object.assign(a.style, {
        // transform: `scale(${w}, ${h})`,
        transform: 'scale('+w+', '+h+') '+nameby+'',
        padding: `10px 0 0 0`,
        margin: `0`
      })
    }
  },
  modifiers: [
    // keep the edges inside the parent
    interact.modifiers.restrictEdges({
      outer: 'parent'
    }),

    // minimum size
    interact.modifiers.restrictSize({
      min: { width: 85, height: 30 },
      max: { width: 85, height: 80 }
    })
  ],
})
.draggable({
  listeners: {
    start (event) {
      //console.log(event.type, event.target)
    },
    move (event) {
      position2.x += event.dx
      position2.y += event.dy
      event.target.style.transform =
        `translate(${position2.x}px, ${position2.y}px)`
    },
    
  },
  modifiers: [
    interact.modifiers.restrict({
      restriction: 'parent',
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    })
  ]
});


const position3 = { x: 0, y: 0 };
interact('.resize-drag3')
.resizable({
  edges: { top: false, left: false, bottom: true, right: false },
  listeners: {
    move: function (event) {
      
      let { x, y } = event.target.dataset

      x = (parseFloat(x) || 0) + event.deltaRect.left
      y = (parseFloat(y) || 0) + event.deltaRect.top
      Object.assign(event.target.style, {
        width: `${event.rect.width}px`,
        height: `${event.rect.height}px`,
        //transform: `translate(${x}px, ${y}px)`
      })
      w = (event.rect.height - 30) * 0.1;
      h = (event.rect.height - 30) * 0.1;

      let selectedItem = jQuery('#resize-drag3').attr('class');
      let nameby = '';          
      if(selectedItem == 'arc trajectory')
      {
        nameby = 'rotate(11deg)';
      }
      if(selectedItem == 'arc gravity')
      {
        nameby = 'rotate(-11deg)';
      }
      
      Object.assign(event.target.dataset, { x, y })
      // var target = event.target
      a = document.getElementById('resize-drag3')
      Object.assign(a.style, {
        // transform: `scale(${w}, ${h})`,
        transform: 'scale('+w+', '+h+') '+nameby+'',
        padding: `10px 0 0 0`,
        margin: `0`
      })
    }
  },
  modifiers: [
    // keep the edges inside the parent
    interact.modifiers.restrictEdges({
      outer: 'parent'
    }),

    // minimum size
    interact.modifiers.restrictSize({
      min: { width: 85, height: 30 },
      max: { width: 85, height: 80 }
    })
  ],
})
.draggable({
  listeners: {
    start (event) {
      //console.log(event.type, event.target)
    },
    move (event) {
      position3.x += event.dx
      position3.y += event.dy
      event.target.style.transform =
        `translate(${position3.x}px, ${position3.y}px)`
    },
    
  },
  modifiers: [
    interact.modifiers.restrict({
      restriction: 'parent',
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    })
  ]
});


const position4 = { x: 0, y: 0 };
interact('.resize-drag4')
.resizable({
  edges: { top: false, left: false, bottom: true, right: false },
  listeners: {
    move: function (event) {
      
      let { x, y } = event.target.dataset

      x = (parseFloat(x) || 0) + event.deltaRect.left
      y = (parseFloat(y) || 0) + event.deltaRect.top
      Object.assign(event.target.style, {
        width: `${event.rect.width}px`,
        height: `${event.rect.height}px`,
        //transform: `translate(${x}px, ${y}px)`
      })
      w = (event.rect.height - 30) * 0.1;
      h = (event.rect.height - 30) * 0.1;

      let selectedItem = jQuery('#resize-drag4').attr('class');
      let nameby = '';          
      if(selectedItem == 'arc trajectory')
      {
        nameby = 'rotate(11deg)';
      }
      if(selectedItem == 'arc gravity')
      {
        nameby = 'rotate(-11deg)';
      }

      Object.assign(event.target.dataset, { x, y })
      // var target = event.target
      a = document.getElementById('resize-drag4')
      Object.assign(a.style, {
        // transform: `scale(${w}, ${h})`,
        transform: 'scale('+w+', '+h+') '+nameby+'',
        padding: `10px 0 0 0`,
        margin: `0`
      })
    }
  },
  modifiers: [
    // keep the edges inside the parent
    interact.modifiers.restrictEdges({
      outer: 'parent'
    }),

    // minimum size
    interact.modifiers.restrictSize({
      min: { width: 85, height: 30 },
      max: { width: 85, height: 80 }
    })
  ],
})
.draggable({
  listeners: {
    start (event) {
      //console.log(event.type, event.target)
    },
    move (event) {
      position4.x += event.dx
      position4.y += event.dy
      event.target.style.transform =
        `translate(${position4.x}px, ${position4.y}px)`
    },
    
  },
  modifiers: [
    interact.modifiers.restrict({
      restriction: 'parent',
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    })
  ]
});
///////T/E/X/T///D/R/A/G///D/R/O/P/////////


///////I/M/A/G/E///D/R/A/G///D/R/O/P//////////

interact('.resize-drag-img')
.resizable({
  edges: { top: true, left: true, bottom: true, right: true },
  listeners: {
    move: function (event) {
      let { x, y } = event.target.dataset
      x = (parseFloat(x) || 0) + event.deltaRect.left
      y = (parseFloat(y) || 0) + event.deltaRect.top
      Object.assign(event.target.style, {
        width: `${event.rect.width}px`,
        height: `${event.rect.height}px`,
        //transform: `translate(${x}px, ${y}px)`
      })
      n = (event.rect.height) * 0.01;
      console.log(n);
      Object.assign(event.target.dataset, { x, y })
      // var target = event.target
      a = document.getElementById('imginimg')
      Object.assign(a.style, {
       transform: `scale(1, ${n})`,
      })
    }
  },
  modifiers: [
    // keep the edges inside the parent
    interact.modifiers.restrictEdges({
      outer: 'parent'
    }),

    // minimum size
    // interact.modifiers.restrictSize({
    //   min: { width: 85, height: 30 },
    //   max: { width: 85, height: 80 }
    // })
  ],
})
.draggable({
  listeners: {
    start (event) {
      //console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy
      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
    
  },
  modifiers: [
    interact.modifiers.restrict({
      restriction: 'parent',
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    })
  ]
});

///////I/M/A/G/E///D/R/A/G///D/R/O/P//////////

jQuery(document).ready(function ($) {

  $('.navtwo').click();

});


jQuery(document).ready(function ($) {

  var $pickerInput;
  $('input').ColorPicker({ 
      onSubmit: function(hsb, hex, rgb, el) {
          $(el).val('#' + rgb);
          $(el).ColorPickerHide();
      },
      onBeforeShow: function () {
          $(this).ColorPickerSetColor(this.value);
          $pickerInput = $(this);
      },
      onHide: function(picker) {
          $pickerInput.val('#' + $(picker).find('#trim-color').val());
      }
  })
  .bind('keyup', function(){
      $(this).ColorPickerSetColor(this.value);
  });
});