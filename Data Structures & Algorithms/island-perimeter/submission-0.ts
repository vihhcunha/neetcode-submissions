class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid: number[][]): number {
        for (let i = 0; i <= grid.length - 1; i++) {
            for (let j = 0; j <= grid[i].length - 1; j++) {
                if (grid[i][j] == 1) {
                    return this.calculatePerimeter(i, j, new Set(), grid);
                }
            }
        }
        return 0;
    }

    calculatePerimeter(r: number, c: number, visited: Set<string>, grid: number[][]): number {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        if (r < 0 || c < 0 ||
            r == ROWS ||
            c == COLS ||
            grid[r][c] == 0) {
                return 1;
        }
        if (visited.has(`${r},${c}`)){
            return 0;
        }
        visited.add(`${r},${c}`);
        let perimeter = 0;
        perimeter += this.calculatePerimeter(r + 1, c, visited, grid);
        perimeter += this.calculatePerimeter(r, c + 1, visited, grid);
        perimeter += this.calculatePerimeter(r - 1, c, visited, grid);
        perimeter += this.calculatePerimeter(r, c - 1, visited, grid);

        return perimeter;
    }
}
