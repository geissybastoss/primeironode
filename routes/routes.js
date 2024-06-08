const express = require('express');
const router = express.Router();

// Importe os controladores necessários aqui
const PessoasController = require('../controllers/PessoasController');

// Defina as rotas aqui
router.get('/pessoas', PessoasController.showAll);
router.get('/pessoas/:id', PessoasController.show);
router.post('/pessoas', PessoasController.create);
router.put('/pessoas/:id', PessoasController.update);
router.delete('/pessoas/:id', PessoasController.delete);


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