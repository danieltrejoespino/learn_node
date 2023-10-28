const express=require('express');

const routerStart= express.Router()
routerStart.use(express.json())
// /api/try_parameters




routerStart.get('/:data/:test', (req,res)=>{
  const data=req.params.data;
  const test=req.params.test;
  const action=req.query.action;
  console.log(action);
  res.send(`The parameters are data:${data} | test:${test}`)

})

routerStart.get('/test/:data/:test', (req,res)=>{
  const data=req.params.data;
  const test=req.params.test;
  const action=req.query.action;
  console.log(action);
  res.send(`The parameters are data:${data} | test:${test}`)

})

routerStart.post('/update',(req,res)=>{
  const data=req.body;
  console.log(data);  
  res.send(JSON.stringify(data));
})

module.exports =routerStart;