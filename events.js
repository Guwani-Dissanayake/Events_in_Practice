const EventEmitter = require('events');

class Sales extends EventEmitter{
    constructor(){
        super();
    }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () =>{
    console.log("new sale");
});

myEmitter.on("newSale", () =>{
    console.log("name: Jonas");
});

myEmitter.on("newSale", stock =>{
    console.log(`now ${stock} items.`);
});

myEmitter.emit("newSale", 9);