var iss,issimg
var spacecraft,spacecraftimg,scimg2,scimg3,scimg4
var hasdocked=false;
var bg
var invi

function preload(){
  issimg=loadImage("iss.png")
  spacecraftimg=loadImage("spacecraft1.png")
  bg=loadImage("spacebg.jpg")
  scimg2=loadImage("spacecraft2.png")
  scimg3=loadImage("spacecraft3.png")
  scimg4=loadImage("spacecraft4.png")
}

function setup() {
  createCanvas(800,400);
  
  
  invi=createSprite(315,142,6,6)
  invi.visible=false

  spacecraft=createSprite(285,240)
  spacecraft.addImage(spacecraftimg)
  spacecraft.scale=0.15
  
  iss=createSprite(330,130);
  iss.addImage(issimg )
  iss.scale=0.25
}

function draw() {
  background(bg);  

  if(!hasdocked){
    spacecraft.x=spacecraft.x+random(-1,1)

    if(keyDown("UP_ARROW")){
      spacecraft.y=spacecraft.y-2
    }

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(scimg3)
      spacecraft.x=spacecraft.x-2
    }

    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(scimg4)
      spacecraft.x=spacecraft.x+2
    }

    if(keyDown("DOWN_ARROW")){
     spacecraft.addImage(scimg2)
    }
  }
  
  if(spacecraft.isTouching(invi)){
    hasdocked=true;
    fill("white")
    textSize(40)
    text("Docking Successful!",357,317)
  }
  
  drawSprites();
}