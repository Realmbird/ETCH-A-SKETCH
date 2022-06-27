let trail = true;
function removeTrail(){
    trail = !trail;
    console.log(trail);
}

function addTransition(e){
    this.classList.add("colored");
}
function removeTransition(e){
    if(e.propertyName !== "background-color") return; //ignores
    if(trail == false) return;
    this.classList.remove("colored");
}

const trails = document.querySelector('#trail');
trails.addEventListener('click', removeTrail);

function build(graph){
    const body = document.querySelector('body');
    const container = document.createElement("div");
    container.classList.add("container");
    for(let row = 0; row < graph; row++){
    const row = document.createElement('div');
    for(let collumn = 0; collumn < graph; collumn++){
        const grid = document.createElement('div');
        grid.classList.add("grid");
        row.appendChild(grid);
    }
    row.classList.add("row");
    container.appendChild(row);
    }
    body.appendChild(container);
}
function replace(){
    const answer = parseInt(prompt("Enter Grid Size < 100"));
    if(answer < 100){
        const red = document.querySelector('div.container');
        red.remove();
        build(answer);
        divs = Array.from(document.querySelectorAll(".grid"));
        divs.forEach(div => div.addEventListener('mouseover', addTransition));
        divs.forEach(div => div.addEventListener('transitionend', removeTransition)); 
    }else{
        alert("invalid answer");
    }
}
build(16);
let divs = Array.from(document.querySelectorAll(".grid"));  
divs.forEach(div => div.addEventListener('mouseover', addTransition));
divs.forEach(div => div.addEventListener('transitionend', removeTransition)); 

const size = document.querySelector("#size");
size.addEventListener('click', replace)




