function rowSumOddNumbers(row){
    var num = 1
    var angkainrow = 1
    var x = 0
    while(x < row-1){
        num = num + (2 * angkainrow)
        angkainrow++
        x++
        
    }
    console.log(num)
    
    var initialnum = num +2

  
    for(var i = 1; i< angkainrow; i++){
        num = num + initialnum
        initialnum= initialnum + 2
     
    }
    return num
}

console.log(rowSumOddNumbers(5))
//1
//



//             1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8
var awal = 1
var output = ''
var numberinrow = 1
for(var i=0; i<4; i++){
    for(var y= 0; y<numberinrow-1; y++){
        awal = awal+2
        output = output+awal
    }
    if(awal == 1){

        output = awal+output
        output = output + '\n'
        numberinrow++
    }else{
        awal = awal+2
        output = output+awal
        output= output+'\n'
        numberinrow++
        
    }
}
console.log(output)

// PYramid

function createPyramid(rows)
{
    var output="";
for(var i=0;i<rows;i++) {

    for(var j=0;j<rows-i;j++) {
        output+=" ";
    }
    for(var k=0;k<=i;k++) {    
       output += "* ";
    }
    output = output + '\n' 
}  
return output
}
console.log(createPyramid('5') )//pass number as row of pyramid you want.