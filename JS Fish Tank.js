background(89, 216, 255);

var drawFish = function(centerX, centerY, bodyLength, bodyHeight, bodyColor){

noStroke();
fill(bodyColor);
ellipse(centerX, centerY, bodyLength, bodyHeight);

var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);

// eye
fill(235, 12, 235);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);

};

drawFish(230, 177, 100, 38, 24);
drawFish(98, 106, 112, 113, 122);
drawFish(189, 239, 222, 57, 234);
drawFish(165, 333, 219, 125, -173);


//Bonus Bubbles

var drawBubbles = function(centerX, centerY, bubbleWidth, bubbleHeight){

noStroke();
fill(9, 32, 240);
ellipse(centerX, centerY, bubbleWidth, bubbleHeight);

};

drawBubbles(164, 48, 16, 16);
drawBubbles(158, 72, 22, 22);
drawBubbles(294, 171, 16, 16);
drawBubbles(306, 153, 10, 10);
drawBubbles(316, 241, 24, 21);
drawBubbles(335, 233, 14, 14);
drawBubbles(300, 350, 30, 30);
drawBubbles(331, 350, 17, 17);

//Bonus MouseClicked Fish

mouseClicked = function(centerX, centerY, bodyLength, bodyHeight, bodyColor){
    drawFish(mouseX, mouseY, 60, 40, 250);
};
