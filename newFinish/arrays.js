function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

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

document.getElementById("gallery").addEventListener("click", firstGame);

var firstGameCounter;
var firstGameRandomBox;
var levelCounter = 0;

function firstGame(){
    firstGameCounter = 12;
    firstGameRandomBox = "firstGameBox-" + Math.ceil(Math.random()*18);
    console.log(firstGameRandomBox);
    document.getElementById("story").innerHTML = "You get twelve tries to find me. Click one of the colorful boxes to find me.";
    levelCounter++;
    document.getElementById("output").innerHTML="Level "+levelCounter;
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

function firstGameCheck(){
    if (event.target.id === firstGameRandomBox){
        document.getElementById("output").innerHTML = "You found me!";
        clearContent('firstGameBox');
        document.getElementById("story").innerHTML = "Click me to enter the next level.";
        document.getElementById("story").addEventListener("click", secondGame);
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
    };

var secondGameCounter;
var secondGameRandomBox;

function secondGame(){
    secondGameCounter = 6;
    secondGameRandomBox = "secondGameBox-" + Math.ceil(Math.random()*12);
    console.log(secondGameRandomBox);
    levelCounter++;
    document.getElementById("output").innerHTML="Level "+levelCounter;
    var square = document.getElementById("canvas");
    square.setAttribute("class", "stage");
    console.log("Second game is running now!");
    for (i=1; i<13; i++){
        var makeDiv = document.createElement("div");
        makeDiv.setAttribute("class", "secondGameBox");
        makeDiv.style.backgroundColor = getRandomColor();
        makeDiv.setAttribute("id", "secondGameBox-"+i);
        square.appendChild(makeDiv);
        document.getElementById("secondGameBox-"+i).addEventListener("mouseover", function(){
                this.style.backgroundColor = getRandomColor();
            });
        document.getElementById("secondGameBox-"+i).
        addEventListener("click", secondGameCheck);
    }
    this.remove();
    var insertPlace = document.getElementById("page");
    var topRightDiv = document.createElement("div");
    topRightDiv.setAttribute("class", "topRight");
    topRightDiv.setAttribute("id", "story");
    topRightDiv.innerHTML = "You're in level "+levelCounter+"! You have six tries to find me again!";
    insertPlace.appendChild(topRightDiv);
    var bottomRightDiv = document.createElement("div");
    bottomRightDiv.setAttribute("class", "bottomRight");
    bottomRightDiv.setAttribute("id", "gallery");
    bottomRightDiv.innerHTML = "Click boxes!";
    insertPlace.appendChild(bottomRightDiv);
}

function secondGameCheck(){
        if (event.target.id === secondGameRandomBox){
            document.getElementById("output").innerHTML = "You found me!";
            clearContent('secondGameBox');
            document.getElementById("gallery").innerHTML = "Next level!";
            var square = document.getElementById("canvas");
            square.setAttribute("class", "topLeft");
            document.getElementById("gallery").addEventListener
            ("click", firstGame);
        }else{
            event.target.remove();
            secondGameCounter--;
            document.getElementById("output").innerHTML = "You have "+secondGameCounter+" tries left!";
            if(secondGameCounter === 0){
        document.getElementById("output").innerHTML = "GAME OVER!";
        document.getElementById("gallery").remove();
        createReload();
    clearContent('secondGameBox');
    }
        }
    }
    ;