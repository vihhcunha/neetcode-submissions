class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let num = 0;
        const visited = new Set<string>();

        for (let i = 0; i <= grid.length - 1; i++) {
            for (let j = 0; j <= grid[i].length - 1; j++) {
                if (visited.has(`${i},${j}`)) {
                    continue;
                }
                if (grid[i][j] == "1") {
                    num++;
                    this.dfs(i, j, visited, grid);
                }
            }
        }
        return num;
    }

    dfs(r: number, c: number, visited: Set<string>, grid: string[][]) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        if (r < 0 || c < 0 ||
            r == ROWS || c == COLS ||
            grid[r][c] == "0" ||
            visited.has(`${r},${c}`)){
            return;
        }

        visited.add(`${r},${c}`);
        this.dfs(r + 1, c, visited, grid);
        this.dfs(r, c + 1, visited, grid);
        this.dfs(r - 1, c, visited, grid);
        this.dfs(r, c - 1, visited, grid);
    }
}
