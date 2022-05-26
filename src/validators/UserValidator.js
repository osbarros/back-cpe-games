const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      nome: Joi.string().required(),
      nome_usuario: Joi.string().required(),
      pais: Joi.string().required(),
      descricao: Joi.string(),
    }),
  }),

  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),
    [Segments.QUERY]: Joi.object().keys({
      user_id: Joi.string().optional(),
    }),
  }),

  getByFirebaseId: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      firebase_id: Joi.string().required(),
    }),
    [Segments.QUERY]: Joi.object().keys({
      firebase_id: Joi.string().optional(),
    }),

  }),

  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().optional(),
      password: Joi.string().optional(),
      nome: Joi.string().optional(),
      nome_usuario: Joi.string().optional(),
      pais: Joi.string().optional(),
      descricao: Joi.string().optional(),
    }),    
  }),
  
  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),
  }),
};