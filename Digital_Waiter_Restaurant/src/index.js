/**
 * Reading Environment Variables
 */

const dotenv = require("dotenv");
dotenv.config();

/**
 * Importing the Main App
 */

const app = require("./app");

app.listen(app.get("port"));
console.log("The server is on the port: ", app.get("port"));
