'use strict';
const http = require('http');

const server_ = http.createServer((req,res)=>{
    
    res.end('Hi, world');
});
