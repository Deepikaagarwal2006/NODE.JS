//import http from "http";  // ESM  HTTP:-HyperText Transfer Protocol
//const http = require("http");// commonjs

// create basic http server 

//const server = http.createServer ((req , res)=>{
    //console.log("Hello World");

//    const order = {
//         oderId : 10987,
//         des : "Aligarh",
//         source : "Ghaziabaad",
//         username : "Deepika Mittal"
    //}


//     res.statusCode = 200;
//     res.setHeader("Content-Type", "application/json"); // we can send three types of data sets text(plain) , JSON , HTML 
//     res.writeHead(200, {
//         "Content-Type" : "application/json",
//          "custom-header" : "Deepika Mittal"
//     });

//     res.end(JSON.stringify(order));
// });


// server.listen(8000, "127.0.0.1", ()=>{
//     console.log("Server is running....");

// });


// status code         meaning 
//200                  OK
//201                  Created
//400                  Bad Request
//401                  Unauthorized
//403                  Forbidden
//404                  Not Found
//500                  Internal Server Error

//EXTRA STATUS CODES
//202                  Accepted
//204                  No Content
//301                  Moved Permanently
//502                  Bad Gateway
//503                  Service Unavailable




import http from "http";  // ESM  HTTP:-HyperText Transfer Protocol
//const http = require("http");// commonjs

// create basic http server 

const server = http.createServer ((req , res)=>{
    console.log("Hello World");


    const order ={
        orderId : 10987,
        username : "Deepika Mittal",
        source : "Ghaziabad" ,
        destination: "Aligarh" ,                   
    }

    const data = fs.readFileSync("index.html");
    console.log(`${data}`);

    res.writeHead(200, {
        "Content-Type":"application/json",
        "custom-header":"Hello ECE"
    });
     // we can share three types of data sets text(plain) , JSON , HTML
     res.end(JSON.stringify(order));


    // res.statusCode = 200;
    // res.setHeader("Content-Type", "text/html"); // we can share three types of data sets text(plain) , JSON , HTML 
    // res.end("Welcome from Server");
});


server.listen(3000, "127.0.0.1", ()=>{
    console.log("Server is running....");

});




res.statusCode = 200;

res.setHeader("Content-Type", "application/json");
res.setHeader("custom-header", "Hello ECE");







