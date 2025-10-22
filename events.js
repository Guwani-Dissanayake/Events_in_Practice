const EventEmitter = require('events');
const http = require('http');

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



const server = http.createServer();

server.on("request", (req, res) =>{
    console.log("request received");
    console.log(req.url);
    res.end("request received");

});

server.on("request", (req, res) =>{
    console.log("another request");

});

server.on("close", ()=>{
    console.log("server closed");
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("waiting for requests...");
})