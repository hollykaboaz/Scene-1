function showDes() {
  element = document.getElementById('MeanOfDes');

  if (element.style.display == "block") {
    element.style.display = "none";
  }
  else {
    element.style.display = "block";
  }
}

function h1() {
  about = document.getElementById('threebutton');

  if (about.style.display == "block") {
    about.style.display = "none";
  }
  else {
    about.style.display = "block";
  }
}

function MeanOfProject() {
  about = document.getElementById('MeanOfProject');
  document.getElementById("MeanOfTAP").style.display = "none";
  document.getElementById("MeanOfUS").style.display = "none";

  if (about.style.display == "block") {
    about.style.display = "none";
  }
  else {
    about.style.display = "block";
  }
}

  function MeanOfTAP () {
    about = document.getElementById('MeanOfTAP');
    document.getElementById("MeanOfProject").style.display = "none";
    document.getElementById("MeanOfUS").style.display = "none";

    if (about.style.display == "block") {
      about.style.display = "none";
    }
    else {
      about.style.display = "block";
    }
  }

    function MeanOfUS () {
      about = document.getElementById('MeanOfUS');
      document.getElementById("MeanOfTAP").style.display = "none";
      document.getElementById("MeanOfProject").style.display = "none";

      if (about.style.display == "block") {
        about.style.display = "none";
      }
      else {
        about.style.display = "block";
      }
    }
