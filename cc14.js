function removeNb (n) {
    for(var i = 1; i<n+1 ; i++){

        for(var y = 1; y<n+1 ;y++){
            

            if((parseFloat(n/2) * 26 + parseFloat(n/2)*1 - i -y) == i * y){ 
                return [[i,y], [y,i]]
            }
            // var total = 0
            // for(var z = 1; z < n+1 ; z++){
            //     if(z == y || z == i){

            //     }else{
            //         total = total + z
            //     }
            // }
            // if(total == (i*y)){
            // //    console.log(i)
            // //    console.log(y)
            //    return [[i,y],[y,i]]
            // }
        }
    }
    return []

    // 13(26) + 13(1) - 15 - 21 == 15 * 21 >>>>>>>> 315 ==  315


}

console.log(removeNb(1006))

var results = [];
for (var a = 1; a <= n; a++) {
    var b = (n * (n + 1) / 2 - a) / (a + 1);
    if (b % 1 === 0 && b <= n) results.push([a, b]);
  }
  return results;
