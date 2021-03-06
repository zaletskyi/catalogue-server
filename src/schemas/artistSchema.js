const Joi = require('joi');
const mongoIdSchema = require( __dirname+'/mongoIdSchema.js');

const artistSchema = Joi.object().keys({
	_id: mongoIdSchema,
	name: Joi.string().min(3).required(),
	albums: Joi.array().items(mongoIdSchema)
});

module.exports = artistSchema;
