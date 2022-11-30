





const playButton = document.querySelector('a.btn')
const containerElement = document.querySelector('div.big-square');

playButton.addEventListener('click', function(){
    for(let i = 0; i < 100; i++){
        const newDivElement = document.createElement('div');
        newDivElement.classList.add('square');
        containerElement.appendChild(newDivElement);
    }
})