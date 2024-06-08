const express = require('express');
const router = express.Router();

// Importe os controladores necessários aqui
const pessoasController = require('../controllers/PessoasController');

// Defina as rotas aqui
router.get('/pessoas', pessoasController.showAll);
router.get('/pessoas/:id', pessoasController.show);
router.post('/pessoas', pessoasController.create);
router.put('/pessoas/:id', pessoasController.update);
router.delete('/pessoas/:id', pessoasController.delete);


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