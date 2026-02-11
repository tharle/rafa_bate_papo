require("dotenv").config();
const {neon} = require('@netlify/neon') 

exports.handler = async function (event, context) {
	const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL
	try {
		const query = await sql`SELECT cuce.id_cucetinha, cuce.mensagem, mods.nome, cuce.data  FROM tb_cucetinha cuce INNER JOIN tb_mods mods ON cuce.id_mods = mods.id_mods ORDER BY RANDOM() LIMIT 1; `;
		const { result } = query[0];

		//"tu nao é yag só pq nao chupa piroca pq meua migo • pepfefeusson • 24/11/2023 • "

		const mensagem = query[0].mensagem;
		const nome = query[0].nome;
		const dateObject = query[0].data;
		
		const formattedDate = dateObject.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });


		return {
			statusCode: 200,
			
			body: mensagem +  " • " + nome  +  " • " + formattedDate ,
		};
		
	} catch (e) {
		console.error(e);
		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Falhou', error: e.message }),
		};
	}
  };