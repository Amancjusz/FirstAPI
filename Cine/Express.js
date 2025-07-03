const express = require('express');
const app = express();
const port = 3306;

const db = require('./db');

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bem-vindo ao Cinema!");
});

app.get('/filmes', (req, res) => {
    db.query('SELECT * FROM filmes', (erro, resultados) => {
      if (erro) return res.status(500).json({ erro });
      res.json(resultados);
    });
  });
  
  app.post('/filmes', (req, res) => {
    const { titulo, descricao, duracao, classificacao_etaria, genero } = req.body;
    const sql = 'INSERT INTO filmes (titulo, genero, ingressosDisponiveis) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [titulo, descricao, duracao, classificacao_etaria, genero], (erro, resultado) => {
      if (erro) return res.status(500).json({ erro });
      res.json({ mensagem: 'Filme cadastrado com sucesso!', id: resultado.insertId });
    });
  });

  app.get('/salas', (req, res) => {
    db.query('SELECT * FROM salas', (erro, resultados) => {
      if (erro) return res.status(500).json({ erro });
      res.json(resultados);
    });
  });
  
  app.post('/salas', (req, res) => {
    const { nome, capacidade } = req.body;
    db.query('INSERT INTO salas (nome, capacidade) VALUES (?, ?)', [nome, capacidade], (erro, resultado) => {
      if (erro) return res.status(500).json({ erro });
      res.json({ mensagem: 'Sala cadastrada com sucesso!', id: resultado.insertId });
    });
  });

  app.get('/sessoes', (req, res) => {
    db.query('SELECT * FROM sessoes', (erro, resultados) => {
      if (erro) return res.status(500).json({ erro });
      res.json(resultados);
    });
  });
  
  app.post('/sessoes', (req, res) => {
    const { filme_id, sala_id, horario } = req.body;
    db.query(
      'INSERT INTO sessoes (filme_id, sala_id, horario) VALUES (?, ?, ?)',
      [filme_id, sala_id, horario],
      (erro, resultado) => {
        if (erro) return res.status(500).json({ erro });
        res.json({ mensagem: 'Sessão cadastrada com sucesso!', id: resultado.insertId });
      }
    );
  });

  app.get('/clientes', (req, res) => {
    db.query('SELECT * FROM clientes', (erro, resultados) => {
      if (erro) return res.status(500).json({ erro });
      res.json(resultados);
    });
  });
  
  app.post('/clientes', (req, res) => {
    const { nome, email, telefone } = req.body;
    db.query(
      'INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)',
      [nome, email, telefone],
      (erro, resultado) => {
        if (erro) return res.status(500).json({ erro });
        res.json({ mensagem: 'Cliente cadastrado com sucesso!', id: resultado.insertId });
      }
    );
  });

  app.get('/ingressos', (req, res) => {
    db.query('SELECT * FROM ingressos', (erro, resultados) => {
      if (erro) return res.status(500).json({ erro });
      res.json(resultados);
    });
  });
  
  app.post('/ingressos', (req, res) => {
    const { sessao_id, cliente_id, assento, preco } = req.body;
    db.query(
      'INSERT INTO ingressos (sessao_id, cliente_id, assento, preco) VALUES (?, ?, ?, ?)',
      [sessao_id, cliente_id, assento, preco],
      (erro, resultado) => {
        if (erro) return res.status(500).json({ erro });
        res.json({ mensagem: 'Ingresso comprado com sucesso!', id: resultado.insertId });
      }
    );
  });

  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:3306`);
  });