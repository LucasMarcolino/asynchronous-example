const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

const files = ["../files/texto1.txt", "../files/texto2.txt"];

(async () =>{
  let promises = files.map(name => readFile(name, "utf8"));
  let values = await Promise.all(promises)
  console.log(values)
})();