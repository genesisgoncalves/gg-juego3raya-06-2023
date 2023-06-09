
let tablero = document.getElementsByClassName("game");

function myFunction() {
    var tablero = document.getElementsByClassName('game');
    if (tablero.style.display === 'none') {
        tablero.style.display = 'block';
    } else {
        tablero.style.display = 'none';
    }
}







// let turno = 0;
// const tablero = []

// const btnPulsado =(e, pos) => {
//     turno++;
//     const btn = e.target;
//     const color = turno % 2 ? 'green' : 'yellow';
//     btn
// }



// $("button").each(function(indice, elemento){
//     elemento.addEventListener('click', (e) => btnPulsado(e, indice));
// });