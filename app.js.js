/*var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});

	const mensagens = ["Cu cu cu", "Quero me mamar", "Cuceta!"];

	//mensagens.length
	var i = Math.floor(Math.random() * mensagens.length);
	console.log(i)
	res.end(mensagens[i]);
}).listen(1337);*/

const express = require('express')
const app = express()
const port = 3000

app.get('/rafa', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});

	const mensagens = ["Cu cu cu", "Quero me mamar", "Cuceta!"];

	//mensagens.length
	var i = Math.floor(Math.random() * mensagens.length);
	console.log(i)
	res.end(mensagens[i]);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
