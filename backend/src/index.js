const express = require('express');
const connection = require('./connection');

const app = express();

app.use(express.json());

app.get('/welcome',(req,res)=>{


});


//retorna el listado de todos los usuarios
app.get('/users', (req,res)=>{
    const sql = 'SELECT * FROM practica1.users';
    
    connection.query(sql,(error,result)=>{
        if(error){
            res.json(error)
        }else{
            res.json(result);
        }
    });


});

app.get('/register',(req,res)=>{

});

app.post('/register',(req,res)=>{
  console.log(req.body);  
    const sql = 'INSERT INTO practica1.users(id,Name,Password) VALUES (?,?,?)';
    
    connection.query(sql,[req.body.id,req.body.Name,req.body.Password],(error,result)=>{
        if(error){
            res.json(error)
        }else{
            res.json(result);
        }
    });

});

app.listen(8000);

