const express = require ('express')
const router = express.Router()

const path = require ('path')


router.get ('/',(req, res)=> {
    res.send ("ola, Gabs")
})

router.get ('/pagina',(req, res)=> {
    res.sendFile (path.resolve('./public/pagina.html'))
})

router.use (function (req, res, next){ //tem que ser a ultima rota!!!
    // res.status(404).send("Erro 404")
    res.status(404).sendFile(path.resolve('./public/404.html'))
})


module.exports = router