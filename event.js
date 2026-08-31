// import fs from "fs";
// setTimeout(()=> {
//     console.log("setTimeout");
// }, 1000);

// fs.readFile("intro.txt", "utf8" , (err, data) => {
//     console.log("File read completed");   
// });
// setInterval(()=>{
//     console.log("set
// Interval after 5ms");
// }, 500);


// setImmediate(()=>{
//     console.log("Set Immediate");
// });


fs.readFile("intro.txt", "utf8" , (err, data) => {
    console.log("File read completed"); 
    setTimeout(()=>{
        console.log("setTimeout");
    }, 0);
    setImmediate(()=>{
        console.log("Set Immediate");
    });
});
