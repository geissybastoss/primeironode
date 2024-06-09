const express = require('express');
const router = express.Router();

// Rotas do modelo Pessoas

const PessoasController = require('../controllers/PessoasController')
router.get('/pessoas', PessoasController.showAll);
router.get('/pessoas/:id', PessoasController.show);
router.post('/pessoas', PessoasController.create);
router.put('/pessoas/:id', PessoasController.update);
router.delete('/pessoas/:id', PessoasController.delete);


// Rotas do modelo Endereço

const EnderecoController = require('../controllers/EnderecoController');
router.get('/enderecos', EnderecoController.showAll);
router.get('/enderecos/:id', EnderecoController.show);
router.post('/enderecos', EnderecoController.create);
router.put('/enderecos/:id', EnderecoController.update);
router.delete('/enderecos/:id', EnderecoController.delete);


router.get ('/',(req, res)=> {
    res.send ("ola bom dia ")
})
router.get ('/pagina',(req, res)=> {
    res.sendFile(path.resolve('./public/pagina.html'))
})
router.use (function (req, res, next){    // tem que ser a ultima rota !!!!!
    //res.status(404).send ("Erro 404")
    res.status(404).sendFile(path.resolve('./public/404.html'))
})

module.exports = router