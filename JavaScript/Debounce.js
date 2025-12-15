function debounce(func, delay) {
    let lt;
    return function(...args) {
        clearTimeout(lt);
        lt = setTimeout(() => {
            func(...args);
        }, delay);
    }
}