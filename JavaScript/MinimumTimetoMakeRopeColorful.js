var minCost = function (colors, nT) {
    const GetAddedValue = (arrT) => {
        const total = arrT.reduce((acc, current) => acc + current, 0);
        const max = Math.max(...arrT);
        return total - max;
    };
    let n = colors.length; same = false, li = 0, res = 0;
    for (let i = 1; i < n; i++) {
        if (colors[i - 1] === colors[i]) {
            if (!same) li = i - 1;
            same++;
        } else if (same) {
            res += GetAddedValue(nT.slice(li, i));
            same = 0;
        }
    }
    if (same) res += GetAddedValue(nT.slice(li, n));
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
