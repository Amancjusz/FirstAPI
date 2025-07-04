const express = require('express');
const app = express();
const port = 3000;


const db = require('./db');


app.use(express.json());

let filmes = [];
let salas = [];
let sessoes = [];
let clientes = [];
let ingressos = [];


// Rota de boas-vindas
app.get("/", (req, res) => {
  res.send("Bem-vindo ao CineLux!");
});


// FILMES
app.get("/filmes", async(req, res) => {
    db.query("SELECT * FROM filmes", (erro, resultados) => {
    if (erro) return res.status(500).json({ erro });
    res.json(resultados);
  });
});


app.post("/filmes", async(req, res) => {
  const { titulo, genero, ingressosDisponiveis } = req.body;
  const sql = "INSERT INTO filmes (titulo, genero, ingressosDisponiveis) VALUES (?, ?, ?)";
  db.query(sql, [filme.titulo, filme.genero, filme.ingressosDisponiveis], (erro, resultado) => {
    if (erro) return res.status(500).json({ erro });
    res.json({ mensagem: "Filme cadastrado com sucesso!", id: resultado.insertId });
  });
});


app.delete("/filmes/:id", async(req, res) => {
  const id = req.params.id;
  try {
      const[rows] = await db.query("Delete From filmes Where id =?", [id]);
      if(rows.affectRows > 0){
          res.status(204).send("filmes deletado com sucesso!");
      }
      res.status(204).send("filmes não encontrado para deletar!");
  } catch(error){
      console.log("Erro ao deletar: " + error.message);
      res.status(500).send("Erro ao deletar filmes");
  }
})


// SALAS
app.get("/salas", async(req, res) => {
    db.query("SELECT * FROM salas", (erro, resultados) => {
    if (erro) return res.status(500).json({ erro });
    res.json(resultados);
  });
});


app.post("/salas", async(req, res) => {
  const { nome, capacidade } = req.body;
  db.query("INSERT INTO salas (nome, capacidade) VALUES (?, ?)", [salas.nome, salas.capacidade], (erro, resultado) => {
    if (erro) return res.status(500).json({ erro });
    res.json({ mensagem: "Sala cadastrada com sucesso!", id: resultado.insertId });
  });
});


app.delete("/salas/:id", async(req, res) => {
  const id = req.params.id;
  try {
      const[rows] = await db.query("Delete From salas Where id =?", [id]);
      if(rows.affectRows > 0){
          res.status(204).send("salas deletado com sucesso!");
      }
      res.status(204).send("salas não encontrado para deletar!");
  } catch(error){
      console.log("Erro ao deletar: " + error.message);
      res.status(500).send("Erro ao deletar salas");
  }
})


// SESSÕES
app.get("/sessoes", async(req, res) => {
    db.query("SELECT * FROM sessoes", (erro, resultados) => {
    if (erro) return res.status(500).json({ erro });
    res.json(resultados);
  });
});


app.post("/sessoes", async(req, res) => {
  const { filme, sala, horario } = req.body;
  db.query(
    "INSERT INTO sessoes (filme_id, sala_id, horario) VALUES (?, ?, ?)",
    [sessoes.filme, sessoes.sala, sessoes.horario],
    (erro, resultado) => {
      if (erro) return res.status(500).json({ erro });
      res.json({ mensagem: "Sessão cadastrada com sucesso!", id: resultado.insertId });
    }
  );
});


app.delete("/sessoes/:id", async(req, res) => {
  const id = req.params.id;
  try {
      const[rows] = await db.query("Delete From sessoes Where id =?", [id]);
      if(rows.affectRows > 0){
          res.status(204).send("sessoes deletado com sucesso!");
      }
      res.status(204).send("sessoes não encontrado para deletar!");
  } catch(error){
      console.log("Erro ao deletar: " + error.message);
      res.status(500).send("Erro ao deletar sessoes");
  }
})


// CLIENTES
app.get("/clientes", async(req, res) => {
    db.query("SELECT * FROM clientes", (erro, resultados) => {
    if (erro) return res.status(500).json({ erro });
    res.json(resultados);
  });
});


app.post("/clientes", async(req, res) => {
  const { nome, email, telefone } = req.body;
  db.query(
    "INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)",
    [clientes.nome, clientes.email, clientes.telefone],
    (erro, resultado) => {
      if (erro) return res.status(500).json({ erro });
      res.json({ mensagem: 'Cliente cadastrado com sucesso!', id: resultado.insertId });
    }
  );
});


app.delete("/clientes/:id", async(req, res) => {
  const id = req.params.id;
  try {
      const[rows] = await db.query("Delete From clientes Where id =?", [id]);
      if(rows.affectRows > 0){
          res.status(204).send("clientes deletado com sucesso!");
      }
      res.status(204).send("clientes não encontrado para deletar!");
  } catch(error){
      console.log("Erro ao deletar: " + error.message);
      res.status(500).send("Erro ao deletar clientes");
  }
})


// INGRESSOS
app.get("/ingressos", async(req, res) => {
    db.query('SELECT * FROM ingressos', (erro, resultados) => {
    if (erro) return res.status(500).json({ erro });
    res.json(resultados);
  });
});


app.post("/ingressos", async(req, res) => {
  const { sessao, cliente, assento, preco } = req.body;
  db.query(
    "INSERT INTO ingressos (sessao_id, cliente_id, assento, preco) VALUES (?, ?, ?, ?)",
    [ingressos.sessao, ingressos.cliente, ingressos.assento, ingressos.preco],
    (erro, resultado) => {
      if (erro) return res.status(500).json({ erro });
      res.json({ mensagem: "Ingresso comprado com sucesso!", id: resultado.insertId });
    }
  );
});


app.delete("/ingressos/:id", async(req, res) => {
  const id = req.params.id;
  try {
      const[rows] = await db.query("Delete From ingressos Where id =?", [id]);
      if(rows.affectRows > 0){
          res.status(204).send("Ingressos deletado com sucesso!");
      }
      res.status(204).send("Ingressos não encontrado para deletar!");
  } catch(error){
      console.log("Erro ao deletar: " + error.message);
      res.status(500).send("Erro ao deletar ingressos");
  }
})


// INICIAR SERVIDOR
app.listen(port, () => {
  console.log("Servidor rodando em http://localhost:3001");
});
