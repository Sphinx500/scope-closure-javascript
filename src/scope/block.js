const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'orange';
        const fruits3 = 'banana';
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);

}

fruits();


var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);

const anotherFunction = () => {
    for (var i = 0; i <10; i++){
        setTimeout(()=> {
            console.log(i);
        },1000)
    }
};
anotherFunction();