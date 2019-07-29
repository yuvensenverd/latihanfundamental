var max = (arr) =>{
    var nilaiMax = arr[0]
    for(var i = 1; i<arr.length; i++){
        if(nilaiMax < arr[i]){
            nilaiMax = arr[i]
        }
    }
    return nilaiMax
}

console.log(max([2,7,2,1,2]))