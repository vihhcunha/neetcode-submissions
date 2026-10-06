class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid: number[][]): number {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        if (grid[0][0] === 1 || grid[ROWS - 1][COLS - 1] === 1) return -1;

        const visited = new Set<string>();
        const queue = [];
         const directions = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
            [1, 1],
            [-1, -1],
            [1, -1],
            [-1, 1],
        ];

        if (grid.length > 0) {
            queue.push([0, 0, 1]);
            visited.add(`${0},${0}`);
        }

        while (queue.length > 0) {
            const [r, c, length] = queue.shift();
            if (r === ROWS - 1 && c === COLS - 1) return length;
            for (let direction of directions) {
                 const nr = r + direction[0],
                    nc = c + direction[1];
                if (
                    nr >= 0 &&
                    nc >= 0 &&
                    nr < ROWS &&
                    nc < COLS &&
                    grid[nr][nc] === 0 &&
                    !visited.has(`${nr},${nc}`))
                {
                    queue.push([nr, nc, length + 1]);
                    visited.add(`${nr},${nc}`);
                }
            }
        }
        return -1;
    }
}
