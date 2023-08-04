const mysql = require('mysql2');

const connection = mysql.createConnection({
    user:"root",
    host:"127.0.0.1",
    password:"1234",
    database:"jayaram"
   
});

connection.connect((error)=>{
    if(error)   throw error;
    console.log("Connected");
})

module.exports = connection; 