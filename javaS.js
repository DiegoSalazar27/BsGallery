let node;
let source;
let listItem;
const pictures = document.getElementsByClassName('pictures');
const father= document.getElementById("FotosCarousel");
const fatheri= document.getElementById("indicadores");
const modalHeader = document.getElementById("modalh");
const modalFooter = document.getElementById("modalf");


window.addEventListener("load", function() {

  for (let i = 0; i < pictures.length; i++){
    pictures[i].addEventListener("click", x);
  }
});


const x = function image(){
  closegall();

  let img = this.dataset.img.split(",");
  for(let i = 0; i < img.length; i++){
    node= document.createElement("div");
    source= document.createElement("img");

    if(i == 0){
      node.setAttribute("class", "carousel-item active");
    }else{
      node.setAttribute("class", "carousel-item");
    }
    source.setAttribute("class", "car-img");
    source.setAttribute("src", img[i]);
    node.appendChild(source);
    father.appendChild(node);
    listItem= document.createElement("li");

    if(i == 0){
      listItem.setAttribute("class", "active");
    }

    listItem.setAttribute("data-target", "#gall");
    listItem.setAttribute("data-slide-to", i);
    fatheri.appendChild(listItem);
  }

  console.log(this.firstChild);
  console.log(this.firstElementChild);
  modalHeader.innerHTML = this.firstElementChild.innerHTML;
  modalFooter.innerHTML = this.lastElementChild.innerHTML;
}

function closegall(){
  var father = document.getElementById("FotosCarousel");
  var fatheri = document.getElementById("indicadores");

  while (father.hasChildNodes()){
    father.removeChild(father.firstChild);
    fatheri.removeChild(fatheri.firstChild);
  }
}
