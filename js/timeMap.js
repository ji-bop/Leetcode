let keyTimeMap = {}
var TimeMap = function () {}

TimeMap.prototype.set = function (key, value, timestamp) {
    // If the 'key' does not exist in dictionary.
    if (!(key in keyTimeMap)) {
        keyTimeMap[key] = {}
    }

    // Store '(Timestamp, value)' pair in 'key' bucket.
    keyTimeMap[key][timestamp] = value
}

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.get = function (key, timestamp) {
    // If the 'key' does not exist in dictionary we will return empty string.
    if (!(key in keyTimeMap)) {
        return ''
    }

    // Iterate on time from 'timestamp' to '1'.
    for (let currTime = timestamp; currTime >= 1; --currTime) {
        // If a value for current time is store in key's bucket we return the value
        if (currTime in keyTimeMap[key]) {
            return keyTimeMap[key][currTime]
        }
    }
    // Otherwise no time <= timestamp was stored in key's bucket.
    return ''
}
