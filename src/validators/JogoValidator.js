const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      jogo_id: Joi.string().empty(""),
      nome_jogo: Joi.string().required(),
      imagem_jogo: Joi.any()
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
      imagem_jogo: Joi.any()
    }).min(1),
  }),

  deleteById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      jogo_id: Joi.string().required(),
    }),
  }),
}
