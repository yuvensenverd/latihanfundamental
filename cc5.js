function filter_list(array){

    var xd = array.filter((val)=>{
       
        return (val >= 0 && (typeof(val) == "number") )
    })

    return xd
}

console.log(filter_list([1,2,'aasf','1','123',123]))
//== [1,2,123])

// var a = [2,5,7,9,4,2,13,61,75]
// console.log(a.filter((e)=>{ return e>10}))