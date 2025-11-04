var findXSum = function(nums, k, x) {
    const n = nums.length;
    let freq = new Map(), res = [];
    for (let i = 0; i <= n-k; i++) {
        if (i === 0) {
            for (let j = 0; j < k; j++) freq.set(nums[j], (freq.get(nums[j]) || 0) + 1);
        } else {
            freq.set(nums[i-1], freq.get(nums[i-1]) - 1);
            if (i + k - 1 < n) freq.set(nums[i+k-1], (freq.get(nums[i+k-1]) || 0) + 1);
        }

        let top = [...freq.entries()]
                    .filter(([_, val]) => val > 0)
                    .sort((a, b) => b[1] - a[1] || b[0] - a[0])
                    .slice(0, x);
        res.push(top.reduce((acc, [key, val]) => acc + val * key, 0));
    }

    return res;
};


console.log(findXSum([1,1,2,2,3,4,2,3], 6, 2));
