const faker = require("faker");
// Rota para a página raiz
let appRouter = function (app){
  app.get("/", function(req,res){
        res.status(200).send("Bem-vindo ao Web Service")
    });
// Inserir um usuário
    app.post("/cadastrar", function(req, res) {
        const usuario = req.body.usuario;
        if (usuario.primeiroNome != undefined && usuario.primeiroNome != undefined && 
            usuario.username != undefined && usuario.email != undefined) {
                res.status(201).send({ message: 'Usuário inserido com sucesso!'})
        } else {
            res.status(400).send({ message: 'Falta informar algum/ns dado/s do usuário!' })
        }        
    });
//Trazer dados dos usuários  
  app.get("/usuarios", function(req,res){
        let dados_usuario = ({
            primeiroNome: faker.name.firstName(),
            ultimoNome: faker.name.lastName(),
            username: faker.internet.userName(),
            email: faker.internet.email()
        });
        res.status(200).send(dados_usuario)
    });
//Buscar dados de um usuário  
  app.get("/usuario/:num", function(req, res) {
        let usuarios = [];
        let num = req.params.num;
        if(isFinite(num) && num > 0){
            for(i = 0; i <= num-1; i++) {
                usuarios.push({
                    primeiroNome: faker.name.firstName(),
                    primeiroNome: faker.name.lastName(),
                    username: faker.internet.userName(),
                    email: faker.internet.email()
                });
            }
            res.status(200).send(usuarios);
        } else {
            res.status(400).send({ message: 'Número de usuários inválido'})
        }
    });
}
module.exports = appRouter
