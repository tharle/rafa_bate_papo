const { GoogleSpreadsheet } = require('google-spreadsheet');


exports.handler = async function (event, context) {
/**

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
	  	
	  	// Close the connection when done
		connection.end(); 
	});
	**/

	if (event.httpMethod !== 'POST') {
		return {
			statusCode: 405,
			body: JSON.stringify({ message: 'Method Not Allowed' }),
		};
	}

	try {
		const data = JSON.parse(event.body);
		const doc = new GoogleSpreadsheet("114617039171258325972");

		await doc.useServiceAccountAuth({
			client_email: "cucetinha@master-reactor-487005-j4.iam.gserviceaccount.com",
			private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCz70L7MbJnBkUq\nYqMbtcA5lQdMovUDLHAjfqWyYnPmD88+zhutD+Xi0hgb4gjYkem3SjzBc1QuNCoL\nt8Q4Le1z0ddY4D02OzBGEDdgQvUxVX5JrUl+CfR/ZrPkrm+GkMly5oyOHN+Pf+s7\nddGYYvrlUjZxr2zjRZwts5+g2ly1IyxwOSniaQXo0RxnzEOQ08YewMtBZqeCAI++\nl+irLQAP0+X/laCo3sYks85XuDljuafdCGKwN0Pn+U/L7WO6AGeNBtv4LpW0gMEC\nbWK5WkpfsYT+Ny73TBWXTgoCs6djEtHkUPHxIJUTk/sUH9IZrEwjA4NsFbBRlmPh\nanciNO4jAgMBAAECggEABSeeFh8q2ru5wIiZ3qHa02t7DY1/kmsz/ThUG+OpKVab\nm9OAxHj3n4NgUHAty7KGbQtR6ULaDwbMi5BkrS1Xp6FD15Z4+nRAokk1pOrWJmcq\nGoc920ACwqGZFryOkl7UfpevQCUAnJZQEWCDNCflwysTRzd82Zf1bPO/53ZKAKBo\ngscoKAm121QDJl6KE+GgG8ZE/ufCb7TF4KK9c29AOxreFf44uFEsSfmNHcUqDVh5\nb78ZDYBb4Dt8z8LJAQTIkrClPkJ6i9EoNFtAIHI1alGy0cNhg8FgVf4Eok5oBurS\nCtC7izP2inixvqwDIrIBBXiCV0s7Q6nBbv5313XHeQKBgQDlkNOJF8YZcyGGfzl7\nxqlH/6cFhBv0m9s+4IUzDWrogR/akIhFTNFDAQeq8dJattrbH4nr90Ol6GGuZFdQ\nzq3ZcSk9tlablb0ZS85MzKfBCAOIcDRR3rELm+r53sLiTRVN0qOpQnkenCzqPiyk\nMy+VUZycg6ex0hemVv7kjPhxSQKBgQDIp2bdPKT7uc+zCSK06nQftjHeqvxi7vrm\nL1KUDMn6VGZMWyvNaZDw0GInt6usBPMlVq4lYA/+ujU/Mpm4IsdCb/b9GkV+aLUQ\nBTv12u0M2Yn4iZ7hTe8WVveIW7PpYSQKbMpYk3N6xTotNxC5xMoQZ4VVhBCnUMq+\nQbCoNFeQCwKBgQC79JndkwN07tiyIBRWjU8oTd7YG1QwMDOQBY/JPuEbQC1ubAvG\ngaCL9ZnrklaiQzhpVCc+dZKDkgH4INuEo9OfRpF3n4TFmhHbVj+wjZeD6iXKXePY\nbDYUxTHcJ1D0rBwXPbEV8gDs2P3FQ+aVAfuhi9JoKzrv0o3eeTf0tJ7tUQKBgHCO\nj0JNkZLvoZYh6sknt6pOTt1Edz2cJzxWkXEhV2/IRnZQslqQ/FBJ5LW472EYibiJ\nTjkDERXoKJRh8x76y2H2YsuKIC+P1vm8pez9OPp7UU0NDgX+7L5QXJyuLFcfOdNr\nQXq8hAv7dO4GNKiwvlTDbWUSJzFkPcbKHKnOaswPAoGBAMw39MpGSmz3tg92zEDY\ncxszz3bZiDE8/jmcuBpk4EP/MlzQdDHWFu8MXPPJEzeQNIcfUQgKkXec0XOYHuMt\nQvv7yg4JXa7Uyya4ajQFShCSBYCc5lpdr1J0d267y72xOfhVCuXra7RAir5QafOY\nuNgeCYRU5y2M33M1XKEFSM84\n-----END PRIVATE KEY-----\n".replace(/\\n/gm, '\n'),
		});

		await doc.loadInfo(); // loads document properties and worksheets
		//const sheet = doc.sheetsByIndex[0]; // access the first sheet
		var name = 'cucetinha'; 
		var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);

		// Add a new row with the data received
		//await sheet.addRow(data);
		var values = sheet.getRange("A:A").getValues(); 

		return {
			statusCode: 200,
			body: "CONSEGUI FAZER FUNCIONAR PORRA!! : " + values,
		};
	} catch (e) {
		console.error(e);
		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Failed to add row', error: e.message }),
		};
	}


    return {
      statusCode: 200,
      body: "Essa é uma mensagem de teste, testando pra ver se vai funcionar o baguho <br /> "+results,
    };
  };