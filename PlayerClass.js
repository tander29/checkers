"use strict";

function Player (checkersgrid) {
    this.board = checkersgrid
    console.log('hello inheritance issues', this.board)
    
}

Player.prototype.movePiece = function () {
    let clickedCell = this.board.findCell()
    let checker = this.board.findCell().lastElementChild
    clickedCell.removeChild(checker)
}

Player.prototype.clickHandler = function () {
    this.board = checkersgrid
    console.log(this.board)
}

Player.prototype.kingMe = function () {
// console.log('this is my event',event.target)
console.log('hello',event.target.lastElementChild)
let checker = event.target.lastElementChild
console.log(checker)
event.target.removeChild(checker)
// const clickedCell = this.findCell(event.target.dataset.row, event.target.dataset.col)
// console.log()
}