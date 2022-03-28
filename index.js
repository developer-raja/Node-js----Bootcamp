const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req,res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public' , 'demo.html'),(err, content) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(content);
        })

        } else if (req.url === '/about') {
            fs.readFile(path.join(__dirname, 'public' , 'about.html'),(err, content) => {
                if (err) throw err;
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.end(content);
            })
        } else if (req.url === '/api/users/') {
            const users = [
              {
                  category : 'mens clothing',
                  description : 'Your perfect fit pack for everyday',
                  image:'https://www.google.com',
                  price: 200,
                  title : "t shirt"
              }
            ];
            res.writeHead(200, {'Content-Type' : 'application/json'})
            res.end(JSON.stringify(users))
        }
    });
server.listen(5000, () => console.log('server running'));