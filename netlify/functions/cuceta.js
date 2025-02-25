exports.handler = async function (event, context) {
    const mensagens = ["Cu cu cu", "Quero me mamar", "Cuceta!"];

    //mensagens.length
    var i = Math.floor(Math.random() * mensagens.length);
    return {
      statusCode: 200,
      body: mensagens[i],
    };
  };