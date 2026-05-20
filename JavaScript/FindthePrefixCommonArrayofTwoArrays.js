/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let prefix = [];
    let count = 0;
    return A.map((c, i) => {
        if (prefix[c]) count++
        else prefix[c] = true;

        if (prefix[B[i]]) count++
        else prefix[B[i]] = true;

        return count;
    });
};