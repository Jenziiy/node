const http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

const fs = require('node:fs');
const content = 'this is some ccontent';
fs.writeFile('test.txt', content, err => {
  if (err){
    console.log(err);
  }
})

const fsPromise = require('node:fs/promises');

async function exampleFunction(){
  try {
    await fsPromise.writeFile('test2.txt', content)
  } catch (error) {
    console.log(error);
  }
}

exampleFunction();