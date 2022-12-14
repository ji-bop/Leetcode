class Solution {
    public List<List<Integer>> shiftGrid(int[][] grid, int k) {
        int m = grid.length, n = grid[0].length;
        int start = m * n - k % (m * n);
        LinkedList<List<Integer>> ans = ans = new LinkedList<>();
        for (int i = start; i < m * n + start; ++i) {
            int j = i % (m *  n), r = j / n, c = j % n;
            if ((i - start) % n == 0)
                ans.add(new ArrayList<>());
                ans.peekLast().add(grid[r][c]);
        }
        return ans;
    }
}