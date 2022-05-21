const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      nome_jogo: Joi.string().required(),
      
    })
  }),

  getById: celebrate({
    [Segments.BODY]: Joi.object().keys({

    })
  }),

  updateById: celebrate({
    [Segments.BODY]: Joi.object().keys({

    })
  }),

  deleteById: celebrate({
    [Segments.BODY]: Joi.object().keys({

    })
  }),
}
