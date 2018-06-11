function CheckersGrid(height, width, parentElement, currentGame) {
    Grid.call(this, height, width, parentElement)
    this.currentGame = currentGame;
    this.jumpsArray = [
        {
            x: -2,
            y: 2
        },
        {
            x: -2,
            y: -2
        },
        {
            x: 2,
            y: -2
        },
        {
            x: 2,
            y: 2
        },
    ]

}

CheckersGrid.prototype = Object.create(Grid.prototype)
CheckersGrid.prototype.constructor = CheckersGrid
CheckersGrid.prototype.createCell = function (rowIndex, rowElement) {
    this.sampleArray[rowIndex].forEach((_, colIndex) => {
        if ((rowIndex + colIndex) % 2 === 0) {
            this.sampleArray[rowIndex][colIndex] = new BasicSquareClass(rowIndex, colIndex, rowElement, this)
        } else {
            this.sampleArray[rowIndex][colIndex] = new DarkSquareClass(rowIndex, colIndex, rowElement, this)
        }

    });
    // console.table(this.sampleArray)
}




CheckersGrid.prototype.clickHandler = function (event) {
    const clickedSquare = this.findCell(event.target.dataset.row, event.target.dataset.col)
    // console.log("current game",this)
    this.findNeighbors(clickedSquare)
    this.blackJumpOptions(clickedSquare)
    // this.jumpCoordinates(clickedSquare)
    // console.log('neighbors\n\n',this.jumpCoordinatesPossible)
    this.currentGame.currentPlayer.pickupOrMoveChecker(clickedSquare)
    
}
    
CheckersGrid.prototype.blackJumpOptions =  function (clickedCell) {
    let blackJumpPossible = []
    // console.log(' i click on this\n', clickedCell)
    
    for (let i = 0; i < this.jumpsArray.length; i++) {
        let xNeighbor = clickedCell.rowIndex + this.jumpsArray[i].x
        let yNeighbor = clickedCell.colIndex + this.jumpsArray[i].y
        let neighborCell = this.findCell(xNeighbor, yNeighbor)
        // console.log('hootie hoo',neighborCell.element.childCount)
        if (neighborCell) {
            blackJumpPossible.push(neighborCell)
        }
    }
    return blackJumpPossible
    // console.log(blackJumpPossible)
    // console.log('neighbors\n\n',neighborsArray)
    
}

CheckersGrid.prototype.enemyDetection =  function (clickedCell) {
    let blackJumpPossible = []
    // console.log(' i click on this\n', clickedCell)
    
    for (let i = 0; i < this.jumpsArray.length; i++) {
        let xNeighbor = clickedCell.rowIndex + this.jumpsArray[i].x
        let yNeighbor = clickedCell.colIndex + this.jumpsArray[i].y
        let neighborCell = this.findCell(xNeighbor, yNeighbor)
        
        if (neighborCell) {
            blackJumpPossible.push(neighborCell)
        }
    }
    return blackJumpPossible
    // console.log(blackJumpPossible)
    // console.log('neighbors\n\n',neighborsArray)
    
}















