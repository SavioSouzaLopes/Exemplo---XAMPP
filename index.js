const express = require('express')
const routers = require('./src/routes/pessoa')
const database = require('./src/config/database')

const app = express()
app.use(express.json())
app.use(routers)

database.db
    .sync({ force: false })
    .then((_) => {
        console.info("Banco conectado com Sucesso")
        app.listen(3000, () => {
            console.info("Servidor rodando na porta 3000")
        })
        
    })
    .catch(( e ) => {
        console.error('Conexão falou: ${e} ')
    })

