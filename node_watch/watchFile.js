const fs = require("fs");
const watcher = fs.watchFile("intro.txt" , { interval: 500 }, (curr , prev) => {
    console.log("cureent:" , curr.birthtime.toISOString());
    console.log("previous:" , prev.birthtime.toISOString());
});
