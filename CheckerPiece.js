"use strict";

function CheckerPiece (color) {
    this.color = color
    // this.createChecker()
//    return this.createChecker()


}

CheckerPiece.prototype.createChecker = function () {
    let checkerPiece = document.createElement("div")
    checkerPiece.classList.add(this.color, 'checker')
    return checkerPiece
}

  //first attempt--I don't like that when creating a piece it must always have a parent, I want other forces to dictate is position
// CheckerPiece.prototype.createCheckerProto = function () {
//     let checkerPiece = document.createElement("div")
//     checkerPiece.classList.add(this.color, 'checker')
//     let test = document.getElementById(this.parent) 
//     test.appendChild(checkerPiece)
//     // return checkerPiece
    
// }  
    
// let blackPiece = new CheckerPiece("black", "main")
// let redPiece = new CheckerPiece("red", "main")