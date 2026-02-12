require("dotenv").config();
const {neon} = require('@netlify/neon') 

exports.handler = async function (event, context) {
    const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL
    const id = event.queryStringParameters != undefined && event.queryStringParameters.id!= undefined ? event.queryStringParameters.id : false;
    try {

        if(id) {
            const result = await sql`SELECT * FROM tb_mini_bar WHERE id_mini_bar = ${id} LIMIT 1; `;
            var mensagem = '';

            if(result.length > 0){
                mensagem = '#'+result[0].id_mini_bar + ' - ' + result[0].descricao;
                mensagem += "\n----------------------------------------------------------------\n";
                mensagem += "\n                     INGREDIENTES\n";
                mensagem += "\n----------------------------------------------------------------\n";
                mensagem += result[0].ingredientes.replaceAll(', ', '\n');
                mensagem += "\n\nRef: "+result[0].referencia+" \n";
                mensagem += "\n----------------------------------------------------------------\n";
            } else {
                mensagem += "O indicie "+id+" não existe.";
            }

            return {
                statusCode: 200,
                body:  mensagem,
            };
            
        } 
        
        const result = await sql`SELECT id_mini_bar, descricao FROM tb_mini_bar ORDER BY RANDOM() LIMIT 1; `;
        return {
            statusCode: 200,
            
            body: '#'+result[0].id_mini_bar + ' - ' + result[0].descricao ,
        };
        
    } catch (e) {
        console.error(e);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Falhou', error: e.message }),
        };
    }
  };