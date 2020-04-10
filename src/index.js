const express = require("express");
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Metodos HTTP:
 * 
 * GET: buscar/listar uma informação do back end 
 * POST: criar uma informação no back end 
 * PUT: alterar uma informção no back end 
 * DELETE: deletar uma informaçaõ no back end 
 * 
 * 
 * */

/**
 * 
 * Tipos de parametros:
 * 
 * Query Params: parametros nomeaddos enviados na rota apos "?" (filtros,paginação)
 * Route Params: parametros usados para identificar recursos 
 * Request body :corpo da requisiçao, utilizado para criar ou alterar recurso 
 * 
 */

/**
 * 
 * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB,    
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 * 
 */


app.listen(3333);
