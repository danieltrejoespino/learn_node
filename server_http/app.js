'use strict';
const http = require('http');
const port = 3009;
// req solicitud 
// res respuesta
const server_ = http.createServer((req,res)=>{    
    res.end('Hi, world');
});
server_.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})