// var a = [{"a" : 2}, {"b" : 3}]
// console.log(a.sort(function(a,b){
//     return a-b
//     }))

// var a = [ { a: 1 }, { a: 1 }, { b: 1 }, { c: 1 } ]
// var test = { a : 2}
// console.log((Object.keys(a[0])[0]))
// console.log()


// var obj = [{ angka : 5, xd : 7}, { angka : 8, xd : 2}]

// console.log(
//     obj.sort(function(a,b){ 
//         return a.xd - b.xd
//     })
// )

// var num = 44
// console.log(num.toString().length)

// var specials = /[^A-Za-z/\s/]/g;
// console.log( specials.test("aisdjias2jdia"))

// var a = [1,1,2,2,2,2,3,3,3,3,3]
// var cache = {}
// var x = 3
// var hasil = a.filter((n)=>{
//     cache[n] = (cache[n]||0) + 1; // tambah obj
//     console.log(cache)  
//     return cache[n] <= 3 // selama objectnya blm = 4, dia masih ngepush terus di arr hasil
// })
// console.log(hasil)

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function() {
    console.log(this.getPokeName() + 'I choose you!');
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon(); // 'Pika Chu I choose you!



var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};
// NO LOGPOKEMON, KRN NDA MAKE COPY, LANGSUNG PANGGIL FUNCTIONNYA

pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms  
// KALAU CALL BISA PASS PARAMETER DIDALAM FUNCTION, APPLY JUGA SAMA, TAPI PARAMETERNYA ITU DIDALAM ARRAY


// DIFFERENCE BETWEEN CALL AND BIND 
//Accepts additional parameters as well
//Executes the function it was called upon right away.
//The call() method does not make a copy of the function it is being called on.

function greeter(name, age) {

    var message = name + " says howdy!! He is " + age + " years old";

    return function greet() {

        console.log(message);

    };

}

// Generate the closure

var JamesGreeter = greeter("James", 23);

// Use the closure

JamesGreeter();




var someObject = {
    myProperty : 'Foo',
    
    myMethod : function(prefix, postfix) {
    
        console.log(prefix + this.myProperty + postfix);
    }
    };
    someObject.myMethod('<', '>'); // alerts '<Foo>'
    var someOtherObject  = {
    
        myProperty : 'Bar'
    
    };
    someObject.myMethod.call(someOtherObject, '<', '>'); // alerts '<Bar>'
    
    someObject.myMethod.apply(someOtherObject, ['<', '>']); // alerts '<Bar>'