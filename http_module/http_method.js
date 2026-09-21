 //import http from 'http'; // ESM  HTTP:-HyperText Transfer Protocol
//const http = require("http");// commonjs


// const server = http.createServer((req, res) => {
//     console.log("Hello World");
    
    //  res.statusCode = 200;

    //  res.setHeader("Content-Type", "plain/text");

//      res.writeHeader(200 , {
//         "content-Type": "plain/text",
//         "content-header" : "hello ece"
//     });


//      res.end("Hello from Server");
// });



// const data = fs.readFileSync("config.json",);

//     if (req.url === "/") {
//        res.end(" Hello From home Page");
//     } else if (req.url === "/about") {  
//         res.end("About Page");
//     }

//     console.log('${data}');




// server.listen(3000, "127.0.0.1", ()=>{
//     console.log("Server is running on http://127.0.0.1/3000/");

//  });



//     res.writeHeader(200 , {
//         "content-Type": "plain/text",
//         "content-header" : "hello ece"
//     });


 
    
    


    import http from 'http'
    import fs from 'fs'


    // json file read


    const data = fs.readFileSync("config.json")
    const server = http.createServer((req, res) => {
       
        if (req.url === "/") {
       res.end(" Home Page");
    } else if (req.url === "/config") {  
        res.end("JSON.stringify(data");
    }
    else{
        res.end("page not exists")
    }

})

server.listen(3000, ()=>{
    
})
    


    // agar js ko json main change krna hai toh JSON.stringify likhte hain aur iska opposite krna hai toh parse ka use krte hain

 

