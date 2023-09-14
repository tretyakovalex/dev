Create a NodeJS project and a simple server file ```app.js``` inside your NodeJS project folder. 

Using the express library we can tell the server to render the angular frontend that will be built to the public folder inside our NodeJS project.

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

Create an Angular project and specify the build path ```"outputPath"``` in the angular.json file to our NodeJS backend folder:

```JSON
"build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "../backend/public",
            ...
          }
          ...,
}       
```