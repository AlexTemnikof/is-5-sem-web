const testBtn = document.querySelectorAll('button')

addButtonHandlers(testBtn);


function ShrekLove_yes(){
    document.getElementsByClassName('pop-up-window')[0].style.display = "none"
}

function ShrekLove_not(){
    location.href = "https://www.kinopoisk.ru/film/430/"
}

function addButtonHandlers(btn){

    for(let i = 0; i < testBtn.length; i++) {
        // make gray button on mouseover
        btn[i].addEventListener('mouseover', () => {
            btn[i].style.backgroundColor = 'gray';
            btn[i].style.color = 'white';
        });

        // make white buton on mouseout
        btn[i].addEventListener('mouseout', () => {
            btn[i].style.backgroundColor = "rgb(144, 238, 144, 0.65)";
            btn[i].style.color = 'black';
        });
    }
}
