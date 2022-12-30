const express = require('express')
const bodyParser = require("body-parser");
const routes = require("./rotas/rotas.js")
const app = express()
const port = 8000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
routes(app)
app.listen(port, () => {
    console.log(`Aplicação ativa na porta ${port}`)
})
