// function pigIt(str){
//     //Code here
//     var specials = /[^A-Za-z/\s/]/g;

//     var arrayhasil = []
//     var kata = ""
//     for(var i = 0; i<str.length; i++){
        
        
        
//         if(str[i] == " " || i == str.length-1){
//             if(specials.test(str[i]) == true){
//                 arrayhasil.push(str[i])
//             }else{

//                 if(i == str.length-1){
//                     kata = kata + str[i]
//                 }
//                 // PROCESS
//                 // "pig" >> "igpay"
//                 var array = kata.split("")
//                 var first = array[0]
//                 array.splice(0,1)
//                 //
//                 array.push(first)
//                 array.push("a")
//                 array.push("y")
    
    
//                 arrayhasil.push(array.join(""))
//                 kata = ""
//             }
//         }else{
//             if(specials.test(str[i]) == true){
                
//             }else{

//                 kata = kata + str[i]
//             }
//         }
       

//     }

//     return arrayhasil.join(" ")
//   }

function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$2ay\$3")
  }

console.log(pigIt("asdasd"))
