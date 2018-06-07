
function Cell(rowIndex, colIndex, parent, grid) {
    this.rowIndex = rowIndex;
    this.colIndex = colIndex;
    this.parent = parent;
    this.grid = grid;
    this.createCell();
}

Cell.prototype.createCell = function () {
    this.element = document.createElement("article");
    this.element.dataset.row = this.rowIndex;
    this.element.dataset.col = this.colIndex;
    this.parent.appendChild(this.element);
}
