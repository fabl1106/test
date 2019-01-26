function transformFirstAndLast(array) {
    var result = {};
    result[array[0]] = array[array.length - 1];

    return result;
}

var arr = ["Kevin", "Bacon", "Love", "Hart", "Costner", "Spacey", "byeonguk"];
var output = transformFirstAndLast(arr);
console.log(output);
