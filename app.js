let ballonsMap = ['green', 'red', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white', 'cyan', 'magenta', 'gray', 'lime', 'teal', 'violet', 'indigo', 'beige', 'maroon', 'gold'];

const popBalloon = (position) => {
    //le pone el color null al blobo clicado
    ballonsMap[position] = null;
    render(); //actualiza los globos
}

const render = () => {
    //convierte la array en globos
    const ballons = ballonsMap.map((color, position) => {
        if (color) {
            return `<div class="balloon" style="background-color: ${color};" data-position="${position}" onclick="popBalloon(${position})"></div>`;
        } else {
            return `<div class="balloon popped" data-position="${position}" onclick="popBalloon(${position})"></div>`; //los globos explotados son transparentesgit 
        }
    });

    //actualiza el numero de gobos
    document.querySelector("#balloon-count").innerHTML = ballonsMap.filter(b => b !== null).length;

    //renderiza los globos que hay
    document.querySelector("#balloon-map").innerHTML = ballons.join('');

    //recarga la pag cuando ya no quedan globos
    if (ballonsMap.filter(b => b !== null).length === 0) {
        window.location.reload();
    }
}

window.onload = render(); //renderiza los globos al iniciar la pag
