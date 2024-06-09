const { Pessoas } = require('../models');
require('dotenv').config();

module.exports = class PessoasController {
    static async showAll(req, res) {
        try {
            const pessoas = await Pessoas.findAll();
            res.status(200).json({
                data: pessoas
            });
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }

    static async show(req, res) {
        try {
            const pessoa = await Pessoas.findByPk(req.params.id);
            if (!pessoa) {
                return res.status(404).json({
                    error: 'Pessoa não encontrada'
                });
            }
            res.status(200).json(pessoa);
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }

    static async create(req, res) {
        try {
            const pessoa = await Pessoas.create({
                NomeCompleto: req.body.NomeCompleto,
                Endereço: req.body.Endereço,
                Telefone: req.body.Telefone
            });
            res.status(201).json({
                message: 'Pessoa criada com sucesso!',
//                data: pessoa
            });
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }

    static async update(req, res) {
        try {
            const pessoa = await Pessoas.findByPk(req.params.id);
            if (!pessoa) {
                return res.status(404).json({
                    error: 'Pessoa não encontrada'
                });
            }
            await pessoa.update({
                NomeCompleto: req.body.NomeCompleto,
                Endereço: req.body.Endereço,
                Telefone: req.body.Telefone
            });
            res.status(200).json({
                message: 'Pessoa atualizada com sucesso!',
                data: pessoa
            });
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }

    static async delete(req, res) {
        try {
            const pessoa = await Pessoas.findByPk(req.params.id);
            if (!pessoa) {
                return res.status(404).json({
                    error: 'Pessoa não encontrada'
                });
            }
            await pessoa.destroy();
            res.status(200).json({
                message: 'Pessoa excluída com sucesso!'
            });
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }
};
