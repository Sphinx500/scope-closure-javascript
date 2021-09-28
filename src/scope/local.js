const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
}

helloWorld();
console.log(helloWorld);

var scope = 'i am global';

const functionScope = () => {
    // a esto se le llama el ambito léxico. Esta variable scope es local y es diferente a la variable global scope, asi tengan el mismo nombre
    var scope = 'i am just a local'; 
    const func = () => {
        return scope
    }
    console.log(func());
}
    
functionScope();
console.log(scope);

