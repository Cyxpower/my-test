const joi = require('@hapi/joi')


const title = joi.string().required()
const cate_id = joi.number().integer().required().min(1)
const content = joi.string().required()



exports.add_article_schema = {
    body: {
        title,
        cate_id,
        content
    }
}