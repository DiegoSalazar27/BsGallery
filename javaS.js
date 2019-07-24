function image(){
  closegall();
  let node;
  let source;
  let i;
  let length = arguments.length-1;
  let listItem;
  let father= document.getElementById("FotosCarousel");
  let fatheri= document.getElementById("indicadores");
  let modalHeader = document.getElementById("modalh");
  let modalFooter = document.getElementById("modalf");

  for(i = 0; i < length; i++){
    node= document.createElement("div");
    source= document.createElement("img");

    if(i == 0){
      node.setAttribute("class", "carousel-item active");
    }else{
      node.setAttribute("class", "carousel-item");
    }
    source.setAttribute("class", "car-img");
    source.setAttribute("src", arguments[i+1]);
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


  var text = document.getElementsByClassName("head")[arguments[0]].innerHTML;
  modalHeader.innerHTML = text;
  text = document.getElementsByClassName("foot")[arguments[0]].innerHTML;
  modalFooter.innerHTML = text;
}

function closegall(){
  var father = document.getElementById("FotosCarousel");
  var fatheri = document.getElementById("indicadores");

  while (father.hasChildNodes()){
    father.removeChild(father.firstChild);
    fatheri.removeChild(fatheri.firstChild);
  }
}
