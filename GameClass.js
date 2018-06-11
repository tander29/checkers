"use strict";

function GameClass () {
    this.board = new CheckersGrid(8,8, document.getElementById("main"), this)
    this.redPlayer = new Player("red", this.board, this)
    this.blackPlayer = new Player("black", this.board, this)
    this.currentPlayer = this.blackPlayer;
    // console.log(this.board.currentGame)
    // console.log(this.board)
}

GameClass.prototype.togglePlayer = function () {
    // this.currentPlayer = this.currentPlayer === this.blackPlayer ? this.redPlayer : this.blackPlayer;
    if (this.currentPlayer === this.blackPlayer) {
        this.currentPlayer = this.redPlayer;
    } else {
        this.currentPlayer = this.blackPlayer;
    }

    return this.currentPlayer;
}

