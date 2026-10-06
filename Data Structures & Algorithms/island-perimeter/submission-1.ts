class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid: number[][]): number {
        for (let r = 0; r <= grid.length - 1; r++) {
            for (let c = 0; c <= grid[r].length - 1; c++) {
                if (grid[r][c] == 1) {
                    return this.calculatePerimeter(r, c, new Set<string>(), grid);
                }
            }
        }
        return 0;
    }

    calculatePerimeter(r: number, c: number, visited: Set<string>, grid: number[][]): number{
        const ROWS = grid.length;
        const COLS = grid[0].length;

        if (r < 0 || c < 0 ||
            r == ROWS || c == COLS ||
            grid[r][c] == 0){
            return 1;
        }

        if (visited.has(`${r},${c}`)) {
            return 0;
        }
        visited.add(`${r},${c}`);

        let perimeterCount = 0;
        perimeterCount += this.calculatePerimeter(r + 1, c, visited, grid);
        perimeterCount += this.calculatePerimeter(r, c + 1, visited, grid);
        perimeterCount += this.calculatePerimeter(r - 1, c, visited, grid);
        perimeterCount += this.calculatePerimeter(r, c - 1, visited, grid);

        return perimeterCount;
    }
 }
