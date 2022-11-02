highlightedColor = "";
backgroundActivity = false;
titleActivity = false;
paragraphActivity = false;
titleColorActivity = false;
paragraphColorActivity = false;
buttonStylingActivity = false;
linksActivity = false;
backgroundImageActivity = false;
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
  // quick glow
  setTimeout(function() {
    document.getElementById('bgColorAttritbute').classList.add('mat-cancel-color');
    document.getElementById('bgColorAttritbute').classList.add('mat-cancel-color');
  },1);
  // remove glow
  document.getElementById('bgColorAttritbute').classList.remove('mat-cancel-color');
  document.getElementById('bgColorAttritbute').classList.remove('mat-cancel-color');
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
    document.getElementById('activityTitle').innerHTML = "The <span style = 'color: #AFE24F'>&#60;h1&#62;</span> to <span style = 'color: #AFE24F;'>&#60;h6&#62;</span> HTML elements represent six levels of section headings. <span style = 'color: #AFE24F;'>&#60;h1&#62;</span> is the biggest size and <span style = 'color: #AFE24F;'>&#60;h6&#62;</span> is the smallest size.";
    // remove bg activity instructions
    document.getElementById('bg').remove();
    //remove color choice acitivity
    document.getElementById('bgActivity').style.display = "none";
    // show title acivity instructions
    // document.getElementById('title').style.display = "inline";
    // show input field
    document.getElementById('titleActivity').style.display = "block";
    // getting title input field and setting
    var titleInputField = document.getElementById('ip');
    console.log(titleInputField);
    titleInputField.addEventListener("keyup", function(event) {
    // If the user presses the "Enter" key on the keyboard
    // if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // change website title and title value to text in input field
      document.getElementById('websiteTitle').style.display = "inline";
      document.getElementById("websiteTitle").innerHTML = titleInputField.value;
      document.getElementById("websiteTitle2").innerHTML = titleInputField.value;
      document.getElementById("websiteTitle3").innerHTML = titleInputField.value;
      document.getElementById("websiteTitle4").innerHTML = titleInputField.value;
      document.getElementById("websiteTitle5").innerHTML = titleInputField.value;
      document.getElementById("websiteTitle6").innerHTML = titleInputField.value;
      document.getElementById("titleValue").innerHTML = titleInputField.value;
      document.getElementById("titleValue").style.color = highlightedColor;
      document.getElementById('titleCode').style.display = "inline";
      // quick glow
      setTimeout(function() {
        document.getElementById('titleCode').classList.add('mat-cancel-color');
      },1);
      // remove glow
      document.getElementById('titleCode').classList.remove('mat-cancel-color');
      document.getElementById('titleCode').classList.remove('mat-cancel-color');
      document.getElementById("h1check").checked = true;
      titleActivity = true;
    // }
    });

    // border checkbox input
    var h1checkBox = document.getElementById('h1check');
    h1checkBox.addEventListener('change', () => {
    if (h1checkBox.checked) {
      // change h target
      document.getElementById('chosenHeader').innerHTML= 'h1';
      document.getElementById('chosenHeaderCloser').innerHTML= 'h1';
      // quick glow
      setTimeout(function() {
        document.getElementById('chosenHeader').classList.add('mat-cancel-color');
        document.getElementById('chosenHeaderCloser').classList.add('mat-cancel-color');
      },1);
      // remove glow
      document.getElementById('chosenHeader').classList.remove('mat-cancel-color');
      document.getElementById('chosenHeaderCloser').classList.remove('mat-cancel-color');

      // unshow all other headings
      document.getElementById('websiteTitle3').style.display = 'none';
      document.getElementById('websiteTitle2').style.display = 'none';
      document.getElementById('websiteTitle4').style.display = 'none';
      document.getElementById('websiteTitle5').style.display = 'none';
      document.getElementById('websiteTitle6').style.display = 'none';
      // uncheck other boxes
      document.getElementById("h2check").checked = false;
      document.getElementById("h3check").checked = false;
      document.getElementById("h4check").checked = false;
      document.getElementById("h5check").checked = false;
      document.getElementById("h6check").checked = false;
      // show h1 on webpage
      document.getElementById('websiteTitle').style.display = 'inline';
    }else{
    }
  });

  var h2checkBox = document.getElementById('h2check');
  h2checkBox.addEventListener('change', () => {
  if (h2checkBox.checked) {
    // change h target
    document.getElementById('chosenHeader').innerHTML= 'h2';
    document.getElementById('chosenHeaderCloser').innerHTML= 'h2';

    // quick glow
    setTimeout(function() {
      document.getElementById('chosenHeader').classList.add('mat-cancel-color');
      document.getElementById('chosenHeaderCloser').classList.add('mat-cancel-color');
    },1);
    // remove glow
    document.getElementById('chosenHeader').classList.remove('mat-cancel-color');
    document.getElementById('chosenHeaderCloser').classList.remove('mat-cancel-color');
    // unshow all other headings
    document.getElementById('websiteTitle').style.display = 'none';
    document.getElementById('websiteTitle3').style.display = 'none';
    document.getElementById('websiteTitle4').style.display = 'none';
    document.getElementById('websiteTitle5').style.display = 'none';
    document.getElementById('websiteTitle6').style.display = 'none';
    // uncheck all other boxes
    document.getElementById("h1check").checked = false;
    document.getElementById("h3check").checked = false;
    document.getElementById("h4check").checked = false;
    document.getElementById("h5check").checked = false;
    document.getElementById("h6check").checked = false;
    // show h1 on webpage
    document.getElementById('websiteTitle2').style.display = 'inline';
  }else{

    // some code
    document.getElementById('websiteTitle2').style.display = 'none';
  }
});

