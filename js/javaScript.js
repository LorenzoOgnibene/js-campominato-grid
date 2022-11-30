





const playButton = document.querySelector('a.btn')
const containerElement = document.querySelector('div.big-square');

playButton.addEventListener('click', function(){
    containerElement.innerHTML = ' ';
    for(let i = 1; i < 101; i++){
        const newDivElement = document.createElement('div');
        newDivElement.classList.add("square", "d-flex", "justify-content-center", "align-items-center");
        newDivElement.innerText = i;
        containerElement.appendChild(newDivElement);
        newDivElement.addEventListener('click', function(){
            newDivElement.classList.toggle("click")
        })
    }
})