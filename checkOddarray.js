function transformFirstAndLast(array) {
    var result = {};
    result[array[0]] = array[array.length - 1];
    console.log(array);
    return result;
}

var arr = ["Kevin", "Bacon", "Love", "Hart", "Costner", "Spacey", "byeonguk"];
var output = transformFirstAndLast(arr);
console.log(output);
