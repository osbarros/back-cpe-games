const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      nome_jogo: Joi.string().required(),
    })
  }),

  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      jogo_id: Joi.string().required(),
    })
  }),

  updateById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      jogo_id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      nome_jogo: Joi.string().optional(),
    }).min(1),
  }),

  deleteById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      jogo_id: Joi.string().required(),
    }),
  }),
}
