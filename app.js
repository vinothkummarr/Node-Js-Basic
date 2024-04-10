const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) =>{
  console.log('Hi')
  let path = './pages/';
  switch (req.url) {
    case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
    case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;
    case '/contact':
        path += 'contact.html';
        res.statusCode = 200;
        break;
    default:
      path += '404.html';
      res.statusCode = 404;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
        console.log(err);
        res.end();
    } else {
        res.write(data);
        res.end()
    }
})
})

server.listen(8080, 'localhost',()=>{
  console.log('listening on 8080')
})