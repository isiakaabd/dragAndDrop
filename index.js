const empty = document.querySelectorAll(".empty");
const fill= document.querySelector(".fill");



fill.addEventListener("dragstart", dragStart)
fill.addEventListener("dragend", dragEnd)

empty.forEach(empties => {
empties.addEventListener("dragover", dragOver);
empties.addEventListener("dragenter", dragEnter);
empties.addEventListener("drop", dragDrop);
empties.addEventListener("dragleave", dragLeave);

})

function dragStart (){
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd(){
    this.className = "fill"
  
}


function dragOver(e){
    e.preventDefault()
   
}


function dragEnter(e){
    e.preventDefault()
    this.className += " hover"
}

function dragLeave (){
    this.className = "empty";
    
}

function dragDrop(){
    
 this.className = "empty"
    this.append(fill)
}

