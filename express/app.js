const express=require('express');
const app= express();
const PORT=process.env.PORT || 3007;
const routerStart= require('./routers/test');
//Routers
app.use('/api/try_parameters', routerStart);

app.use((req, res, next) => {
  const clientIp = req.socket.remoteAddress; 
  console.log(`La IP del cliente que se conectó es: ${clientIp}`);
  next(); // Continúa con la solicitud
});


app.get('/api', (req,res)=>{
  res.statusCode=200
  console.log(`url: ${req.url} | Method: ${req.method} | Status:${res.statusCode}`);
  // res.send('My first server with express')
  res.json('My first server with express')
});



app.listen(PORT,()=>{
  console.log(`Listening on port ${PORT} ...`);
});

