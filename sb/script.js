let start = prompt(" Are you ready to play the game?")              
if(start === "yes"){
   alert("Aww rite ! Lets goo!!");
}
else{
   if(start ==="no"){
      alert("Thankx for stopping by..Meet you next time")
   }
}

class Ships{
    constructor(hull,firepower,accuracy,isAlive){
       this.hull = hull;
       this.firepower= firepower;
       this.accuracy = accuracy;
       isAlive = true;
    }
   attack(input){                               
   console.log("Hull: "+ input.hull)                 
    console.log("Firepower:" + this.firepower)
    if(Math.random()< this.accuracy){
      input.hull = input.hull- this.firepower;
     console.log("Opponent has " +  input.hull +" points ");
     
   }
if(input.hull<= 0){
   console.log("Opponent is destroyed");
}
else{
   console.log("Opponent is still alive")
}
}
}

class AlienShip {                                                   
      constructor(hull,firepower,accuracy){
     // super(hull,firepower,accuracy)
      this.hull = Math.floor(Math.random(6, 3) * 4) + 3;
    this.firepower = Math.floor(Math.random(4, 2) * 3) + 2;
    this.accuracy = (Math.floor(Math.random(0.8, 0.6) * 3) + 6) / 10;
  }
  attack(input){                               
   console.log("Hull: "+ input.hull)                 
    console.log("Firepower:" + this.firepower)
    if(Math.random()< this.accuracy){
      input.hull = input.hull- this.firepower;
     console.log("Opponent has " +  input.hull +" points ");
     
   }
if(input.hull<= 0){
   console.log("Opponent is destroyed");
}
else{
   console.log("Good Try")
}
}
}
function getRandom(a,b){                                //function to generate random values for the ships in an array
    return Math.floor(Math.random() * a )+ b;
}


const USS = new Ships('5',' 15', '7');
const alienShip = new AlienShip(getRandom(4,3),getRandom(3,2),getRandom(.3,.9));
//created a sinhgle ship and single uss ship to check functionality


//Created 6 alien ships
 const alienShip1 = new AlienShip(getRandom(3,6),getRandom(2,4),getRandom(.3,.9));
 const alienShip2 = new AlienShip(getRandom(4,3),getRandom(3,2),getRandom(.3,.9));
 const alienShip3 = new AlienShip(getRandom(3,6),getRandom(1,4),getRandom(.3,.9));
 const alienShip4 = new AlienShip(getRandom(4,3),getRandom(3,2),getRandom(.3,.9));
 const alienShip5 = new AlienShip(getRandom(6,3),getRandom(4,2),getRandom(.3,.9));
 const alienShip6 = new AlienShip(getRandom(4,3),getRandom(3,2),getRandom(.3,.9));

 const alienShipGroup =[alienShip1,alienShip2,alienShip3,alienShip4,alienShip5,alienShip6];
 //stored the 6 alien ships in an array


 function battle(USS ,alienShipGroup) {        //creating a function for the battle between uss ship and shipsarray
     USS.attack(alienShipGroup[0]);           // the uss ship attacks the alien ship[0](the first ship in an array)
    if (alienShipGroup[0].hull<0){            //if the hull of alienship[0] is less than zero its destroyed and pops out of the game
      alienShipGroup.shift()                 // the the next alienship in the array gets ready to attack
    }
    else {
      alienShipGroup.attack(USS);             //if the alienship[0] hull is greater than 0,it attacks the uss ship back
    }
     
 }

  battle(USS ,alienShipGroup);

 USS.attack(alienShip3);
 alienShip.attack(USS);
console.log(alienShip.firepower);
console.log(alienShip.accuracy);
USS.attack(alienShip);

//document.querySelector(".button").addEventListener("click", battle);


//creating a button using a create element
// let x = document.createElement("BUTTON");
// let t =document.createTextNode("Ready for the battle?")
// x.appendChild(t);
// document.body.appendChild(x);