var h3checkBox = document.getElementById('h3check');
h3checkBox.addEventListener('change', () => {
if (h3checkBox.checked) {
  // change h target
  document.getElementById('chosenHeader').innerHTML= 'h3';
  document.getElementById('chosenHeaderCloser').innerHTML= 'h3';

  // quick glow
  setTimeout(function() {
    document.getElementById('chosenHeader').classList.add('mat-cancel-color');
    document.getElementById('chosenHeaderCloser').classList.add('mat-cancel-color');
  },1);
  // remove glow
  document.getElementById('chosenHeader').classList.remove('mat-cancel-color');
  document.getElementById('chosenHeaderCloser').classList.remove('mat-cancel-color');
  // unshow all other headings
  document.getElementById('websiteTitle').style.display = 'none';
  document.getElementById('websiteTitle2').style.display = 'none';
  document.getElementById('websiteTitle4').style.display = 'none';
  document.getElementById('websiteTitle5').style.display = 'none';
  document.getElementById('websiteTitle6').style.display = 'none';

  // uncheck all other boxes
  document.getElementById("h1check").checked = false;
  document.getElementById("h2check").checked = false;
  document.getElementById("h4check").checked = false;
  document.getElementById("h5check").checked = false;
  document.getElementById("h6check").checked = false;
  // show h1 on webpage
  document.getElementById('websiteTitle3').style.display = 'inline';
}else{
  // some code
  document.getElementById('websiteTitle3').style.display = 'none';
}
});

var h4checkBox = document.getElementById('h4check');
h4checkBox.addEventListener('change', () => {
if (h4checkBox.checked) {
  // change h target
  document.getElementById('chosenHeader').innerHTML= 'h4';
  document.getElementById('chosenHeaderCloser').innerHTML= 'h4';

  // quick glow
  setTimeout(function() {
    document.getElementById('chosenHeader').classList.add('mat-cancel-color');
    document.getElementById('chosenHeaderCloser').classList.add('mat-cancel-color');
  },1);
  // remove glow
  document.getElementById('chosenHeader').classList.remove('mat-cancel-color');
  document.getElementById('chosenHeaderCloser').classList.remove('mat-cancel-color');


  // unshow all other headings
  document.getElementById('websiteTitle').style.display = 'none';
  document.getElementById('websiteTitle2').style.display = 'none';
  document.getElementById('websiteTitle3').style.display = 'none';
  document.getElementById('websiteTitle5').style.display = 'none';
  document.getElementById('websiteTitle6').style.display = 'none';

  // uncheck all other boxes
  document.getElementById("h1check").checked = false;
  document.getElementById("h2check").checked = false;
  document.getElementById("h3check").checked = false;
  document.getElementById("h5check").checked = false;
  document.getElementById("h6check").checked = false;
  // show h1 on webpage
  document.getElementById('websiteTitle4').style.display = 'inline';
}else{
  // some code
  document.getElementById('websiteTitle4').style.display = 'none';
}
});

