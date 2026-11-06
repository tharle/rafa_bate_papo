require("dotenv").config();
const {neon} = require('@netlify/neon') 

exports.handler = async function (event, context) {
	const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL
	try {
		const query = await sql`SELECT cuce.id_cucetinha, cuce.mensagem, mods.nome, cuce.data  FROM tb_cucetinha cuce INNER JOIN tb_mods mods ON cuce.id_mods = mods.id_mods ORDER BY cuce.data; `;
		var message_result = "\n";

		message_result += "-------------------------------------------------------------------------------------\n";
        message_result += "         SÃO "+query.length+" MENSAGENS ANOTADOS DO SR CUCETINHA\n";
		message_result += "                colunas sao dividas por &&\n";
        message_result += "-------------------------------------------------------------------------------------\n";
		message_result += "MENSAGEM&&QUEM ANOTOU&&QUANDO\n";

		for (let i = 0; i < query.length; i++) {
			//const { result } = query[i];

			//if(!result || !result.mensagem || result.nome || result.data) continue;

			const mensagem = query[i].mensagem;
			const nome = query[i].nome;
			const dateObject = query[i].data;
		
			const formattedDate = dateObject.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
			message_result+= mensagem +  "&&" + nome  +  "&&" + formattedDate+"\n";

		}		

		return {
			statusCode: 200,
			
			body: message_result ,
		};
		
	} catch (e) {
		console.error(e);
		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Falhou', error: e.message }),
		};
	}
  };