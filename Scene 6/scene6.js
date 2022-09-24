// Allows user to drop colors on console
var currentActivity = 1
var currentBgColor = "";
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dropColor(ev, text) {
  ev.preventDefault();
  // data = dragged items ID
  var data = ev.dataTransfer.getData("text");
  var color = "";
  chosenButton = document.getElementById(data);
  console.log(chosenButton);
  // Change website background color depending on the buttonID
  website = document.getElementById('website');
  theConsole = document.getElementById('console');
  removeAllChildNodes(theConsole);
  switch (data) {
    case "button1":
      color = '#58A6C3';
      website.style.backgroundColor = color;
      break;
    case "button2":
      color = '#7DE0E0';
      website.style.backgroundColor = color;
      break;
    case "button3":
      color = '#AFE24F'
      website.style.backgroundColor = color;
      break;
    case "button4":
      color ='#FBF168';
      website.style.backgroundColor = color;
      break;
    case "button5":
      color ='#F3AF3D';
      website.style.backgroundColor = color;
      break;
    case "button6":
      color ='#E7817A';
      website.style.backgroundColor = color;
      break;
    case "button7":
      color = '#DE5CAB';
      website.style.backgroundColor = color;
      break;
    case "button8":
      color ='#CC88F9';
      website.style.backgroundColor = color;
      break;
    case "button9":
      color = '#873CF4';
      website.style.backgroundColor = color;
      break;
    case "button10":
      color = '#353839';
      website.style.backgroundColor = color;
      break;
    default:
      color = 'black';
      website.style.backgroundColor = color;
      break;
  }
  // create a new block of code
  const newDiv = document.createElement("div");
  // opening curly brace and selector
  var newContent = document.createTextNode("body {");
  newDiv.appendChild(newContent);
  //adding line break
  var br = document.createElement("br");
  newDiv.appendChild(br);
  // background-color line
  newContent = document.createTextNode("\xA0\xA0background-color: ");
  newDiv.appendChild(newContent);
  // color coded hex
  const colorfulHex = document.createElement("span");
  colorfulHex.innerHTML = color;
  colorfulHex.style.color = color;
  newDiv.appendChild(colorfulHex);
  // ending semicolon
  newContent = document.createTextNode(";");
  newDiv.appendChild(newContent);
  //break
  var br = document.createElement("br");
  newDiv.appendChild(br);
  // closing curly brace
  newContent = document.createTextNode("}");
  newDiv.appendChild(newContent);
  // styling new block of code
  newDiv.style.color = "white";
  ev.target.appendChild(newDiv);
  // swtich to next activity
  currentBgColor = color;
  currentActivity = 2;
}


function removeAllChildNodes(parent) {
  console.log("children removed");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function nextActivity(){
  if(currentActivity == 2){
    window.prompt("Which webbie handles all the styling of your webpage?");
    window.alert("The answer was CSS Webbie :)");
    activity1 = document.getElementById('activity');
    activity1.innerHTML = '';
    // Creating acitivy 2: Adding title
    document.getElementById('taskTitle').innerHTML = "CREATE A TITLE";
    var form = document.createElement("form");
    form.setAttribute('id','form');
    form.setAttribute('onSubmit',"changeTitle()");
    form.setAttribute('target','_self');
    var ip = document.createElement("input");
    ip.setAttribute('type','text');
    // ip.setAttribute('draggable','true');
    ip.setAttribute('id','task');
    ip.setAttribute('placeholder','Type Your Website Title');
    form.appendChild(ip);
    activity1.appendChild(form);
  }
  if(currentActivity == 3){
    removeAllChildNodes(theConsole);
    activity1 = document.getElementById('activity');
    activity1.innerHTML = '';
    // Creating acitivy 2: Adding title
    document.getElementById('taskTitle').innerHTML = "BACKGROUND IMAGE";
    var form = document.createElement("form");
    form.setAttribute('id','form');
    form.setAttribute('onSubmit',"bgImage()");
    form.setAttribute('target','_self');
    var ip = document.createElement("input");
    ip.setAttribute('type','text');
    // ip.setAttribute('draggable','true');
    ip.setAttribute('id','task');
    ip.setAttribute('placeholder','Paste image address');
    form.appendChild(ip);
    activity1.appendChild(form);
  }
}

function changeTitle() {
  event.preventDefault();
  var title = document.getElementById("task").value;
  // Update Website Title
  document.getElementById('websiteTitle').innerHTML = title;
  // Clear console and add h1 code to it
  removeAllChildNodes(theConsole);
  var titleString = "<h1> " + title + " </h1>";
  // create a new div
  const newDiv = document.createElement("div");
  // text node for opening tag
  var newContent = document.createTextNode("<h1> ");
  newDiv.appendChild(newContent);
  // color coded title
  var colorfulTitle = document.createElement("span");
  colorfulTitle.innerHTML = title;
  colorfulTitle.style.color = currentBgColor;
  newDiv.appendChild(colorfulTitle);
  var newContent2 = document.createTextNode(" </h1>");
  newDiv.appendChild(newContent2);
  newDiv.style.color = "white";
  theConsole.appendChild(newDiv);
  currentActivity = 3;
}


function bgImage() {
  event.preventDefault();
  var imageLink = document.getElementById("task").value;
  // Update Website Background
  document.getElementById('website').style.backgroundImage = "url('" + imageLink + "')";
  document.getElementById('website').style.backgroundSize = "cover";
  document.getElementById('website').style.backgroundPosition = "center";
  currentActivity = 4;
}
