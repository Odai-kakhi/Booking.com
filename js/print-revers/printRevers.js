var arr = [1, 2, 3, 4, 5]
console.log(arr.reverse())


var myarr1 = [1, 1, 1]
var myarr2 = [1, 2, 1]


function arrCheck(array) {
    array.forEach(function(element) {
        if (array[element] === array[element+1]) {
            console.log(true)
        }else{
            console.log(false)
        }
    });
}



arrCheck(myarr2)