const app = require('./app');


const cloudinary = require('cloudinary')
const connectDatabase = require('./config/database')

// handling uncaught exception
process.on("uncaughtException",()=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaughtException`);
    process.exit(1);
})


// config
if(process.env.NODE_ENV !== "PRODUCTION"){

   require("dotenv").config({path:"backend/config/config.env"});
}


// connecting to database
connectDatabase();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET

});

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
})

// if db string is wrong typed i.e known as unhandled Promise Rejection - we will t=close our server
process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled promise rejection`);

    server.close(()=>{
        process.exit(1);
    })
})