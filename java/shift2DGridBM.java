class Solution {
        private static final int REMEDY = 1000;   
    private static final int numOfBits = 11;
    public List<List<Integer>> shiftGrid(int[][] grid, int k) {
        int R = grid.length, C = grid[0].length, total = R * C;
        k %= total;
        makeAllNoLessThan0(grid); 
        saveNewValsByHigherBits(grid, k);
        recoverToOriginalVals(grid);
     // return Arrays.stream(grid)
     //              .map(row -> IntStream.of(row).boxed().collect(Collectors.toList()))
     //              .collect(Collectors.toList());
        LinkedList<List<Integer>> ans = new LinkedList<>();
        for (int[] row : grid) {
            ans.offer(new ArrayList<>());
            for (int cell : row) {
                ans.peekLast().add(cell);
            }
        }
        return ans;
    }
    private void makeAllNoLessThan0(int[][] grid) {
        for (int[] row : grid) {
            for (int i = 0; i < row.length; ++i) {
                row[i] += REMEDY;
            }
        }
    }
    private void saveNewValsByHigherBits(int[][] grid, int k) {
        for (int r = 0, R = grid.length, C = grid[0].length, mask = ((1 << numOfBits) - 1); r < R; ++r) {
            for (int c = 0; c < C; ++c) {
                int target = (r * C + c + k) % (R * C), i = target / C, j = target % C;
                grid[i][j] |= (grid[r][c] & mask) << numOfBits;
            }
        }
    }
    private void recoverToOriginalVals(int[][] grid) {
        for (int[] row : grid) {
            for (int c = 0; c < row.length; ++c) {
                row[c] >>= numOfBits;
                row[c] -= REMEDY;
            }
        }
    }
}