
//read all file names in directory

const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, '');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('error');
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
});


//if you find a path inside a directory you go recursively
const result = require('fs');
 const FileSystem = function (currentPath) {
    console.log(currentPath);
    const files = result.readdirSync(currentPath);
    for (const i in files) {
       const currentFile = currentPath + '/' + files[i];
       const stats = result.statSync(currentFile);
       if (stats.isFile()) {
       console.log(currentFile);
       }
      else if (stats.isDirectory()) {
             FileSystem(currentFile);
           }
     }
   };
   // Invokes the parent directory
  FileSystem('..');



// read the content of the file

var read = require('fs');
read.readFile('file-test.js', function (err, data) {
  if (err)
    throw err;
  if (data)
    console.log(data.toString('utf8'));
});

