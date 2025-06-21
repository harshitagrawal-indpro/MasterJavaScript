const http= require ('http');
 const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    const url = req.url;
    if (url==="/"){
        res.end("Home page");

    }else if(url==="/about"){
        res.end("This is created by Harshit AGrawal ");

    } else {
        res.end("Welcome to the server page");
    }

 }
);
server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
