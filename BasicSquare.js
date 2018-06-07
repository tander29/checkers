"use strict";
function BasicSquareClass (rowIndex, colIndex, parent, grid) {
    Cell.call(this, rowIndex, colIndex, parent, grid)
}
BasicSquareClass.prototype = Object.create(Cell.prototype)
BasicSquareClass.prototype.constructor = BasicSquareClass