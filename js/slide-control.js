document.getElementById("profile-02").style.visibility = "hidden"
var buttonVar = 0

function slideFunct() {
  if (buttonVar === 0) {
    
    document.getElementById("profile-01").style.visibility = "hidden"
    document.getElementById("profile-02").style.visibility = "visible"

    buttonVar = 1;

  } else {

    document.getElementById("profile-02").style.visibility = "hidden"
    document.getElementById("profile-01").style.visibility = "visible"

    buttonVar = 0;
  }
}

  function keyCapture(){

    var x = event.key;

    if (x == "ArrowRight") {
        slideFunct()
      } else if (x == "ArrowLeft"){
        slideFunct()
      }
}
