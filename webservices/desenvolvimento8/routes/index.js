const express = require('express')
const jogos = require("./jogosRoutes.js")

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ título: "Atividade de desenvolvimento - 8" })
    })
    app.use(
        express.json(),
        jogos
    )
}
module.exports = routes
