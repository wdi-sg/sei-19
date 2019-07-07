function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById("smallerSpace").addEventListener("click", makeFan);

function makeFan(){
    document.getElementById("smallControl").innerHTML = "You get six tries to find me. Click one of the colorful boxes to find me.";

    var body = document.getElementById("central1");

    for (i=1; i<19; i++){
        var holderTemp = document.createElement("div");
        holderTemp.setAttribute("class","box");
        holderTemp.setAttribute("id","box-"+i);
        body.appendChild(holderTemp);
        document.getElementById("box-"+i).addEventListener(
            "mouseover", function(){
                this.style.backgroundColor = getRandomColor();
            });
        document.getElementById("box-"+i).addEventListener(
            "click", check)
    }
    this.remove();
};

var counter = 6;

function check(event){
        if (event.target.id === randomCard){
            document.getElementById("wordOut").innerHTML = "You found me!";
            clearAll('box');
            document.getElementById("smallControl").innerHTML = "Click me to enter the next level.";
            document.getElementById("smallControl").addEventListener("click", secondGame);
        }else{
            event.target.remove();
            counter--;
            document.getElementById("wordOut").innerHTML = "You have "+counter+" tries left!";
            console.log(counter);
            if(counter === 0){
        document.getElementById("wordOut").innerHTML = "GAME OVER!";
        createReload();
    clearAll('box');
    }
        }
    }
    ;
    // };
    var randomCard = "box-" + Math.ceil(Math.random()*18);
    console.log(randomCard);

function createReload(){
var boss = document.getElementById("rightHalf");
var newton = document.createElement("div");
newton.setAttribute("id","reloadDiv");
boss.appendChild(newton);
document.getElementById("reloadDiv").addEventListener("click", madReload);
console.log("something should have happened!");
};

function madReload(){
    location.reload();
}

function clearAll(spaceman){
var parrot = document.getElementsByClassName(spaceman);
while(parrot[0]){
    parrot[0].parentNode.removeChild(parrot[0]);
}
    console.log("I tried to make something happen here!!");
};

function secondGame(){
    var canvas = document.getElementById("central1");
    canvas.setAttribute("class", "levelTwo");
    console.log("Second game is running now!");
    for (i=0; i<12; i++){
        var newBox = document.createElement("div");
        newBox.setAttribute("class", "levelTwoBox");
        newBox.style.backgroundColor = getRandomColor();
        newBox.setAttribute("id", "newBox-"+i);
        console.log("newBox-"+i+" created!");
        canvas.appendChild(newBox);
        document.getElementById("newBox-"+i).addEventListener(
            "mouseover", function(){
                this.style.backgroundColor = getRandomColor();
            });
    }
    this.remove();
    var bullDog = document.getElementById("rightHalf");
    var topRight = document.createElement("div");
    topRight.setAttribute("class", "levelTwoTopRight");
    topRight.innerHTML = "You're in level two!";
    bullDog.appendChild(topRight);
}