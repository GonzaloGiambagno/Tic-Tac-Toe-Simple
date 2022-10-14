const boxes = document.querySelectorAll('.box');
let jugador = "X";


boxes.forEach((box) => {
    box.addEventListener('click', ()=>{
        if (box.innerHTML === "") {
            box.innerHTML = jugador;
            jugador = jugador === "X" ? "O" : "X";
            console.log("ccc")
        }
    })
});

const reiniciar = () => {
    boxes.forEach((box) => {
        box.innerHTML = "";
    })
};


