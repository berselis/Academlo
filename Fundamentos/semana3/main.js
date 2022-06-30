const frase = "La noción del tiempo, se pierde cuando la consentración es absoluta";

function ViewInSide(letter) {
    return frase.includes(letter);
}


function Viewposition() {
    return frase.charAt();
}


function ViewReplace() {


    return frase.replace('absoluta', 'derivada');
}

//console.log(ViewInSide('Ramon'));

//console.log(Viewposition());

const array = [25, 'manzana', 85.25, [1, 52], {}];



//console.log(ViewReplace())

//console.log(array.at(-1));

/////////////////////////////////////////////////////////////////////////////
//8
const array1 = [
    { name: 'Georg', email: 'georg@academlo.com' },
    { name: 'Andrea', email: 'andrea@gmail.com' }
];

const array2 = [
    { email: 'georg@academlo.com', attendance: true },
    { email: 'andrea@gmail.com', attendance: false }
]


function MergerArrays(array1, array2) {
    array1.forEach((item, i) => {
        if (item.email == array2[i].email) {
            item.attendance = array2[i].attendance;
        }
    });

}

/////////////////////////////////////////////////////////////////////////////
//9

// const students = [
//     { name: 'Georg', email: 'georg@academlo.com', score: 100 },
//     { name: 'Berselis', email: 'berselis@gmail.com', score: 29 },
//     { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
//     { name: 'Juan', email: 'juan@gmail.com', score: 29 },
//     { name: 'Andrés', email: 'andres@gmail.com', score: 34 },
//     { name: 'maria', email: 'maria@gmail.com', score: 83 },
// ]

function orderStudentsByScore(students) {
    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado
    // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable orderedData
    // return orderedData;

    students.sort((a, b) => {
        return a.score - b.score;
    });

    students.forEach(item => {
        console.log(item);

    });

    return students;

}

//orderStudentsByScore(students);

/////////////////////////////////////////////////////////////////////////////
//10

// const students = [
//     { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
//     { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
//     { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
//     { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
//   ];

const countries = [
    { id: 1, name: 'Mexico', },
    { id: 2, name: 'Colombia' }
];

let countryName = 'Colombia';


function countStudents(students, countries, countryName) {
    const ID = countries.find(item => item.name == countryName).id;
    const cant = students.filter(item => item.country_id == ID).length;

}

/////////////////////////////////////////////////////////////////////////////
//11

const students = [
    { name: 'Daniela', age: 25 },
    { name: 'Camila', age: 23 },
    { name: 'Andrea', age: 23 },
    { name: 'José', age: 27 },
    { name: 'Yennifer', age: 25 },
    { name: 'Georg', age: 23 },
    { name: 'Berselis', age: 35 },
    { name: 'Gabriel', age: 37 },
    { name: 'Diego', age: 35 },
    { name: 'Mayrena', age: 27 },
    { name: 'Ayelizabeth', age: 23 },
    { name: 'Bailys', age: 27 },
    { name: 'Esthela', age: 38 },
    { name: 'Yeimi', age: 38 },
    { name: 'Patricia', age: 33 },
    { name: 'Leandro', age: 38 }
];



function findMostCommonAge(students) {
    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado
    // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable mostCommonAge
    // return mostCommonAge;
    const ages = students.map(item => item.age);
    console.log(ages);

    const objAges = ages.reduce((key, i) => {
        key[i] = (key[i] || 0) + 1;
        return key;
    }, new Object);


    console.log(objAges);

    const most = Object.keys(objAges).reduce((first, next) => {
        return objAges[first] > objAges[next] ? first : next;
    });
    return most;
}
//console.log(findMostCommonAge(students));


/////////////////////////////////////////////////////////////////////////////
//12

// const users = [
//     {
//         name: 'Erik',
//         gender: 'male',
//         age: 22,
//     },
//     {
//         name: 'Daniela',
//         gender: 'female',
//         age: 22,
//     },
//     {
//         name: 'Gustavo',
//         gender: 'male',
//         age: 49,
//     },
//     {
//         name: 'María',
//         gender: 'female',
//         age: 35,
//     },
// ];

function findUser(users, name) {

    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado
    // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable user
    // return user;
    const obj = users.find(item => { return item.name == name });

    console.log(obj);

}

//findUser(users, 'María');



/////////////////////////////////////////////////////////////////////////////
//13


// const users = [
//     { name: 'Erik', email: 'erik@academlo.com', channel: 'youtube', application: null },
//     { name: 'Georg', email: 'georg@gmail.com', channel: 'facebook', application: { country: 'Mexico', state: 'Nuevo León' } },
//     { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } },
//     { name: 'Berselis', email: 'berselis@gmail.com', channel: 'vimeo', application: null }
// ];


function getApplications(users) {
    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado
    // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable usersWithApplications
    // return usersWithApplications;

    const apply = users.filter(item => item.application !== null);

    console.log(apply);

}

//getApplications(users);


/////////////////////////////////////////////////////////////////////////////
//14

function sumEvens(start, end) {
    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado
    // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable sum
    // return sum;
    let total = 0;

    for (start += 1; start < end; start++) {
        if (start % 2 === 0) {
            console.log(total, start);
            total += start;
        }
    }

    console.log(total);


}
//sumEvens(20, 30);




/////////////////////////////////////////////////////////////////////////////
//15

function getMultiples(number, limit) {
    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado
    // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable multiples
    // return multiples;

    let multiples = [];
    for (let x = 2; x < Infinity; x++) {
        let result = number * x;
        if (result >= limit) break;
        multiples.push(result);
    }
    console.log(multiples);

}


//getMultiples(20, 100);

/////////////////////////////////////////////////////////////////////////////
//16

function countLetter(phrase, letter) {
    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado
    // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable total
    // return total;

    const reg = new RegExp(letter, 'g');
    return phrase.match(reg).length;
}

//console.log(countLetter('Hola, me llmo Erika', 'a'));


/////////////////////////////////////////////////////////////////////////////
//17

// const studentss = [
//     { name: 'Andrea', email: 'andrea@gmail.com', channel: 'youtube', application: null },
//     { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } },
//     { name: 'Alondra', email: 'alondra@gmail.com', channel: 'twitter', application: { country: 'Colombia', state: 'Bogotá' } },
//     { name: 'Luis', email: 'luisa@gmail.com', channel: 'twitter', application: { country: 'México', state: 'Nuevo León' } },
//     { name: 'Berselis', email: 'berselis@gmail.com', channel: 'youtube', application: { country: 'Rep. Dom', state: 'San Pedro de Macorís' } },
//     { name: 'Alejandro', email: 'alejandro@gmail.com', channel: 'twitter', application: null },
//     { name: 'Carol', email: 'carol@gmail.com', channel: 'twitter', application: { country: 'Perú', state: 'Lima' } },

// ];

function countApplicationsByChannel(students) {
    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado
    // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable applications
    // return applications;
    const applications = students.filter((obj) => {
        if (obj.application !== null) return obj;
    });
    const channels = applications.reduce((element, next) => {
        element[next.channel] = (element[next.channel] || 0) + 1;
        return element;
    }, new Object);
    return channels;
}

// console.log(countApplicationsByChannel(studentss));

/////////////////////////////////////////////////////////////////////////////
//18

function countNumbers(number) {
    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado
    // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable total
    // return total;
    return number.toString().length;
}

//console.log(countNumbers(82));

