/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
    let counter = 0

    if (grid[0][0] != 0 || grid[-1][-1] != 0) {
        return -1
    }

    for (let i = 0; i < grid.length; i++) {
        if (grid[i][i] != 1) {
            counter++
        }
    }

    return counter
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
    const m = grid.length || 0
    const n = (m && grid[0].length) || 0

    if (m === 0 || n === 0 || grid[0][0] !== 0) return -1

    let step = 1
    const queue = [[0, 0]]
    const dires = [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1],
        [-1, 1],
        [-1, -1],
        [1, 1],
        [1, -1]
    ]

    while (queue.length) {
        const size = queue.length
        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift()

            if (x === m - 1 && y === n - 1) return step

            for (const [dx, dy] of dires) {
                const newX = x + dx,
                    newY = y + dy
                if (_withinBound(newX, newY, m, n) && grid[newX][newY] === 0) {
                    grid[newX][newY] = 1
                    queue.push([newX, newY])
                }
            }
        }

        step += 1
    }

    return -1
}

function _withinBound(x, y, m, n) {
    return 0 <= x && 0 <= y && x < m && y < n
}
