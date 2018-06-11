"use strict";

function CheckerPiece (color) {
    this.color = color
    this.squareOfOrigin = null
    // this.createChecker()
//    return this.createChecker()


}

CheckerPiece.prototype.createChecker = function () {
    this.element = document.createElement("div")
    this.element.classList.add(this.color, 'checker')
    this.element.thisChecker = this
    return this.element
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