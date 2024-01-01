const {StatusCodes} = require('http-status-codes')
const category = require('../models/category.model')

class CategoryController {
    getAll = (req, res)=>{
        category.find().then(docs => {
            return res.status(StatusCodes.OK).send(docs)
        }).catch(err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message: 'Internal Server Error'})
        })
    }
    add = (req, res) => {
        const body = req.body
        category.create(body).then(doc=> {
            return res.status(StatusCodes.CREATED).send(doc)
        }).catch(err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message: 'Internal Server Error'})
        })
    }
}

module.exports = CategoryController