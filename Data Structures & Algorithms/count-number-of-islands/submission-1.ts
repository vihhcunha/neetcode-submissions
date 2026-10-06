class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const visited = new Set<string>();
        let count = 0;
        for (let r = 0; r <= grid.length - 1; r++) {
            for (let c = 0; c <= grid[r].length - 1; c++) {
                if (visited.has(`${r},${c}`) == false && grid[r][c] == "1") {
                    this.dfs(r, c, visited, grid);
                    count++;
                }
            }
        }
        return count;
    }

    dfs(r: number, c: number, visited: Set<string>, grid: string[][]): void {
        let ROWS = grid.length;
        let COLS = grid[0].length;

        if (r < 0 || c < 0 ||
            r == ROWS || c == COLS ||
            visited.has(`${r},${c}`) == true ||
            grid[r][c] == "0") {
            return;
        }

        visited.add(`${r},${c}`);
        this.dfs(r + 1, c, visited, grid);
        this.dfs(r, c + 1, visited, grid);
        this.dfs(r - 1, c, visited, grid);
        this.dfs(r, c - 1, visited, grid);
    }
}
