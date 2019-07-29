function validParentheses(string){
    if(string[0] == ")" || string[string.length-1] == "(" || (string.length % 2 !== 0)){
        return false
    }else{
    
        var kurungbuka = 0
        var kurungtutup = 0 


        
        for(var i = 0; i<string.length; i++ ){
            
            if(string[i] == "("){
                kurungbuka ++
           
            }
            else if(string[i]==")"){
                kurungtutup ++
               
            }else{
    
            }
        }
        if(kurungbuka !== kurungtutup){
            return false
        }else{
            return true
        }

        
        
        // kedua 

    }


  }

  console.log(validParentheses("())())"))