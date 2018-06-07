function CheckersGrid (height, width, parentElement) {
    console.log ('howdy yall')
    Grid.call(this, height, width, parentElement)
}

CheckersGrid.prototype = Object.create(Grid.prototype)
CheckersGrid.prototype.constructor = CheckersGrid
CheckersGrid.prototype.fillGrid = function () {
   
         this.element.addEventListener('click', this.clickHandler.bind(this))
        this.element.addEventListener('click', Player.prototype.kingMe.bind(this))
        this.sampleArray = new Array(this.height).fill().map(cell => new Array(this.width).fill(0))
        this.sampleArray.elementProperty = "elementProperty"

        this.sampleArray.forEach((_, rowIndex) => {
            let rowElement = document.createElement("section")
            rowElement.dataset.row = rowIndex
            this.element.appendChild(rowElement)

            _.forEach((_, colIndex) => {
                
                if((rowIndex + colIndex) % 2 === 0){
                this.sampleArray[rowIndex][colIndex] = new BasicSquareClass(rowIndex, colIndex, rowElement, this)
                }else {
                    this.sampleArray[rowIndex][colIndex] = new DarkSquareClass(rowIndex, colIndex, rowElement, this)
                }
                
            });
        })
        console.table(this.sampleArray)
    }

