class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const sudokuMap = new Map<string, Grid[]>();

        for (let i = 0; i <= board.length - 1; i++) {
            for (let j = 0; j <= board[i].length - 1; j++) {
                if (board[i][j] == ".")
                    continue;

                let gridPositions = sudokuMap.get(board[i][j]) ?? [];
                let divider = (board.length / 3);
                let squareX = Math.floor(i / divider);
                let squareY = Math.floor(j / divider);
                
                for (let position of gridPositions){
                    if (position.x == i || position.y == j)
                        return false;
                        
                    if (squareX == position.squareX && squareY == position.squareY)
                        return false;
                }
                gridPositions.push(new Grid(i, j, board.length));
                sudokuMap.set(board[i][j], gridPositions);
            }    
        }

        return true;
    }

    
}
class Grid {
    x: number;
    y: number;
    squareX: number;
    squareY: number;

    constructor(x: number, y: number, boardSize: number){
        this.x = x;
        this.y = y;

        let divider = boardSize / 3;
        this.squareX = Math.floor(x / divider);
        this.squareY = Math.floor(y / divider);
    }
}