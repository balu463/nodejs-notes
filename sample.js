var http=require("http");
http.createServer(function(request,response){

	response.writeHead(200,{"content-Type":"text/plain"});
	response.end("hello hai hyde");
}).listen(8090,function(){
	console.log("server litening 8090");
});

