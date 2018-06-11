"use strict";

function Player(type, checkersgrid, game) {
    this.board = checkersgrid
    this.type = type
    this.pickedUpChecker = null
    this.game = game
}

Player.prototype.constructor = Player

Player.prototype.pickupOrMoveChecker = function (clickedSquare) {
    const checkerElement = clickedSquare.element.lastChild
    const checker = checkerElement && checkerElement.thisChecker
    if (this.pickedUpChecker) {
        this.moveChecker(clickedSquare)
    } else {
        if (checker) this.pickUpChecker(checker)
    }
}

Player.prototype.pickUpChecker = function (checker) {
    if (this.type !== checker.color) return;
    
    console.log("Picking up a checker.")
    // console.log(this)
    this.pickedUpChecker = checker
    // maybe make it look picked up
    this.pickedUpChecker.squareOfOrigin = 
        this.board.findCell(checker.element.parentElement.dataset.row, checker.element.parentElement.dataset.col)
        
        console.log('square of origin',this.pickedUpChecker.squareOfOrigin)
       
        this.pickedUpChecker.squareOfOrigin.element.classList.add("select")
}

Player.prototype.moveChecker = function (clickedSquare) {
    if (clickedSquare.element.classList.contains("red")) return;
    // console.log("Moving a checker.", this.pickedUpChecker.squareOfOrigin)
    console.log("Moving a checker.", clickedSquare)
    console.log("Moving a checker.", this.board.currentGame.currentPlayer.type)
    // console.log(this.pickedUpChecker.squareOfOrigin)
    // console.log('current player', this.board.currentGame.currentPlayer.type)

    // allows each color to only move in one direction unless is a king
    if (this.board.currentGame.currentPlayer.type==="black" && this.pickedUpChecker.squareOfOrigin.rowIndex <  clickedSquare.rowIndex) return;
    if (this.board.currentGame.currentPlayer.type==="red" && this.pickedUpChecker.squareOfOrigin.rowIndex >  clickedSquare.rowIndex) return;

    const neighbors = this.board.findNeighbors(this.pickedUpChecker.squareOfOrigin)
    const clickedSquareIsANeighbor = neighbors.includes(clickedSquare)
    const jumpOptions = this.board.blackJumpOptions(this.pickedUpChecker.squareOfOrigin)
    const clickedSquareIsJump = jumpOptions.includes(clickedSquare)
    const jumpedPieceCol = Math.floor(clickedSquare.colIndex + this.pickedUpChecker.squareOfOrigin.colIndex)/2
    const jumpedPieceRow = Math.floor(clickedSquare.rowIndex + this.pickedUpChecker.squareOfOrigin.rowIndex)/2
    const jumpedPiecePosition = this.board.findCell(jumpedPieceRow,jumpedPieceCol)
    console.log(jumpedPieceCol)
    console.log(jumpedPieceRow)
    if(jumpedPiecePosition.element.lastChild){
    console.log(jumpedPiecePosition.element.lastChild.classList)
    }
    const clickedSquareIsADarkSquare = clickedSquare.constructor === DarkSquareClass
    //only allows to move to square that is neighbor, and must be a black square (Dark Square Class)
    if (clickedSquareIsANeighbor && clickedSquareIsADarkSquare) {
        //doesn't allow two checkers in same square, placed here so can drop checker off in original square
        if (clickedSquare.element.childElementCount) return
        clickedSquare.element.appendChild(this.pickedUpChecker.element)
        this.board.currentGame.togglePlayer()
        this.pickedUpChecker.squareOfOrigin.element.classList.remove("select")
        this.pickedUpChecker.squareOfOrigin = null
        this.pickedUpChecker = null
    }

  //sets checker down back on same square it was picked from
    if(this.pickedUpChecker.squareOfOrigin === clickedSquare){
        clickedSquare.element.appendChild(this.pickedUpChecker.element)
        this.pickedUpChecker.squareOfOrigin.element.classList.remove("select")
        this.pickedUpChecker.squareOfOrigin = null
        this.pickedUpChecker = null
    }
    console.log(neighbors)

    if(clickedSquareIsJump && !clickedSquare.element.childElementCount
    && jumpedPiecePosition.element.lastChild &&
     !jumpedPiecePosition.element.lastChild.classList.contains(this.board.currentGame.currentPlayer.type) ){
        clickedSquare.element.appendChild(this.pickedUpChecker.element)
        jumpedPiecePosition.element.removeChild(jumpedPiecePosition.element.childNodes[0])
        this.board.currentGame.togglePlayer()
        this.pickedUpChecker.squareOfOrigin.element.classList.remove("select")
        this.pickedUpChecker.squareOfOrigin = null
        this.pickedUpChecker = null
    }
    
}




