var arr = [1, 2, 3, 4, 15]
function add(a, b) {
    return a + b;
}
var result = arr.reduce(add, 0)
console.log(result)