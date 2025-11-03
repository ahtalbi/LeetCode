var minCost = function (colors, nT) {
    let n = colors.length; same = false, li = 0, res = 0;
    for (let i = 1; i < n; i++) {
        if (colors[i - 1] === colors[i]) {
            if (!same) li = i - 1;
            same++;
        } else if (same) {
            let arrT = nT.slice(li, i).sort((a, b) => a - b);
            for (let j = 0; j < arrT.length - 1; j++) res += arrT[j];
            same = 0;
        }
    }
    if (same) {
        let arrT = nT.slice(li, n).sort((a, b) => a - b);
        for (let j = 0; j < arrT.length - 1; j++) res += arrT[j];
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
