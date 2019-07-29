function sortArray(array) {
    // Return a sorted array.
    var indexarr = []
    var oddarr = []
    for(var i = 0; i<array.length; i++){
        if(array[i] % 2 !== 0){
            //ganjil
            indexarr.push(i)
            oddarr.push(array[i])
        }
    }
 
    oddarr = oddarr.sort((a,b)=> a-b)

    for(var y = 0;y<oddarr.length ;y++){
      
        array[indexarr[y]] = oddarr[y]
    }
    return array
  }

console.log(sortArray([5, 3, 2, 8, 1, 4]))


// Sorted sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

// BUBBLE
let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};