let grid = document.querySelector("#gridContainer");

function generateGrid (grid) {
    let squaresPerRow = 16;

    for (let i = 0; i < squaresPerRow; i++) {
        for (let j = 0; j < squaresPerRow; j++) {
            let gridSquare = document.createElement('div');
            gridSquare.classList.add('gridSquare');
            grid.appendChild(gridSquare);
        }
        let lineBreak = document.createElement('br');
        grid.appendChild(lineBreak);
    }
}

generateGrid(grid);

const gridSquares = grid.querySelectorAll('.gridSquare');

gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseenter', () => {
        gridSquare.classList.add('active');
    });
});

grid.addEventListener('mouseleave', () => {
    gridSquares.forEach((gridSquare) => {
        gridSquare.classList.remove('active');
    });
});




