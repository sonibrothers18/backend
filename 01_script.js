//! Node JS
//! File system
const fs = require('node:fs');

//todo Write file
// fs.writeFile("hey.txt", "hey hello kaise ho", function(err){
//     if(err) console.log(err);
//     else console.log("Write Done");
// })

//todo Append file
// fs.appendFile("hey.txt", "\nme to aacha hu", function(err){
//     if(err) console.log(err);
//     else console.log("Append Done");
// })

//todo Rename file
// fs.rename("hey.txt", "hello.txt", function(err){
//     if(err) console.log(err.message);
//     else console.log("Rename Done");
// })

//todo Copy file
// fs.copyFile("hello.txt", "./copy/copy.txt", function(err){
//     if(err) console.log(err.message);
//     else console.log("Copy Done");
// })

//todo Unlink (Delete) file
// fs.unlink("hello.txt", function(err){
//     if(err) console.log(err.message);
//     else console.log("File Deleted");
// })

//todo rm (Delete) folder
// fs.rm("./copy", {recursive: true}, function(err){
//     if(err) console.log(err);
//     else console.log("Folder Deleted");
// })
//! =============================================================================================

//! HTTP
const http = require('http');

const server = http.createServer(function(req, res){
    res.end("Hello Wosdvsdrld")
})

server.listen(3000);