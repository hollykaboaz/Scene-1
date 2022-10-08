highlightedColor = "";
backgroundActivity = false;
titleActivity = false;
paragraphActivity = false;
titleColorActivity = false;
paragraphColorActivity = false;
// The function is called  when an element is being dragged over the console
function allowDrop(ev) {
  // prevent page any default effects
  ev.preventDefault();
}

// This function is called when an element is starting to drag ( in opur case a button)
function drag(ev) {
  // set the dragged item's ID as it's data it carries
  ev.dataTransfer.setData("text", ev.target.id);
  // set the dragged item's IMAGE to image of backgroundColor words
  const img = new Image();
  img.src = "backgroundColor.png";
  ev.dataTransfer.setDragImage(img,0,0);
}

// This function is called once a button is dropped on the console
// changes background color and adds console code
function dropColor(ev, text) {
  // prevent any default effects
  ev.preventDefault();
  // retrieve the dragged item's data ( the button's id ) and store into 'buttonID'
  var buttonID = ev.dataTransfer.getData("text");
  // get the button element
  var button = document.getElementById(buttonID);
  // get color of button
  var buttonColor = window.getComputedStyle(button).backgroundColor;
  // convert rgb color to hex
  buttonColor = '#' + buttonColor.slice(4,-1).split(',').map(x => (+x).toString(16).padStart(2,0)).join('');
  // Change website background color depending on the buttonID
  website = document.getElementById('website');
  website.style.backgroundColor = buttonColor;
  // Change and show background color code
  document.getElementById('bodySelector').style.display = "block";
  document.getElementById('closer').style.display = "block";
  document.getElementById('bgColorValue').innerHTML = buttonColor;
  document.getElementById('bgColorValue').style.color = buttonColor;
  document.getElementById('bgColorAttritbute').style.display = "inline";
  // mark activity as completed
  backgroundActivity = true;
  // setting hgihlighted color to chosen bg color
  highlightedColor = buttonColor;
}

