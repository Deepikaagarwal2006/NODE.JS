import http from 'http'; // ESM  HTTP:-HyperText Transfer Protocol
//const http = require("http");// commonjs


const server = http.createServer((req, res) => {
    console.log("Hello World");
    
    //  res.statusCode = 200;

    //  res.setHeader("Content-Type", "plain/text");

     res.writeHeader(200 , {
        "content-Type": "plain/text",
        "content-header" : "hello ece"
    });


     res.end("Hello from Server");
});


server.listen(3000, "127.0.0.1", ()=>{
    console.log("Server is running on http://127.0.0.1/3000/");

 });



    res.writeHeader(200 , {
        "content-Type": "plain/text",
        "content-header" : "hello ece"
    });


 

