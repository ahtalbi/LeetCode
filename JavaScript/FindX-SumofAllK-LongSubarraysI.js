var findXSum = function(nums, k, x) {
    const n = nums.length;
    const freq = new Map();
    const res = [];

    for (let i = 0; i < n; i++) {
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
        if (i >= k) {
            const prev = nums[i - k];
            freq.set(prev, freq.get(prev) - 1);
            if (freq.get(prev) === 0) freq.delete(prev);
        }
        if (i >= k - 1) {
            let arr = Array.from(freq.entries());
            arr.sort((a,b) => b[1] - a[1] || b[0] - a[0]);
            res.push(arr.slice(0, x).reduce((acc,[key,val]) => acc + key * val, 0));
        }
    }
    return res;
};

console.log(findXSum([1,1,2,2,3,4,2,3], 6, 2));