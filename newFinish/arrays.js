function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById("gallery").addEventListener("click", firstGame);

function firstGame(){
    document.getElementById("story").innerHTML = "You get six tries to find me. Click one of the colorful boxes to find me.";
    var square = document.getElementById("canvas");
    var degree = 20;
    for (i=1; i<19; i++){
        var makeDiv = document.createElement("div");
        makeDiv.setAttribute("class","firstGameBox");
        makeDiv.style.backgroundColor = getRandomColor();
        makeDiv.setAttribute("id","firstGameBox-"+i);
        makeDiv.style.transform = "rotate("+degree+"deg)";
        square.appendChild(makeDiv);
        degree = degree + 20;
        document.getElementById("firstGameBox-"+i).addEventListener("mouseover", function(){
                this.style.backgroundColor = getRandomColor();
            });
        document.getElementById("firstGameBox-"+i).addEventListener("click", firstGameCheck);
    }
    this.remove();
}

var firstGameCounter = 6;

var firstGameRandomBox = "firstGameBox-" + Math.ceil(Math.random()*18);
console.log(firstGameRandomBox);

function pageReload(){
    location.reload();
}

function clearContent(content){
var classToClear = document.getElementsByClassName(content);
while(classToClear[0]){
    classToClear[0].parentNode.removeChild(classToClear[0]);
}
};

function createReload(){
var insertPlace = document.getElementById("page");
var makeElement = document.createElement("div");
makeElement.setAttribute("id","reloadDiv");
insertPlace.appendChild(makeElement);
document.getElementById("reloadDiv").addEventListener("click",
    pageReload);
};

function firstGameCheck(event){
        if (event.target.id === firstGameRandomBox){
            document.getElementById("output").innerHTML = "You found me!";
            clearContent('firstGameBox');
            document.getElementById("story").innerHTML = "Click me to enter the next level.";
            // document.getElementById("story").addEventListener("click", secondGame);
        }else{
            event.target.remove();
            firstGameCounter--;
            document.getElementById("output").innerHTML = "You have "+firstGameCounter+" tries left!";
            if(firstGameCounter === 0){
        document.getElementById("output").innerHTML = "GAME OVER!";
        createReload();
    clearContent('firstGameBox');
    }
        }
    }
    ;