
function createSquareElement(content, classes){
    const square = document.createElement('div');
    square.innerText = content;
    square.classList.add(classes,  "d-flex", "justify-content-center", "align-items-center", "fs-5", "p-3")
    square.addEventListener('click', function(){
        square.classList.toggle("click")
    })
    return square;
}




const playButton = document.querySelector('a.btn');
const containerElement = document.querySelector('div.big-square');
const newSquare = createSquareElement();

playButton.addEventListener('click', function(){
    containerElement.innerHTML = ' ';
    for(let i = 1; i < 101; i++){
        containerElement.appendChild(createSquareElement(i, 'square'));
    }
})