// checks if current activity is complete if so moves to next actvity
function submitBgActivity(activity){
  console.log(backgroundActivity);
  if(backgroundActivity == true){
    console.log("here");
    // change the submit button to now check for title acitivty completion
    document.getElementById('button11').setAttribute('onclick','submitTitleActivity()');
    document.getElementById('activityTitle').innerHTML = "The <span style = 'color: #AFE24F'>&#60;h1&#62;</span> to <span style = 'color: #AFE24F;'>&#60;h6&#62;</span> HTML elements represent six levels of section headings. <span style = 'color: #AFE24F;'>&#60;h1&#62;</span> is the highest section level and <span style = 'color: #AFE24F;'>&#60;h6&#62;</span> is the lowest.";
    // remove bg activity instructions
    document.getElementById('bg').remove();
    //remove color choice acitivity
    document.getElementById('bgActivity').style.display = "none";
    // show title acivity instructions
    document.getElementById('title').style.display = "inline";
    // show input field
    document.getElementById('titleActivity').style.display = "block";
    // getting title input field and setting
    var titleInputField = document.getElementById('ip');
    console.log(titleInputField);
    titleInputField.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // change website title and title value to text in input field
      document.getElementById('websiteTitle').style.display = "inline";
      document.getElementById("websiteTitle").innerHTML = titleInputField.value;
      document.getElementById("titleValue").innerHTML = titleInputField.value;
      document.getElementById("titleValue").style.color = highlightedColor;
      document.getElementById('titleCode').style.display = "inline";
      titleInputField.value = "";
      titleActivity = true;
    }
    });

  }
  else{
    console.log("Did not complete acitivty")
  }
}
function submitTitleActivity(activity){
    if(titleActivity == true){
      console.log("Title Activity was completed");
      // change the submit button to now check for title acitivty completion
      document.getElementById('button11').setAttribute('onclick','submitParagraphActivity()');
      document.getElementById('activityTitle').innerHTML = "The <span style = 'color: #AFE24F'>&#60;p&#62;</span> HTML element represents a paragraph. ";
      // remove title instructions
      document.getElementById('title').remove();
      //remove title acitivity
      document.getElementById('titleActivity').style.display = "none";
      // show paragraph acivity instructions
      document.getElementById('paragraph').style.display = "inline";
      // show input field
      document.getElementById('paragraphActivity').style.display = "inline";
      // getting paragraph input field
      var paragraphInputField = document.getElementById('ip2');
      console.log(paragraphInputField);
      paragraphInputField.addEventListener("keypress", function(event) {
      // If the user presses the "Enter" key on the keyboard
      if (event.key === "Enter") {
        var usertext = document.getElementById('ip2').value;
        // Cancel the default action, if needed
        event.preventDefault();
        // change website paragraph and paragraph value to text in input field
        // show paragraph element on user's website
        document.getElementById('websiteParagraph').style.display = "block";
        document.getElementById("websiteParagraph").innerHTML = usertext;
        document.getElementById("paragraphValue").innerHTML = usertext;
        document.getElementById("paragraphValue").style.color = highlightedColor;
        document.getElementById('paragraphCode').style.display = "inline";
        paragraphInputField.value = "";
        paragraphActivity = true;
      }
      });

    }
    else{
      console.log("Did not complete acitivty");
      paragraphActivity = false;
    }
}
function submitParagraphActivity(activity){
    if(paragraphActivity == true){
      console.log("Paragraph Activity was completed");
      // change the submit button to now check for title acitivty completion
      document.getElementById('button11').setAttribute('onclick','submitFontColorActivity()');
      document.getElementById('activityTitle').innerHTML = "Adding a Font Color";
      // remove title instructions
      document.getElementById('paragraph').remove();
      //remove title acitivity
      document.getElementById('paragraphActivity').style.display = "none";
      // // show paragraph acivity instructions
      // document.getElementById('paragraph').style.display = "inline";
      // show input field
      document.getElementById('fontColorActivity').style.display = "inline";
      // getting paragraph input field
      var colorInputField = document.getElementById('ip3');
      var colorInputField2 = document.getElementById('ip4');
      colorInputField.addEventListener("input", colorPickerTitle, false);
      colorInputField2.addEventListener("input", colorPickerParagraph, false);
      function colorPickerTitle(event) {
          document.getElementById('websiteTitle').style.color = event.target.value;
          document.getElementById('titleColorCode').style.display = "inline";
          document.getElementById('titleColorValue').innerHTML = event.target.value;
          document.getElementById('titleColorValue').style.color = event.target.value;
          titleColorActivity = true;
      }
      function colorPickerParagraph(event) {
          document.getElementById('websiteParagraph').style.color = event.target.value;
          document.getElementById('paragraphColorValue').innerHTML = event.target.value;
          document.getElementById('paragraphColorCode').style.display = "block";
          document.getElementById('paragraphColorValue').style.color = event.target.value;
          paragraphColorActivity = true;
      }
    }
    else{
      console.log("Did not complete acitivty");
    }
}
function submitFontColorActivity(activity){
    if(paragraphColorActivity == true && titleColorActivity == true){
      console.log("Paragraph Activity was completed");
      // change the submit button to now check for title acitivty completion
      document.getElementById('button11').setAttribute('onclick','submitButtonStyleActivity()');
      document.getElementById('activityTitle').innerHTML = "The <span style = 'color: #AFE24F'>&#60;button&#62;</span> HTML element is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology.";
      //remove title acitivity
      document.getElementById('fontColorActivity').style.display = "none";
      // // show paragraph acivity instructions
      // document.getElementById('paragraph').style.display = "inline";
      // show input field
      document.getElementById('buttonStylingActivity').style.display = "inline";
      // show button on user's website
      document.getElementById('websiteButton').style.display = "inline";
      // show button code
      document.getElementById('buttonValue').style.color = highlightedColor;
      document.getElementById('buttonCode').style.display = "inline";
      // button name
      var buttonInputField = document.getElementById('ip10');
      console.log(buttonInputField);
      buttonInputField.addEventListener("keypress", function(event) {
      // If the user presses the "Enter" key on the keyboard
      if (event.key === "Enter") {

        var text = buttonInputField.value;
        console.log(text);
        // Cancel the default action, if needed
        event.preventDefault();
        // change website paragraph and paragraph value to text in input field
        // show paragraph element on user's website
        document.getElementById('buttonHTMLCode').style.display = "inline";
        document.getElementById("buttonValue").innerHTML = text;
        document.getElementById('websiteButton').innerHTML = text;
        document.getElementById("buttonValue").style.color = highlightedColor;
        buttonInputField.value = "";
      }
      });
      // border checkbox input
      var addBorder = document.getElementById('border');
      border.addEventListener('change', () => {
      if (border.checked) {
        document.getElementById('websiteButton').style.border = '5px solid black';
        document.getElementById('buttonBorderCode').style.display = "inline";
      }else{
        document.getElementById('websiteButton').style.border = '';
        document.getElementById('buttonBorderCode').style.display = "none";
      }
    });
    // border color colorInput
    var colorInputField3 = document.getElementById('ip5');
    colorInputField3.addEventListener("input", colorPickerBorder, false);
    function colorPickerBorder(event) {
      document.getElementById('buttonCode').style.display = "block";
      document.getElementById('buttonBorderCode').style.display = "block";
      document.getElementById('buttonBorderValue').innerHTML = event.target.value;
      document.getElementById('buttonBorderValue').style.color = event.target.value;
      document.getElementById('websiteButton').style.borderColor = event.target.value;
    }
    // button background color
    var colorInputField4 = document.getElementById('ip6');
    colorInputField4.addEventListener("input", colorPickerButton, false);
    function colorPickerButton(event) {
      document.getElementById('buttonCode').style.display = "block";
      document.getElementById('buttonBgCode').style.display = "block";
      document.getElementById('buttonBgValue').innerHTML = event.target.value;
      document.getElementById('buttonBgValue').style.color = event.target.value;
        document.getElementById('websiteButton').style.backgroundColor = event.target.value;
    }


    }
    else{
      console.log("Did not complete acitivty");
    }
}



// activate first color picker on start
function activateColorPicker() {

    var backgroundColorInput = document.getElementById('ipbg');
    backgroundColorInput.addEventListener("input", colorPickerBg, false);
    function colorPickerBg(event) {
      // Change website background color depending on the buttonID
      website = document.getElementById('website');
      website.style.backgroundColor = event.target.value;
      // Change and show background color code
      document.getElementById('bodySelector').style.display = "block";
      document.getElementById('closer').style.display = "block";
      document.getElementById('bgColorValue').innerHTML = event.target.value;
      document.getElementById('bgColorValue').style.color = event.target.value;
      document.getElementById('bgColorAttritbute').style.display = "inline";
      document.getElementById('website').style.backgroundColor = event.target.value;
      highlightedColor = event.target.value;
      backgroundActivity = true;
    }
}

window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 0.1;
  document.body.addEventListener("mousemove", function () {
    audio.play()
});
});
