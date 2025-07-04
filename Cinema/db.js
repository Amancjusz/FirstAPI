const mysql = require("mysql2/promise");

const dbConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'cinema',
    waitForConnection: true,
    connectionLimit: 10,
    queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

pool.getConnection()
        .then(connetion => {
            console.log("Conexão estabelecida com sucesso!");
            connetion.release();
        })
        .catch(error =>{
            console.error("Erro ao conectar com o Banco de Dados, erro: ", error.message);
            process.exit(1);
        })

module.exports = pool;
