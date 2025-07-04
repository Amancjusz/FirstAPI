CREATE DATABASE cinema;
use cinema;

CREATE TABLE filmes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100),
  genero VARCHAR(50),
  ingressosDisponiveis INT
);

CREATE TABLE salas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50),
  capacidade INT
);

CREATE TABLE sessoes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  filme VARCHAR(100),
  sala VARCHAR(50),
  horario DATE
);

CREATE TABLE clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100),
  telefone VARCHAR(8)
);

CREATE TABLE ingressos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  sessao VARCHAR(100),
  cliente VARCHAR(100),
  assento VARCHAR(10),
  preco INT NOT NULL
);

insert into filmes values
(1, 'Matrix', 'Ficção Científica', 50),
(2, 'O Rei Leão', 'Animação', 30),
(3, 'O Senhor dos Anéis: A Sociedade do Anel', 'Fantasia', 80),
(4, 'Interestelar', 'Ficção Científica', 60),
(5, 'Vingadores: Ultimato', 'Ação', 100),
(6, 'A Origem', 'Suspense', 70),
(7, 'Titanic', 'Romance', 40),
(8, 'Coringa', 'Drama', 65),
(9, 'Top Gun: Maverick', 'Ação', 75),
(10, 'Forrest Gump', 'Drama', 45),
(11, 'Jurassic Park', 'Aventura', 55),
(12, 'Duna', 'Ficção Científica', 90);
    
insert into salas(nome, capacidade) value
( "sala1", 100),
( "sala2", 100),
( "sala3", 100);

insert into sessoes value
(1, "Matrix", "sala1", 2025-01-01),
(2, "O Rei Leão", "sala2", 2025-02-02),
(3, "O Senhor dos Anéis: A Sociedade do Anel", "sala3", 2025-03-03),
(4, "Interestelar", "sala2", 2025-04-04),
(5, "Vingadores: Ultimato", "sala1", 2025-05-05),
(6, "A Origem", "sala2", 2025-06-06),
(7, "Titanic", "sala3", 2025-07-07),
(8," Coringa", "sala1", 2025-08-08),
(9, "Top Gun: Maverick", "sala2", 2025-09-09),
(10, "Forrest Gump", "sala3", 2025-10-10),
(11, "Jurassic Park", "sala1", 2025-11-11),
(12,"Duna", "sala2", 2025-12-12),
(13,  "O Poderoso Chefão", "sala3", 2025-12-13);

insert into clientes values
(1, 'Leandro', 'Santos@gmail.com', '40028922'),
(2, 'Amâncio', 'Amante@gmail.com', '40025622'),
(3, 'Davi', 'OAmado@gmail.com', '40023922'),
(4, 'Eluan', 'Knuckles@gmail.com', '40045622'),
(5, 'Enzo', 'Colve@gmail.com', '40079822');

insert into ingressos (sessao, cliente, assento, preco) values
( "sala1", "Leandro", 22, 12),
( "sala2", "Amâncio", 21, 12),
( "sala3", "Davi", 20, 12),
( "sala1", "Eluan", 19, 12),
( "sala2", "Enzo", 23, 12);

select * from filmes;

select * from salas;

select * from clientes;

select * from sessoes;

select *from ingressos;