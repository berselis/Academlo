myFunction('a', 'b')

myFunction('z', 'x')

myFunction('b', 'w')


function myFunction(a, b){
    let obj = new Object();
    obj[a] = b;
    console.log(new Object()[a] = b); 
}
   

