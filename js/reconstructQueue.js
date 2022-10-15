/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
    if (people.length == 1) return people
    for (let i = 0; i < people.length; i++) {
        for (let j = i + 1; j < people.length; j++) {
            if (
                people[j][0] < people[i][0] &&
                people[i][1] == 0 &&
                people[j][1] == 0
            ) {
                ;[people[j], people[i]] = [people[i], people[j]]
            }
        }
    }
    return people
}

const p = reconstructQueue([
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2]
])
console.log(p)
