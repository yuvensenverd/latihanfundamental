function duplicateCount(text){
    var array = []

    // COUNTING LIST OF ALPHABET & THE QTY
    for(var i = 0; i<text.length; i++){
        var find = false
        for(var y = 0; y<array.length; y++){
            // var obj = {"a" : 2, "b": 3} , Object.keys(obj)[1] = "b"
            // OBJECT KEYS UNTUK DPT NAMA PROPERTY DARI OBJECT, FOR ASSIGNMENT >> NamaObj['OBJECT KEYS DLL'] UNTUJK CARI VALUE DARI PROPERTIENYA
            // Object.keys(array[y])[0].toLowerCase() == text[i].toLowerCase() sama aja dgn dibawah
            if(Object.keys(array[y])[0].toLowerCase().indexOf(text[i].toLowerCase()) !== -1){ // KARENA ARRAY[Y] ITU OBJECT
                array[y][Object.keys(array[y])[0]] = array[y][Object.keys(array[y])[0]] + 1
                find = true
            }
        }
        if(find == false){
            var obj = {[text[i]] : 1}
            array.push(obj)
        }
    }
    console.log(array)

    // SORT

    var newarr = array.sort(function(a,b){
         return b[Object.keys(b)[0]]-a[Object.keys(a)[0]] // a & b adalah object
        })
    
    console.log(newarr)

    

    return newarr[0][Object.keys(newarr[0])[0]] // newarr[0] selalu sama , tulis 2 kali
}

console.log(duplicateCount("aabbbbbaabbBc"))



// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


// Test.assertEquals(duplicateCount(""), 0);
// Test.assertEquals(duplicateCount("abcde"), 0);
// Test.assertEquals(duplicateCount("aabbcde"), 2);
// Test.assertEquals(duplicateCount("aabBcde"), 2,"should ignore case");
// Test.assertEquals(duplicateCount("Indivisibility"), 1)
// Test.assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")



// function countDuplicates(original) {

//     let counts = {},
//       duplicate = 0;
//     original.forEach(function(x) {
//       counts[x] = (counts[x] || 0) + 1;  (kalau tidak ada yg namanya count[x], bikin obj count[x] = 0 , else count[x]+1)
//t his means that if (counts[x] || 0) doesn't have value (undefined, null) then use 0. It is a way of assigning a default value to a variable in JavaScript.
//     });
  
//     for (var key in counts) {
//       if (counts.hasOwnProperty(key)) {
//         counts[key] > 1 ? duplicate++ : duplicate;
//       }
//     }
  
//     return duplicate;
  
//   }

var arrayofobj = [{'a' : 50} , {'c' : 7}]
console.log(Object.keys(arrayofobj[0])[0] + " Dan " + Object.keys(arrayofobj[1])[0] + " Bernilai " + arrayofobj[0][Object.keys(arrayofobj[0])[0]] + " Dan " + arrayofobj[1][Object.keys(arrayofobj[1])[0]])
console.log(Object.keys(arrayofobj[0]))