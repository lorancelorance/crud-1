const express = require("express");
const cors = require("cors");
const app = express();
const routes = require('./routes/orderRoute');
const routesPersons = require('./routes/addPersonRoute');
const routesProduct = require('./routes/productItemsRouter');
const port = 3000;


require('./db');

var corsOptions = {
    origin: "http://localhost:4200"
};

app.use(cors(corsOptions))

app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.use('/api/order', routes);
app.use('/api/person', routesPersons);
app.use('/api/product', routesProduct);


app.listen(port, function () {
    console.log("app running", port)
});