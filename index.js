const http =require("http");

const server =http.createServer((req,res)=>{
    //console.log(req.url);
    if(req.url="/"){
        res.end('Hello from the Home sides');
    }
   else if(req.res="/about")
   {
        res.end('Hello from the Aboutus side');
   }
   else if(req.res="/contact")
   {
        res.end('Hello from the Contact side');
   }
   else{
    res.end("404 error page")
   }
});

server.listen(3000,"127.0.0.1",()=>{
    console.log('listening to the port no. 3000');
});