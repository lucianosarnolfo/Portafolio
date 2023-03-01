const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    datebase: 'practica1',
});

connection.connect((error)=>{
    if (error){
        console.log('error al conectar a la base');
    }else{
        console.log('conectado a la base de datos');
        
    }
    });



module.exports = connection;