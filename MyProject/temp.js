const fs = require("fs");
const express = require("express");
var app = express();

app.get("/todo", (req, res)=>{
	fs.readFile("./To-Do.html",(err, data)=>{
		if(err){
			res.writeHead(400, {
				'Content-Type' : 'text/html'
			});
			return res.end();
		}
		res.writeHead(200, {
			'Content-Type' : 'text/html'
		});
		res.write(data);
	});
});

app.listen(8080);

app.get("/",(req, res)=>{
	res.send("home page");
});