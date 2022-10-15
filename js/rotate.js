var rotate = function (matrix) {
    transpose(matrix)
    reflect(matrix)
    return matrix
}

var transpose = function (matrix) {
    const n = matrix.length
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let tmp = matrix[j][i]
            matrix[j][i] = matrix[i][j]
            matrix[i][j] = tmp
        }
    }
}

var reflect = function (matrix) {
    const n = matrix.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            let tmp = matrix[i][j]
            matrix[i][j] = matrix[i][n - j - 1]
            matrix[i][n - j - 1] = tmp
        }
    }
}

console.log(
    rotate([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
)
