function longestSlideDown(pyramid){
    var index = 0
    var total = pyramid[0][0]
    for(var i = 1; i< pyramid.length ; i++){
        
        var range = [index , index+1]
        console.log(range)
        
    
        if(pyramid[i][range[0]] > pyramid[i][range[1]]){
            
            total = total + pyramid[i][range[0]]
            console.log(total)
            index = range[0]
            
        }else{
            
            total = total + pyramid[i][range[1]]
            console.log(total)
            index= range[1]
            
        }


    }
    return total
    
}

console.log(longestSlideDown(
      [ [3],
      [4,  10],
    [4,  2,  6],
  [8,  9,  8,  3],
[8,  5,  6,  3,  9]]))


//longestSlideDown [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]] 

//  /3/
// \7\ 4 
// 2 \4\ 6 
//8  5 \9\ 3
//8  5 5 \9\ 3