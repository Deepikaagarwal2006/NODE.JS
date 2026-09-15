import http from "http";


const server = http.createServer((req, res) => {
    console.log("Hello World");
    console.log(req.url);
    //res.end("Hello from Server");
    if (req.url === "/") {
       // res.end(" Hello From home Page");
    } else if (req.url === "/about") {  
        // res.end("About Page");
    }

    if (req.url === "/contact") {
        res.end("Contact Page");
    }
     

});

server.listen(3000, "127.0.0.1", ()=>{
    console.log("Server is running on http://127.0.0.1/3000/");

 });







    




