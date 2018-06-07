"use strict";
function DarkSquareClass (rowIndex, colIndex, parent, grid) {
    BasicSquareClass.call(this,rowIndex, colIndex, parent, grid)
    this.changeColor()
    this.startChecker()
}

DarkSquareClass.prototype = Object.create(BasicSquareClass.prototype)
DarkSquareClass.prototype.constructor = DarkSquareClass

DarkSquareClass.prototype.changeColor = function () {
    this.element.classList.add("black")
    this.newID = "" + this.rowIndex + this.colIndex
    this.element.setAttribute("id", this.newID )
}

DarkSquareClass.prototype.startChecker = function () {
    if(this.rowIndex < 3){
    this.moveChecker("red", this.element)

    } else if(this.rowIndex > 4){
        this.moveChecker("black", this.element)
    }

}

DarkSquareClass.prototype.moveChecker = function (pieceColor, parent) {
    //color changes the class to red/black, not the style color
    let checker = new CheckerPiece(pieceColor).createChecker()
    parent.appendChild(checker)

}

// original code for starting spot included making an id for each square and essentially doing the add/movechecker() within it, was redundant
// DarkSquareClass.prototype.startChecker = function () {
//     if(this.rowIndex < 3){
//     // // let redPiece = new CheckerPiece("red", this.newID)
//     // // let getStartCell = document.getElementById(this.newID) don't need, can just use this.element
//     //created a function for below, that way can just add/move checker with same code
//     // let redPiece = new CheckerPiece("red").createChecker() 
//     // this.element.appendChild(redPiece)
//     this.moveChecker("red", this.element)
    
//     console.log('red piece', this.element)
    
//     } else if(this.rowIndex > 4){
//         this.moveChecker("black", this.element)
//         // let blackPiece = new CheckerPiece("black", this.newID)
//         // let getStartCell = document.getElementById(this.newID)   
//     // let blackPiece = new CheckerPiece("black").createChecker()
//     // this.element.appendChild(blackPiece)
//     }

// }