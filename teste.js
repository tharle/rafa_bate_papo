var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});

	const mensagens = ["Cu cu cu", "Quero me mamar", "Cuceta!"];

	//mensagens.length
	var i = Math.floor(Math.random() * mensagens.length);
	console.log(i)
	res.end(mensagens[i]);
}).listen(1337, "localhost");
