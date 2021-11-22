class Food{
    constructor(foodStock,lastFed){
    var options={
        isstatic:true

    }
    this.image=loadImage("images/Milk.png")
    foodStock= database.ref('Food')
    foodStock.on("value",readstocks)


function feedDog() {
    dog.addImage(happyDog)
    foodObj.updateFoodStock(foodObj.getFoodStocks()-1)
    database.ref('/').update({
    Food:foodObj.getFoodStocks(),
    FeedTime:Hour()


    })
    
}

function addFood () {
    foodS++
    database.ref('/').update({
       Food:foodS 
    })
    
}


}
display(){
    var v=80,y=100

    imageMode(CENTER)
    image(this.image,720,220,70,70)
}




}