var h5checkBox = document.getElementById('h5check');
h5checkBox.addEventListener('change', () => {
if (h5checkBox.checked) {
  // change h target
  document.getElementById('chosenHeader').innerHTML= 'h5';
  document.getElementById('chosenHeaderCloser').innerHTML= 'h5';

  // quick glow
  setTimeout(function() {
    document.getElementById('chosenHeader').classList.add('mat-cancel-color');
    document.getElementById('chosenHeaderCloser').classList.add('mat-cancel-color');
  },1);
  // remove glow
  document.getElementById('chosenHeader').classList.remove('mat-cancel-color');
  document.getElementById('chosenHeaderCloser').classList.remove('mat-cancel-color');

  // unshow all other headings
  document.getElementById('websiteTitle').style.display = 'none';
  document.getElementById('websiteTitle2').style.display = 'none';
  document.getElementById('websiteTitle3').style.display = 'none';
  document.getElementById('websiteTitle4').style.display = 'none';
  document.getElementById('websiteTitle6').style.display = 'none';

  // uncheck all other boxes
  document.getElementById("h1check").checked = false;
  document.getElementById("h2check").checked = false;
  document.getElementById("h3check").checked = false;
  document.getElementById("h4check").checked = false;
  document.getElementById("h6check").checked = false;
  // show h1 on webpage
  document.getElementById('websiteTitle5').style.display = 'inline';
}else{
  // some code
  document.getElementById('websiteTitle5').style.display = 'none';
}
});

