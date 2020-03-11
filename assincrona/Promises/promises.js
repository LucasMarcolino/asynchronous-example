const fs = require("fs");
const zlib = require("zlib");

function gzip(data) {
  return new Promise((resolve, reject) =>{
    zlib.gzip(data, (error, result) => {
      if(error) reject(error)
      resolve(result);
      });
  })
}

function readFile(filename, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

readFile("../files/texto2.txt", "utf-8").then(
  data =>{
    return gzip(data);
  }
).then(//chains
  data =>{
    console.log(data)
  })
  .catch(err => console.error("Erro ao zipar: ", err))