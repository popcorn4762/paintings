let selected;
let cycles = 5;
let current = 99999;

function buttonClick(id){
  selected = id
  document.getElementById(id).classList.add("clicked")
  document.getElementById(id + "Img").classList.add("clicked2")
  document.getElementById("screen").classList.add("shown")
}

function cancel(){
  document.getElementById(selected).classList.remove("clicked")
  document.getElementById(selected + "Img").classList.remove("clicked2")
  document.getElementById("screen").classList.remove("shown")
  selected = null;
}

function next(){
  if(selected != null){
    if(current >= cycles)
      current = 1;
    else
      current++;
    document.getElementById(selected + "Img").src = "./assets/" + selected + "/" + current + ".JPG"
  }
}