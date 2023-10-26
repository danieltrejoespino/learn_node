const http= require('http');
const courses=require('./courses')
const PORT=3008;

const server=http.createServer((req,res)=>{
  const {method}=req;
  switch (method) {
    case 'GET':
      // console.log(`Method type ${method}`);
      console.log(`url: ${req.url} Method: ${req.method}`);
      return handle_request_get(req,res)              
    case 'POST':
      console.log(`url: ${req.url} Method: ${req.method}`);
      return handle_request_post(req,res)          
    default:
      console.log(`Method ${method} dont allow`);
      break;
  }
});

function handle_request_get(req,res) {
  const path=req.url;
  if (path==='/') {
    res.statusCode=200;
    res.end('Welcome :)')
  } else if(path==='/courses'){
    res.statusCode=200;
    res.end(JSON.stringify(courses.info_courses))
  } else if(path==='/courses/programming'){
    res.statusCode=200;
    res.end(JSON.stringify(courses.info_courses.programming))
  }
  else{
    res.statusCode=400;
    res.end('Error to find the route');
  }
}

function handle_request_post(req,res) {
  const path=req.url;
  if (path==='/add/courses/programming') {
    res.statusCode=200;
    res.end('add... new programming course')
  }
}


server.listen(PORT,()=>{
  console.log(`Listening in port ${PORT}`);
})