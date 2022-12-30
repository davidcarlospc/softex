const express = require('express')
const bodyParser = require("body-parser");
const routes = require("./routes/index.js")
const app = express()
const port = 8000

app.use(bodyParser.json());

routes(app)

app.listen(port, () => {
    console.log(`Aplicação iniciada na porta ${port}`)
})
