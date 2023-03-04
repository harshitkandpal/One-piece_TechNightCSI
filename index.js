// var fs = require('fs');

// var htmlContent = '<html>Whatever</html>';
// function writeFile(){fs.writeFile('/my-page.html', htmlContent, (error) => { /* handle error */ });}
// fs.writeFile('/my-page.html', htmlContent, (error) => { /* handle error */ });

// function makeDocument() {
//     let frame = document.getElementById("theFrame");
  
//     let doc = document.implementation.createHTMLDocument("New Document");
//     let p = doc.createElement("p");
//     p.textContent = "This is a new paragraph.";
  
//     try {
//       doc.body.appendChild(p);
//     } catch (e) {
//       console.log(e);
//     }
  
//     // Copy the new HTML document into the frame
  
//     let destDocument = frame.contentDocument;
//     let srcNode = doc.documentElement;
//     let newNode = destDocument.importNode(srcNode, true);
  
//     destDocument.replaceChild(newNode, destDocument.documentElement);
//   }


import { fstat } from 'fs';
const fs = require('fs');

function createHTMLFile() {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>My HTML File</title>
      </head>
      <body>
        <h1>Hello, World!</h1>
      </body>
    </html>
  `;
  
  fs.writeFile('my-file.html', htmlContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File created!');
  });
}

createHTMLFile();