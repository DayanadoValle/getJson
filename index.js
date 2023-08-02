const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  const data ={
    "filmesBarbie": [
        {
            "titulo": "Barbie",
            "ano": 2023,
            "genero": "Comédia/Drama",
            "urlPoster": "https://upload.wikimedia.org/wikipedia/pt/thumb/8/82/Barbie_%282023%29.jpg/200px-Barbie_%282023%29.jpg",
            "classificacao": "12 Anos"
          },
      {
        "titulo": "Barbie em A Princesa e a Plebeia",
        "ano": 2004,
        "genero": "Animação/Fantasia",
        "classificacao": "Livre"
      },
      {
        "titulo": "Barbie e as Três Mosqueteiras",
        "ano": 2009,
        "genero": "Animação/Fantasia",
        "classificacao": "Livre"
      },
      {
        "titulo": "Barbie em A Princesa da Ilha",
        "ano": 2007,
        "genero": "Animação/Fantasia",
        "classificacao": "Livre"
      },
      {
        "titulo": "Barbie Fairytopia",
        "ano": 2005,
        "genero": "Animação/Fantasia",
        "classificacao": "Livre"
      },
      {
        "titulo": "Barbie e o Castelo de Diamante",
        "ano": 2008,
        "genero": "Animação/Fantasia",
        "classificacao": "Livre"
      }, 
          {
            "titulo": "Barbie em A Princesa e a Popstar",
            "ano": 2012,
            "genero": "Animação/Musical",
            "classificacao": "Livre"
          },
          {
            "titulo": "Barbie e o Segredo das Fadas",
            "ano": 2011,
            "genero": "Animação/Fantasia",
            "classificacao": "Livre"
          },
          {
            "titulo": "Barbie Fairytopia: Mermaidia",
            "ano": 2006,
            "genero": "Animação/Fantasia",
            "classificacao": "Livre"
          },
          {
            "titulo": "Barbie Butterfly e a Princesa Fairy",
            "ano": 2013,
            "genero": "Animação/Fantasia",
            "classificacao": "Livre"
          },
          {
            "titulo": "Barbie em A Canção de Natal",
            "ano": 2008,
            "genero": "Animação/Musical",
            "classificacao": "Livre"
          },  {
            "titulo": "Barbie em A Princesa da Pérola",
            "ano": 2014,
            "genero": "Animação/Aventura",
            "classificacao": "Livre"
          },
          {
            "titulo": "Barbie e o Portal Secreto",
            "ano": 2014,
            "genero": "Animação/Fantasia",
            "classificacao": "Livre"
          },
          {
            "titulo": "Barbie e as Sapatilhas Mágicas",
            "ano": 2013,
            "genero": "Animação/Dança",
            "classificacao": "Livre"
          },
          {
            "titulo": "Barbie e o Lago dos Cisnes",
            "ano": 2003,
            "genero": "Animação/Fantasia",
            "classificacao": "Livre"
          },
          {
            "titulo": "Barbie: Escola de Princesas",
            "ano": 2011,
            "genero": "Animação/Fantasia",
            "classificacao": "Livre"
          },   {
            "titulo": "Barbie e as Aventuras na Casa dos Sonhos",
            "ano": 2012,
            "genero": "Animação",
            "classificacao": "Livre"
          },
          {
            "titulo": "Barbie e o Castelo de Diamante",
            "ano": 2013,
            "genero": "Animação/Fantasia",
            "classificacao": "Livre"
          },
          {
            "titulo": "Barbie Super Princesa",
            "ano": 2015,
            "genero": "Animação/Fantasia",
            "classificacao": "Livre"
          },
          {
            "titulo": "Barbie: Aventura nas Estrelas",
            "ano": 2016,
            "genero": "Animação/Ficção Científica",
            "classificacao": "Livre"
          },
          {
            "titulo": "Barbie e as Agentes Secretas",
            "ano": 2016,
            "genero": "Animação/Ação",
            "classificacao": "Livre"
          }
        ]
      }
      
  
  
  res.json(data);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
