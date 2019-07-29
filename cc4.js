function findMissingLetter (array){
    var booleanz = array[0] == array[0].toUpperCase()
    console.log(booleanz)
    if(booleanz == true){
        
        var act = (text) => {
            return text.toUpperCase()
        }
    }else {
        var act = (text) =>{
            return text.toLowerCase()
        }
    }

    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" // a
    var firstLetter = array[0].toUpperCase() // a
    var index = alphabet.indexOf(firstLetter) //0

    for(var i = 1; i<array.length; i++){
  
        if(array[i].toUpperCase() !== alphabet[index+i]){ // 'b' !== 
            return act(alphabet[index+i])
        }
    }
}



console.log(findMissingLetter(['A','B','C','D','F']))