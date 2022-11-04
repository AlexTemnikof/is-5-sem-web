const testBtn = document.querySelectorAll('button')

addButtonHandlers(testBtn);

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
