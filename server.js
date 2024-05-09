// Dependencies
const http = require('http');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, 'public');

// Data from database
const users = [
  { id: 1, fullName: 'John Doe', email: 'john@gmail.com' },
  { id: 2, fullName: 'Jane Doe', email: 'jane@gmail.com' },
  { id: 3, fullName: 'Sam Smith', email: 'sam@gmail.com' },
];

// Create a server
const server = http.createServer((req, res) => {
  //   res.setHeader('Content-type', 'text/html');
  //   res.writeHead(200, { 'Content-type': 'text/html' });
  //   res.end('<h1>Hello world</h1>');

  console.log(req.url);
  if (req.url === '/') {
    // res.writeHead(200, { 'Content-type': 'text/html' });
    // res.end('<h1>Home</h1>');
    fs.readFile(publicDir + '/index.html', 'utf8', (err, data) => {
      if (!err) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(data);
      } else {
        res.writeHead(500, { 'Content-type': 'text/html' });
        res.end('<h2>Server error</h2>');
      }
    });
  } else if (req.url === '/about') {
    fs.readFile(publicDir + '/about.html', 'utf8', (err, data) => {
      if (!err) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(data);
      } else {
        res.writeHead(500, { 'Content-type': 'text/html' });
        res.end('<h2>Server error</h2>');
      }
    });
  } else if (req.url === '/public/style.css') {
    fs.readFile(publicDir + '/style.css', 'utf8', (err, data) => {
      if (!err) {
        res.writeHead(200, { 'Content-type': 'text/css' });
        res.end(data);
      } else {
        res.writeHead(500, { 'Content-type': 'text/html' });
        res.end('<h2>Server error</h2>');
      }
    });
  } else {
    res.writeHead(404, { 'Content-type': 'text/html' });
    res.end('<h2>404 Page Not Found</h2>');
  }
});

server.listen(5000, () => console.log('Server is running on porst 5000'));
