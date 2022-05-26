const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      user_id: Joi.string().required(),
      jogo_id: Joi.string().required(),
    })
  }),

  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),
    [Segments.QUERY]: Joi.object().keys({
      user_id: Joi.string().optional(),
    })
  }),

  updateById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      relacao_id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      user_id: Joi.string().optional(),
      jogo_id: Joi.string().optional(),
    }).min(1),
  }),

  deleteById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      relacao_id: Joi.string().required(),
    }),
  }),
}