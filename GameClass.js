"use strict";
function GameClass () {
    const timmy = new CheckersGrid(8,8, document.getElementById("main"))
    const redPlayer = new Player(timmy)
    // const blackPlayer = new Player(timmy)
    
}

let newGame = new GameClass()