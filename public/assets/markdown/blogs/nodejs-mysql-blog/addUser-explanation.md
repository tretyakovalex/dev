The ```addUser.js``` file imports the ```mysql.js``` config on line 3 and writes and reads data to and from the MySQL database, respectively, using these two functions:

```Javascript
router.post('/addUser', ...)
```
```Javascript
router.get('/getUsers', ...)
```

The ```router.post``` uses the route '/addUser' and inside the try catch block, it takes data from the request body and stores it in const data. Then the pool.query function takes three parameters (SQL Query, data, and the result). In this case we use the ```INSERT INTO users SET ?'``` query to insert a user into the table users. If successful, then we will get a JSON response that the user was added to the table.

The ```router.get``` uses the route '/getUsers' and inside the try catch block it contains only the pool.query function that takes only two parameters (SQL Query, and the results). Since no data is being passed to the database (only read), the function only requires two parameters. If successful, the all users will be returned in JSON.

Finally, using ```module.exports``` we export the ```router.post``` and ```router.get``` functions to be used in other files.

