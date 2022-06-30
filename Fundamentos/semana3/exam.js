


function reverseText(text) {
    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado
    // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable reversedText
    // return reversedText;
    return [...text].reverse().join("");
}






//  console.log(reverseText('Hola'));




function sumTwoArrays(array, array2) {
    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado
    // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable sum
    // return sum;

    //const total = array.reduce((initial, current) => initial += current) + array2.reduce((initial, current) => initial += current);

    return array.concat(array2).reduce((initial, current) => initial += current);

}



console.log(sumTwoArrays([100, 20], [10, 20, 10, -30, 50, 5, 23, -5, -87]))





function getNMultiples(number, totalMultiples) {
    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado
    // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable multiples
    // return multiples;

    const multiples = [];
    let first = 1;
    while (first <= totalMultiples) {
        multiples.push(number * (first + 1));
        first++;
    }
    return multiples;
}





//console.log(getNMultiples(3, 4))




function findMostCommonLetter(text) {
    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado
    // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable mostCommonLetter
    // return mostCommonLetter;
    const objLetter = [...text].reduce((key, i) => {
        key[i] = (key[i] || 0) + 1;
        return key;
    }, new Object);

    const most = Object.keys(objLetter).reduce((first, next) => {
        return objLetter[first] >= objLetter[next] ? first : next;
    });


    return most



}




//console.log(findMostCommonLetter('Hola, me gusta la programacióniiiii'));