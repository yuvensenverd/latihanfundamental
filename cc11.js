function segitigakebalik(n){
    var output = ''
    for(var i = 0; i<n; i++){
        for(var x = 0; x<=i; x++){
            output = output + " "
        }
        for(var y = 0; y< n-i; y++){
            output = output + "* "
        }
        
        output = output + "\n"
    }
    return output
}

// console.log(segitigakebalik(19))

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
// console.log(createPyramid('5') )


// CREATE RHOMBUS

function createRhombus(n, many){
    var output = ""
    

    // Pyramid
    for(var i = 0; i<2; i++){
        if(i==0){

            for(var a = 0 ; a<n; a++){
                for(var g = 0; g<many; g++){

                    for(var b = 0; b<n-a; b++){
                        output = output + " "
                    }
                    for(var c = 0; c<=a; c++){
                        output = output + "* "
                    }
                    for(var b = 0; b<n-a; b++){
                        output = output + " "
                    }
                    
                }
                output = output + "\n"
            }

        }else{
    // Revpyramid
            for(var d = 0; d< n; d++){
                for(var h=0; h<many; h++){

                    for(var e=0; e<=d; e++){
                        output = output + " "
                    }
                    for(var f=0; f<n-d; f++){
                        output = output + "* "
                    }
                    for(var e=0; e<=d; e++){
                        output = output + " "
                    }

                }
                output = output + "\n"
            }
        }
    }

    // RevPyramid

        
        
    
    return output
}

console.log(createRhombus(15,2))





//* * * * *
// * * * *     // 1 spas
//  * * *   // 2 spas
//   * *
//    *