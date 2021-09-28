var hello = 'Hola';
let world = 'hola mundo';
const helloWorld = 'hola mundo!';
// console.log(hello);

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();


//MALAS PRACTICAS
const helloWorld = () => {
    globalVar = 'im global'
}
console.log(globalVar);

const anotherFunction = () => {
    var localVar = globalVar = 'im global';
}