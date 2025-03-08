const express = require('express');
const app = express();
const port = 4000;
// mongoDb connection
const db = require('./config/mongodbConfig');
db();


app.use(express.json());

//Router
const categoryRoute = require('./router/categoryRoute');
const serviceRoute = require('./router/serviceRoute');
const loginRoute = require('./router/login');
app.use(loginRoute);
app.use(categoryRoute);
app.use(serviceRoute);



//start server
app.listen(port, () => {
    console.log(`sereer is started on ${port}`);
})