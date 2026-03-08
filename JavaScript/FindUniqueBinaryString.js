// var findDifferentBinaryString = function (nums) {
//     let test = ["1", "0"];
//     let res, finish;
//     let back = (generatedNumber = []) => {
//         for (let i = 0; i < nums[0].length; i++) {
//             if (finish) break;
//             for (let t of test) {
//                 if (generatedNumber.length === nums[0] && !nums.contains(generatedNumber.join(""))) {
//                     res = generatedNumber.join("");
//                     finish = true;
//                     break;
//                 }
//                 generatedNumber.push(t);
//                 back([...generatedNumber]);
//                 generatedNumber.pop(t);
//             }
//         }
//     }
//     back()
//     return res;
// };


var findDifferentBinaryString = (nums) => nums.map((_, i) => nums[i][i] === "0" ? "1" : "0").join("");

console.log(findDifferentBinaryString(["01", "10"]));
console.log(findDifferentBinaryString(["00", "01"]));
console.log(findDifferentBinaryString(["111", "011", "001"]));
