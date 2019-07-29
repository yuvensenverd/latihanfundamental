// function deleteNth(arr,n){

//     var array = []
//     for(var i = 0; i<arr.length; i++){
 
//         var find = false
//         for(var y = 0; y<array.length; y++){
         
//             if(Object.keys(array[y])[0] == arr[i]){
        
//                 array[y][Object.keys(array[y])[0]] =array[y][Object.keys(array[y])[0]] + 1
//                 find = true
//             }
            
//         }
//         if(find == false){
        
     
//             var obj = { [arr[i]] : 1}
//             array.push(obj)
//         }
        
        
//     }
//     var hasilarray = []
//     for(var z = 0 ; z<array.length; z++){
//         var jumlah = array[z][Object.keys(array[z])[0]]
//         if(jumlah >= n) {
//             for(var o = 0; o<n; o++){
//                 hasilarray.push(parseInt(Object.keys(array[z])[0]))
//             }
//         }else{
//             for(var o = 0; o<jumlah; o++){
//                 hasilarray.push(parseInt(Object.keys(array[z])[0]))
//             }
//         }
//     }

//     return hasilarray

   

//   }




  function deleteNth(arr,x) {
    var cache = {};
    var hasil = arr.filter(function(n) {
      console.log(n)
      cache[n] = (cache[n]||0) + 1; // (kalau tidak ada yg namanya count[x], bikin obj count[x] = 0 , else count[x]+1)
      //t his means that if (counts[x] || 0) doesn't have value (undefined, null) then use 0. It is a way of assigning a default value to a variable in JavaScript.
      return cache[n] <= x;
    });
    console.log(hasil)
  }
console.log(deleteNth([1,1,1,1], 2)) // return [20,37,21]