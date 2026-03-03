//Index.js - servidor basico de node Express - Modulo

const express = require('express');
const path = require('path');


const app = express();

const PORT = process.env.PORT || 3000;


//Middleware - para servir de arquivos estaticos da pasta 
// 'public' do diretorio


//definindo configuração da rota do servidor 
app.use(express.static(path.join(__dirname,'public')));

//Rota de exemplo
// ele vai ser direcionado pasta pasta publica
//app.use(express.static(path.join(__dirname, 'public')));


// Rota de exemplo
app.get('/api/hello', (req, res) => {
 res.json({ message: 'Olá do servidor Node.js!' });
});

app.listen(PORT, () => {
 console.log(`Servidor rodando em http://localhost:${PORT}`);
});
