// num of images, file type, caption
let info = {
  july21: [4, ".JPG", "july 21 - powerline with sunset in background"],
  july22: [5, ".JPG", "july 22 - looking up at the sky"],
  july22B: [4, ".PNG", "july 22 - sunset clouds"],
  july22C: [4, ".JPG", "july 22 - cityscape"],
}
let selected;
let current;

let Ecaption = document.getElementById("caption");
let Enext = document.getElementById("next")

function buttonClick(id){
  selected = id
  document.getElementById(id).classList.add("clicked")
  document.getElementById(id + "Img").classList.add("clicked2")
  document.getElementById("screen").classList.add("shown")

  Ecaption.innerHTML = info[selected][2]
  Enext.style.opacity = 1
  Ecaption.style.opacity = 1
}

function cancel(){
  document.getElementById(selected).classList.remove("clicked")

  img = document.getElementById(selected + "Img")
  img.src = "./assets/" + selected + "/" + info[selected][0] + info[selected][1]
  img.classList.remove("clicked2")

  document.getElementById("screen").classList.remove("shown")
  selected = null;
  Ecaption.style.opacity = 0
  Enext.style.opacity = 0
  current = null
}

function next(){
  if(selected != null){
    if (current == null)
      current = info[selected][0]
    let oldImg = selected + "Img"
    
    if(current >= info[selected][0])
      current = 1;
    else
      current++;

    let img = document.createElement('img')
    img.classList.add("clickedNew");
    img.src = "./assets/" + selected + "/" + current + info[selected][1]
    document.getElementById("galleryDiv").appendChild(img);
    img.style.width = "100px";
    document.getElementById(oldImg).style.opacity = 0

    setTimeout(() => {
      
    }, 1000);

    
    console.log(oldImg)
    console.log(img)

//element.remove()

    //img = document.getElementById(selected + "Img")
    //img.src = "./assets/" + selected + "/" + current + info[selected][1]
  }
}
