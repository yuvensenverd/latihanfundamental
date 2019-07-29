function persistence(num) {
    num = num.toString()
    if(num.length == 1){
        return 0
    }else{
        var persistence = 0
        var xd = true
        while(xd){
            num = num.toString()
            var output = num[0]

            for(var i = 1 ; i<num.length; i++){
                 output = output * num[i]
            }
            persistence ++ 
            if(output.toString().length !== 1){
                num = output
                xd = true
            }else{
                xd = false
            }
        }
        return persistence
    }
}

console.log(persistence(999))