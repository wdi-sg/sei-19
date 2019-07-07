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

var counter = 3;

function check(event){
    if(counter === 0){
        document.getElementById("wordOut").innerHTML = "GAME OVER!";
        createReload();
    }else{
        if (event.target.id === randomCard){
            document.getElementById("wordOut").innerHTML = "You found me!";
        }else{
            event.target.remove();
            counter--;
            console.log(counter);
        }
    }
    };
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