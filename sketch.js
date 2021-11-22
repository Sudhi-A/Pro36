var dog,dogImg
var happyDog
var database,foodS,Foodstock

function preload()
{
  dogImg=loadImage("images/dogImg.png")
  happyDog=loadImage("images/happydogImg.png")
}

function setup() {
  database=firebase.database()
	createCanvas(800,600);
  dog=createSprite(450,250,2,2)
  dog.addImage(dogImg)
  dog.scale=0.25

  feed=createButton("Feed the dog")
  feed.position(500,95)
  feed.mousePressed(Food.feedDog)

  addFood=createButton("Add Food")
  addFood.position(200,95)
  addFood.mousePressed(Food.addFoods)


 
}


function draw() {  
  background('#119326')
  textSize(15)
  if(lastFed>=12){
    text("Last Feed: "+ lastFed%12 + "PM",350,30)
  }else if(lastFed==0){
    text("Last Feed: 12 AM",350,30)
  }else{
    text("Last Feed: "+lastFed+"AM",350,30)
  }
  
    
  
  drawSprites();
  textSize(30)
  fill("black")
  stroke(3)
  text("food left:"+foodS,30,150)
  //add styles here
  textSize(20)
  fill("black")
  stroke(2)
  text("Note:press UP arrow to feed Dago milk",50,50)
}
