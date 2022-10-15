from typing import List


class Solution:
    def shiftGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:

        def makeAllNoLessThan0(remedy: int) -> None:
            for row in grid:
                for c, _ in enumerate(row):
                    row[c] += remedy

        def saveNewValsByHigherBits(numOfBits: int) -> None:
            mask = 2 ** numOfBits - 1
            for r in range(R):
                for c in range(C):
                    target = (r * C + c + k) % total
                    i, j = target // C, target % C 
                    grid[i][j] |= (grid[r][c] & mask) << numOfBits

        def recoverToOriginalVals(remedy: int, numOfBits: int) -> None:
            for row in grid:
                for c, _ in enumerate(row):
                    row[c] >>= numOfBits
                    row[c] -= remedy

        R, C = map(len, (grid, grid[0]))
        total = R * C
        k %= total

        makeAllNoLessThan0(1000)
        saveNewValsByHigherBits(11)
        recoverToOriginalVals(1000, 11)

        return grid