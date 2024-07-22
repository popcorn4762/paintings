function buttonClick(id){
  console.log("hi")
  document.getElementById(id).classList.add("clicked")
  document.getElementById("screen").setAttribute("id", "shown")
}