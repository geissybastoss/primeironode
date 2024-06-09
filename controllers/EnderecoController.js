const { Endereco } = require('../models');
require('dotenv').config();

module.exports = class EnderecoController {
  static async showAll(req, res) {
    try {
      const endereco = await Endereco.findAll();
      res.status(200).json({
        data: endereco
      });
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }

  static async show(req, res) {
    try {
      const endereco = await Endereco.findByPk(req.params.id);
      if (!endereco) {
        res.status(404).json({
          error: 'Endereço não encontrado'
        });
      } else {
        res.status(200).json({
          data: endereco
        });
      }
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }

  static async create(req, res) {
    try {
      const endereco = await Endereco.create(req.body);
      res.status(201).json({
        message: 'Endereço criado com sucesso!',
//        data: endereco
      });
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }

  static async update(req, res) {
    try {
      const endereco = await Endereco.findByPk(req.params.id);
      if (!endereco) {
        res.status(404).json({
          error: 'Endereço não encontrado'
        });
      } else {
        await endereco.update(req.body);
        res.status(200).json({
          message: 'Endereço atualizado com sucesso!',
          data: endereco
        });
      }
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }

  static async delete(req, res) {
    try {
      const endereco = await Endereco.findByPk(req.params.id);
      if (!endereco) {
        res.status(404).json({
          error: 'Endereço não encontrado'
        });
      } else {
        await endereco.destroy();
        res.status(200).json({
          message: 'Endereço excluído com sucesso!'
        });
      }
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }
};
