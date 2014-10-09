/// <reference path="jquery-2.1.1.js" />
/// <reference path="createjs-2013.12.12.min.js" />
var stage;
var myButton;

function init() {
    stage = new createjs.Stage(document.getElementById('canvas'));
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", handleTick());

    drawSlotMachine();
}

function handleTick() {
    stage.update();
}

function drawSlotMachine() {
    var slotMachine = new createjs.Bitmap("img/slotmachine.jpg");
    // Scalex/ScaleY multiplies the image for x or y coordinate (1.2 makes it 20% bigger)
    slotMachine.scaleX = 1.2;
    slotMachine.scaleY = 1.2;
    // Moves slotMachine 100 px to right
    slotMachine.x += 100;


    myButton = new createjs.Shape("img/button.jpg");
    //Shrink button
    myButton.scaleX = 0.4;
    myButton.scaleY = 0.4;
    //Position button
    myButton.x = 280;
    myButton.y = 400;

    stage.addChild(slotMachine, myButton);

    myButton.addEventListener("click", clickHandler());
    myButton.addEventListener("mouseover", overHandler());
    myButton.addEventListener("mouseout", outHandler());
}

function clickHandler() {
    alert("You clicked me!");
}

function overHandle() {
    // Make button turn transparent
    myButton.alpha = 0.5;
}

function outHandle() {
    // Make button turn transparent
    myButton.alpha = 1.0;
}