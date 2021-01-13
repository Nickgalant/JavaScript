const { resolve } = require("path");

var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split(" ")

//symbols
//const uniqueId = Symbol('Hello');

//Well known symbols
//Symbol.iterator

//const arr = [1, 2, 3, 4];
//const str = 'Digital Innovation One';

// Generators
/*const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
       for (var i = 0; i < this.values.length; i ++){
           yield this.values[i];
       }
    }
}

for (let value of obj){
    console.log(value);
}*/

//promises

/*const doSomethingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        //didsomething
        resolve('First data');
    }, 1000);
})

const doOtherThingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        //didsomething
        resolve('Second data');
    }, 1000);
})

doSomethingPromise()
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split(''))); */

// fetch
/*fetch('/data.json').then(responseStream => {
    console.log(responseStream);
})*/

//async / await
/*const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
})

const simpleFunc = async () => {
    const data = await asyncTimer();
    return data;
}
simpleFunc()
.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});*/

//EventEmitter

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data){
        this.emit('User logged', data);
    }
}

const users = new Users();

users.on('User logged', data => {
    console.log(data);
});
users.userLogged({user: 'Nicholas Galante'});
users.userLogged({user: 'Celso Henrique'});