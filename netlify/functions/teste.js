exports.handler = async function (event, context) {
//mensagens.length
	//var i = Math.floor(Math.random() * mensagens.length)

	const mysql = require('mysql2');

	//Port number: 3306
	// Create a connection to the database
	const connection = mysql.createConnection({
		host: 'sql3.freesqldatabase.com',         // Your MySQL server host
		user: 'sql3816679',     // Your MySQL username
		password: '8ZcBfHScNl', // Your MySQL password
		database: 'sql3816679'  // The name of your database
	});

	// Connect to the MySQL database
	connection.connect((err) => {
		if (err) {
			console.error('Erro ao conectar a base dados to MySQL:', err);
			return;
		}
		console.log('Conectado com a base de dados MySQL!');

		// You can execute queries here after a successful connection
		// For example:
		const sql = "SELECT * FROM tbl_cucetinha ORDER BY RAND( ) LIMIT 1";
		
		connection.query(sql, (error, results) => {
			if (error) throw error;
			console.log('Query results:', results);
		});


    return {
      statusCode: 200,
      body: "Essa é uma mensagem de teste, testando pra ver se vai funcionar o baguho <br /> "+results,
    };
  };