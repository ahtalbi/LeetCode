var minCost = function (colors, nT) {
    const n = colors.length;
    let res = 0;
    let i = 0;
    while (i < n) {
        let j = i;
        let largest = nT[j];
        let sum = nT[j];
        while (j + 1 < n && colors[j] === colors[j + 1]) {
            j += 1;
            largest = Math.max(largest, nT[j]);
            sum += nT[j];
        }
        res += sum - largest;
        i = j + 1;
    }
    return res;
};

// let n = colors.length; same = false, li = 0; indexes = [];
//     for (let i = 1; i < n; i++) {
//         if (colors[i - 1] === colors[i]) {
//             console.log(colors[i - 1], colors[i]);
//             if (!same) {
//                 li = i - 1;
//             }
//             same++;
//         }
//         if (same) {
//             indexes.push([li, i]);
//             same--;
//         }
//     }

console.log(minCost("abaac", [1, 2, 3, 4, 5])); // 3
console.log(minCost("abc", [1, 2, 3]));       // 0
console.log(minCost("aabaa", [1, 2, 3, 4, 1])); // 2
console.log(minCost("aaabbbabbbb", [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1])); // 26
