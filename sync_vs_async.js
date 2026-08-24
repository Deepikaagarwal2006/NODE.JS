console.log("====== Synchronous start =======");
for (let i = 0; i < 10; i++) {
    console.log('${i}');
}
console.log("====== Synchronous end =======");

console.log("====== Asynchronous start =======");
setTimeout(() => {
    console.log("Hello world");
}, 1000);

console.log("====== Asynchronous end =======");
