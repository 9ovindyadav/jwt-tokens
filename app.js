const express = require("express");
require("express-async-errors");
require("dotenv").config();
const notFound = require("./Middlewares/not-found");
const errorHandlerMiddleware = require("./Middlewares/error-handler");
const app = express();

app.use(express.static("./Public"))
app.use(express.json())

//routes
const userRouter = require("./Routes/user")

app.use("/api/v1",userRouter)

app.use(notFound)
app.use(errorHandlerMiddleware) 

const port = process.env.PORT || 3000 ;

const start = () => {
    try {
        app.listen(port,console.log(`Server is listening on port: ${port}...`))
    } catch (error) {
        console.error(error);
    }
}

start();