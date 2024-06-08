const {Users} = require('../models')
require ('dotenv').config()

module.exports = class UsersController {
    static async showAll(req, res) {
        try {
           const users = await Users.findAll() 
            res.status(200).json({
                data: users
            })
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        } 
    }

    static async show (req,res){
        try {
            const user = await Users.findByPk(req.params.id)
            res.status(200).send(user)
        } catch (e) {
            res.status(500).json({
                error: e.message
            })  
        }
    }

    static async create (req,res){
        try {
          const user = await Users.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })   
        res.status(201).send("Usuário criado com Sucesso!!")
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
       
    }

    static async update (req,res){
        try {
            const user = await Users.findByPk(req.params.id)
            const result = await Users.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })   
        res.status(200).send("Usuário Atualizado com Sucesso!!")
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }

    static async delete (req,res){
        try {
            const user = await Users.findByPk(req.params.id)
            await Users.destroy()
            res.status(200).send("Excluido com sucesso!!")
        } catch (e) {
            res.status(500).json({
                error: e.message
            })  
        }
    }
}