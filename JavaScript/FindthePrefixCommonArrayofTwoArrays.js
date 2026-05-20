/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let Prefix = new Map();
    let c = [];
    let count = 0;
    for (let i in A) {
        let a = A[i], b = B[i];
        if (Prefix.has(a) || a === b) count++;
        if (Prefix.has(b)) count++;
        Prefix.set(a, true);
        Prefix.set(b, true);
        c.push(count);
    }
    return c;
};