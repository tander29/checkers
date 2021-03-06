
function Grid(height, width, parentElement) {
    this.height = height;
    this.width = width;
    this.element = parentElement
    this.attachClickHandler()
    this.fillGrid()
    this.neighborsCoordinates = [
        {
            x: 0,
            y: 1
        },
        {
            x: 0,
            y: -1
        },
        {
            x: 1,
            y: 0
        },
        {
            x: 1,
            y: -1
        },
        {
            x: 1,
            y: 1
        },
        {
            x: -1,
            y: 0
        },
        {
            x: -1,
            y: 1
        },
        {
            x: -1,
            y: -1
        }
    ]
}

Grid.prototype = {
    constructor: Grid,
    //Fill Grid overwritten in CheckersGrid class, adding dark squares and light squares
    fillGrid: function () {
        this.sampleArray = new Array(this.height).fill().map(cell => new Array(this.width).fill(0))

        this.sampleArray.forEach((_, rowIndex) => {
            let rowElement = document.createElement("section")
            rowElement.dataset.row = rowIndex
            this.element.appendChild(rowElement)

            this.createCell(rowIndex, rowElement)
        })
        // console.table(this.sampleArray)
    },

    createCell: function (rowIndex, rowElement) {
        this.sampleArray[rowIndex].forEach((_, colIndex) => {
            this.sampleArray[rowIndex][colIndex] = new Cell(rowIndex, colIndex, rowElement, this)
        })
    },

    attachClickHandler: function () {
        this.boundClickHandler = this.clickHandler.bind(this)
        this.element.addEventListener('click', this.boundClickHandler)
    },

    clickHandler: function (event) {
        const clickedCell = this.findCell(event.target.dataset.row, event.target.dataset.col)
        this.findNeighbors(clickedCell)
        // console.log('hootie hi',event.target)
        let checker = event.target.lastChild
        // console.log('checker',checker)
        // console.log(clickedCell)
    },

    findCell: function (rowIndex, columnIndex) {
        
        const row = this.sampleArray[parseInt(rowIndex)]
        // if (row) {
            //     return row[parseInt(columnIndex)]
            // } else {
                //     return null
                // }
        return row && row[parseInt(columnIndex)]
    },

    findNeighbors: function (clickedCell) {
        let neighborsArray = []
        // console.log(' i click on this\n', clickedCell)
        
        for (let i = 0; i < this.neighborsCoordinates.length; i++) {
            let xNeighbor = clickedCell.rowIndex + this.neighborsCoordinates[i].x
            let yNeighbor = clickedCell.colIndex + this.neighborsCoordinates[i].y
            let neighborCell = this.findCell(xNeighbor, yNeighbor)

            if (neighborCell) {
                neighborsArray.push(neighborCell)
            }
        }
        // console.log('neighbors\n\n',neighborsArray)
        return neighborsArray
    },


}






