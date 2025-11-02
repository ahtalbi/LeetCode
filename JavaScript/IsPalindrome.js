function isPalindrome(s) {
    const c = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let l = 0, r = c.length - 1;
    while (l < r) {
        if (c[l] !== c[r]) return false;
        l++;
        r--;
    }
    return true;
}