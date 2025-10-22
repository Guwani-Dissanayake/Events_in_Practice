const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on("newSale", () =>{
    console.log("new sale");
});

myEmitter.on("newSale", () =>{
    console.log("name: Jonas");
});

myEmitter.emit("newSale");