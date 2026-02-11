require("dotenv").config();
const {neon} = require('@netlify/neon') 

exports.handler = async function (event, context) {
    const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL
    try {
        const query = await sql`SELECT descricao FROM tb_mini_bar ORDER BY RANDOM() LIMIT 1; `;
        return {
            statusCode: 200,
            
            body: query[0].descricao ,
        };
        
    } catch (e) {
        console.error(e);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Falhou', error: e.message }),
        };
    }
  };