var h6checkBox = document.getElementById('h6check');
h6checkBox.addEventListener('change', () => {
if (h6checkBox.checked) {
  // change h target
  document.getElementById('chosenHeader').innerHTML= 'h6';
  document.getElementById('chosenHeaderCloser').innerHTML= 'h6';

  // quick glow
  setTimeout(function() {
    document.getElementById('chosenHeader').classList.add('mat-cancel-color');
    document.getElementById('chosenHeaderCloser').classList.add('mat-cancel-color');
  },1);
  // remove glow
  document.getElementById('chosenHeader').classList.remove('mat-cancel-color');
  document.getElementById('chosenHeaderCloser').classList.remove('mat-cancel-color');

  // unshow all other headings
  document.getElementById('websiteTitle').style.display = 'none';
  document.getElementById('websiteTitle2').style.display = 'none';
  document.getElementById('websiteTitle3').style.display = 'none';
  document.getElementById('websiteTitle4').style.display = 'none';
  document.getElementById('websiteTitle5').style.display = 'none';

  // uncheck all other boxes
  document.getElementById("h1check").checked = false;
  document.getElementById("h2check").checked = false;
  document.getElementById("h3check").checked = false;
  document.getElementById("h4check").checked = false;
  document.getElementById("h5check").checked = false;
  // show h1 on webpage
  document.getElementById('websiteTitle6').style.display = 'inline';
}else{
  // some code
  document.getElementById('websiteTitle6').style.display = 'none';
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
      paragraphInputField.addEventListener("keyup", function(event) {
      // If the user presses the "Enter" key on the keyboard
      // if (event.key === "Enter") {
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
        // quick glow
        setTimeout(function() {
          document.getElementById('paragraphCode').classList.add('mat-cancel-color');
          document.getElementById('paragraphCode').classList.add('mat-cancel-color');
        },1);
        // remove glow
        document.getElementById('paragraphCode').classList.remove('mat-cancel-color');
        document.getElementById('paragraphCode').classList.remove('mat-cancel-color');

        paragraphActivity = true;
      // }
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
      document.getElementById('activityTitle').innerHTML = "The  <span style = 'color: #AFE24F'>color</span> property specifies the color of text. Colors can be represented by a combination of letters and numbers #A1B2C3 this called a HEX CODE ";
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
      paragraphColorActivity = true;
      titleColorActivity = true;
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
      buttonInputField.addEventListener("keyup", function(event) {
      // If the user presses the "Enter" key on the keyboard
      // if (event.key === "Enter") {

        var text = buttonInputField.value;
        console.log(text);
        // Cancel the default action, if needed
        event.preventDefault();
        // change website paragraph and paragraph value to text in input field
        // show paragraph element on user's website
        document.getElementById('buttonHTMLCode').style.display = "inline";
        // quick glow
        setTimeout(function() {
          document.getElementById('buttonHTMLCode').classList.add('mat-cancel-color');
          document.getElementById('buttonHTMLCode').classList.add('mat-cancel-color');
        },1);
        // remove glow
        document.getElementById('buttonHTMLCode').classList.remove('mat-cancel-color');
        document.getElementById('buttonHTMLCode').classList.remove('mat-cancel-color');
        document.getElementById("buttonValue").innerHTML = text;
        document.getElementById('websiteButton').innerHTML = text;
        document.getElementById("buttonValue").style.color = highlightedColor;
      // }
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
    buttonStylingActivity = true;


    }
    else{
      console.log("Did not complete acitivty");
    }
}
function submitButtonStyleActivity(){
  if(buttonStylingActivity == true){
    // change the submit button to now check for title acitivty completion
    document.getElementById('button11').setAttribute('onclick','submitLinksActivity()');
    document.getElementById('activityTitle').innerHTML = "The <span style = 'color: #AFE24F'>&#60;a&#62;</span> with its href attribute, can create a link to another web page, a file and more.";
    //remove previous acitivity
    document.getElementById('buttonStylingActivity').style.display = "none";
    // show links actitvity
    document.getElementById('linksActivity').style.display = "block";
    // show navbar
    document.getElementById('nav').style.visibility = "visible";
    // show isntructions
    document.getElementById('links').style.display = "block";
  //   // getting title input field and setting
  //   var link1inputField = document.getElementById('link1text');
  //   console.log(link1inputField);
  //   link1inputField.addEventListener("keypress", function(event) {
  //   // If the user presses the "Enter" key on the keyboard
  //   if (event.key === "Enter") {
  //     // Cancel the default action, if needed
  //     event.preventDefault();
  //     // change website title and title value to text in input field
  //     document.getElementById('link1Code').style.display = "inline";
  //     document.getElementById("link1Value").innerHTML = link1inputField.value;
  //     document.getElementById("websitelink1").innerHTML = link1inputField.value;
  //     document.getElementById("link1Value").style.color = highlightedColor;
  //     // quick glow
  //     setTimeout(function() {
  //       document.getElementById('link1Code').classList.add('mat-cancel-color');
  //     },1);
  //     // remove glow
  //     document.getElementById('link1Code').classList.remove('mat-cancel-color');
  //     link1inputField.value = "";
  //   }
  // });
  //   // getting title input field and setting
  //   var link2inputField = document.getElementById('link2text');
  //   console.log(link2inputField);
  //   link2inputField.addEventListener("keypress", function(event) {
  //   // If the user presses the "Enter" key on the keyboard
  //   if (event.key === "Enter") {
  //     // Cancel the default action, if needed
  //     event.preventDefault();
  //     // change website title and title value to text in input field
  //     document.getElementById('link2Code').style.display = "inline";
  //     document.getElementById("link2Value").innerHTML = link2inputField.value;
  //     document.getElementById("websitelink2").innerHTML = link2inputField.value;
  //     document.getElementById("link2Value").style.color = highlightedColor;
  //     // quick glow
  //     setTimeout(function() {
  //       document.getElementById('link2Code').classList.add('mat-cancel-color');
  //     },1);
  //     // remove glow
  //     document.getElementById('link2Code').classList.remove('mat-cancel-color');
  //     link2inputField.value = "";
  //   }
  //   });
  //
  //   // getting title input field and setting
  //   var link3inputField = document.getElementById('link3text');
  //   console.log(link3inputField);
  //   link3inputField.addEventListener("keypress", function(event) {
  //   // If the user presses the "Enter" key on the keyboard
  //   if (event.key === "Enter") {
  //     // Cancel the default action, if needed
  //     event.preventDefault();
  //     // change website title and title value to text in input field
  //     document.getElementById('link3Code').style.display = "inline";
  //     document.getElementById("link3Value").innerHTML = link3inputField.value;
  //     document.getElementById("websitelink3").innerHTML = link3inputField.value;
  //     document.getElementById("link3Value").style.color = highlightedColor;
  //     // quick glow
  //     setTimeout(function() {
  //       document.getElementById('link3Code').classList.add('mat-cancel-color');
  //     },1);
  //     // remove glow
  //     document.getElementById('link3Code').classList.remove('mat-cancel-color');
  //     link3inputField.value = "";
  //   }
  // });

  // getting title input field and setting
  var link4inputField = document.getElementById('link4text');
  console.log(link4inputField);
  link4inputField.addEventListener("keyup", function(event) {
  // If the user presses the "Enter" key on the keyboard
  // if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // change website title and title value to text in input field
    document.getElementById('link4Code').style.display = "inline";
    document.getElementById("link4Value").innerHTML = link4inputField.value;
    document.getElementById("websitelink4").innerHTML = link4inputField.value;
    document.getElementById("link4Value").style.color = highlightedColor;
    // quick glow
    setTimeout(function() {
      document.getElementById('link4Code').classList.add('mat-cancel-color');
    },1);
    // remove glow
    document.getElementById('link4Code').classList.remove('mat-cancel-color');
    // link4inputField.value = "";
  // }
});

//   // get link 1 field
//   var link1urlfield = document.getElementById('link1url');
//   link1urlfield.addEventListener("keypress", function(event) {
//   // If the user presses the "Enter" key on the keyboard while in this field
//   if (event.key === "Enter") {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // change href link and href value to text in input field
//     // style color
//     document.getElementById("url1").style.color = highlightedColor;
//     // put link in console
//     document.getElementById("url1").innerHTML =  link1urlfield.value;
//     // show link
//     document.getElementById('url1').style.display = "inline";
//     // change href to input fields value
//     document.getElementById("websitelink1").href =  link1urlfield.value;
//
//
//     // quick glow
//     setTimeout(function() {
//       document.getElementById('url1').classList.add('mat-cancel-color');
//     },1);
//     // remove glow
//     document.getElementById('url1').classList.remove('mat-cancel-color');
//     link1urlfield.value = "";
//   }
// });
//
// // get link 2 field
// var link2urlfield = document.getElementById('link2url');
// link2urlfield.addEventListener("keypress", function(event) {
// // If the user presses the "Enter" key on the keyboard while in this field
// if (event.key === "Enter") {
//   // Cancel the default action, if needed
//   event.preventDefault();
//   // change href link and href value to text in input field
//   // style color
//   document.getElementById("url2").style.color = highlightedColor;
//   // put link in console
//   document.getElementById("url2").innerHTML = link2urlfield.value;
//   // show link
//   document.getElementById('url2').style.display = "inline";
//   // change href to input fields value
//   document.getElementById("websitelink2").href = link2urlfield.value;
//
//
//   // quick glow
//   setTimeout(function() {
//     document.getElementById('url2').classList.add('mat-cancel-color');
//   },1);
//   // remove glow
//   document.getElementById('url1').classList.remove('mat-cancel-color');
//   link2urlfield.value = "";
// }
// });
//
// // get link 2 field
// var link3urlfield = document.getElementById('link3url');
// link3urlfield.addEventListener("keypress", function(event) {
// // If the user presses the "Enter" key on the keyboard while in this field
// if (event.key === "Enter") {
//   // Cancel the default action, if needed
//   event.preventDefault();
//   // change href link and href value to text in input field
//   // style color
//   document.getElementById("url3").style.color = highlightedColor;
//   // put link in console
//   document.getElementById("url3").innerHTML = link3urlfield.value;
//   // show link
//   document.getElementById('url3').style.display = "inline";
//   // change href to input fields value
//   document.getElementById("websitelink3").href = link3urlfield.value;
//
//
//   // quick glow
//   setTimeout(function() {
//     document.getElementById('url3').classList.add('mat-cancel-color');
//   },1);
//   // remove glow
//   document.getElementById('url1').classList.remove('mat-cancel-color');
//   link3urlfield.value = "";
// }
// });

// get link 2 field
var link4urlfield = document.getElementById('link4url');
link4urlfield.addEventListener("keyup", function(event) {
// If the user presses the "Enter" key on the keyboard while in this field
// if (event.key === "Enter") {
  // Cancel the default action, if needed
  event.preventDefault();
  // change href link and href value to text in input field
  // style color
  document.getElementById("url4").style.color = highlightedColor;
  // put link in console
  document.getElementById("url4").innerHTML =  link4urlfield.value;
  // show link
  document.getElementById('url4').style.display = "inline";
  // change href to input fields value
  document.getElementById("websitelink4").href =  link4urlfield.value;
  linksActivity = true;


  // quick glow
  setTimeout(function() {
    document.getElementById('url4').classList.add('mat-cancel-color');
  },1);
  // remove glow
  document.getElementById('url4').classList.remove('mat-cancel-color');
// }
});

}
}
function submitLinksActivity(){
  // make sure previous acitivty was completed
  if(linksActivity == true){
    // change the submit button to now check for title acitivty completion
    document.getElementById('button11').setAttribute('onclick','completed()');
    document.getElementById('activityTitle').innerHTML = "The <span style = 'color: #AFE24F'>background-image</span> CSS property sets one or more background images on an element.";
    //remove previous acitivity
    document.getElementById('linksActivity').style.display = "none";
    // remove previous acitivty instructions
    document.getElementById('links').style.display = "none";
    // show links actitvity
    document.getElementById('backgroundImageActivity').style.display = "block";
    // show isntructions
    document.getElementById('backgroundImageInstructions').style.display = "block";
    // get link 1 field
    var bgurl = document.getElementById('bgurl');
    bgurl.addEventListener("keyup", function(event) {
    // If the user presses the "Enter" key on the keyboard while in this field
    // if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // change href link and href value to text in input field
      // style color
      document.getElementById("bgImageCode").style.display = "block";
      // put link in console
      document.getElementById("bgImageURL").innerHTML = "<em><span style = 'color: #AFE24F'>your image adress here</span></em>";
      // show link
      document.getElementById('bgurl').style.display = "inline";
      // change href to input fields value
      document.getElementById("websiteBgImage").style.backgroundImage = "url('" + bgurl.value + "')";
      console.log('url("' + bgurl + '")');

      // quick glow
      setTimeout(function() {
        document.getElementById('bgImageCode').classList.add('mat-cancel-color');
      },1);
      // remove glow
      document.getElementById('bgImageCode').classList.remove('mat-cancel-color');
      backgroundImageActivity = true;
    // }
  });

  }
}
function completed(){
  if(backgroundImageActivity == true){
    document.getElementById('activityTitle').innerHTML = "The <span style = 'color: #AFE24F'>CONGRATULATIONS!</span> YOU HAVE COMPLETED BUILDING YOUR FIRST WEBSITE!!!";
    //remove previous acitivity
    document.getElementById('backgroundImageActivity').style.display = "none";
    // show isntructions
    document.getElementById('backgroundImageInstructions').style.display = "none";
    window.alert("Thanks for learning with us!");
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
  document.body.addEventListener("mousemove", function () {audio.play()});
});
