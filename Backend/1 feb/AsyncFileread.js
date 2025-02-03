const fs = require("node:fs/promises");

const start=Date.now();
console.log("File started reading....");


async function read(){
console.log("Reading file");



try {
const data = await fs.readFile("./file2.txt",{encoding:"utf8"});
console.log(data);
} catch (err) {
console.error(err);
}
}
read();
const end=Date.now();
console.log("File read completed in "+(end-start)+"ms");