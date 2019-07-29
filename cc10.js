function isPalindrome(str){
    var array = []
    var rev = []
    for(var i = 0; i<str.length;i++){
        array.push(str[i])
    }
    for(var y= str.length-1; y>=0; y--){
        rev.push(str[y])
    }
    console.log(array)
    console.log(rev)

    if(array.join("") !== rev.join("")){
        return false
    }

    return true

    

    
}
// );const Palindrome = (kata) => {
//     const karakter =
//     kata.toLowerCase().replace(/[^a-z]/g, '') // hapus spasi
//     .split('');
//     console.log(karakter)
//     if (karakter.join('') === 
//     karakter.reverse().join('')) {
//     return true;
//     } else {
//     return false;
//     }
//     }
//     const hasil = Palindrome("Mala ma");
//     console.log(hasil


console.log(isPalindrome("KaataK"))