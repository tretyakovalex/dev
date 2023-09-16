```Javascript
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const users = require('./routes/addUser');

const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/auth', users);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```