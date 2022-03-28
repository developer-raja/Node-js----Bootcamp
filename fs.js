
const fs = require('fs');
const path = require('path');

// path
// fs
// os
// url
// http

// Create folder
// fs.mkdir(path.join(__dirname, '/test'),{}, err => {
//     if (err) throw err;
//     console.log('Folder created');
// });

// Create folder and write to file
// fs.writeFile(path.join(__dirname, '/test', 'demo.txt'),'This is fs test', err => {
//     if (err) throw err;
//     console.log('File written to test...');
// })

// File append
// fs.appendFile(path.join(__dirname,'/test','demo.txt'),'I love node js', err => {
//     if (err) throw err;
//     console.log('File written to....');
// })

//  Read file
// fs.readFile(path.join(__dirname, '/test','demo.txt'),'utf8',(err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// File rename
fs.rename(path.join(__dirname,'/test','demo.txt'),
path.join(__dirname,'/test','helloworld.txt'),err => {
    if (err) throw err;
    console.log('File renamed');
})

// Array of object
const users = [
    {"name" : "tony"},
    {"name" : "steve"},
    {"name" : "strange"}
]