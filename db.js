const mysql = require("mysql/promise");

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'clientes_db',
    waitForConnection: true,
    connetionLimit: 10,
    queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

pool.getConnection()
        .then(connection => {
            console.log("Conexão estabelecida com sucesso!");
            connection.release();
        })
        .catch(error => {
            console.error("Erro ao conectar com o Banco de Dados, erro: ", error.message);
            process.exit(1);
        });

module.exports = pool;
