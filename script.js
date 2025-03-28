function word(str, letter){
    let result = str.split('');
    let counter = 0;
    for(let i = 0; i < result.length; i++){
        if (result[i] === letter){
            counter++;
        }
    }
    return counter;
}
console.log(word("Hola como estas", "H"));


function impar(number){
    let result = [];
    while(result.length < 50){
    if(number % 2 !== 0){
        result.push(number)
        }
        number++;
    }
    return result;
}
console.log(impar(5));

