Create a NodeJS project and a simple server file ```app.js``` in your NodeJS project folder. 

Make sure to install these libraries in your NodeJS (backend) before you begin:
```Bash
npm install express body-parser cors
```

Using the express library we can tell the server to render the angular frontend that will be built to the ```public``` folder inside our NodeJS project.

```Javascript
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4000;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// === Frontend: ===
// =================

app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

// === Server: ===
// ===============

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

Create an Angular project and specify the build path ```"outputPath"``` in the ```angular.json``` file to our NodeJS backend folder:

```JSON
"build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "../backend/public",
            ...,
          }
          ...,
}       
```

We assume the backend and frontend folders are following this file structure:

![folder structure](assets/markdown/blogs/nodejs-angular-blog/folder_structure.jpg)

Build the Angular (frontend) project using the following command:
```Bash
ng build
```

Now run the Nodejs (backend) server (make sure you're in the backend folder):
```Bash
node app.js
```
