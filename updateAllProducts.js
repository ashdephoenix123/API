require('dotenv').config();
require('./db/connect')

const allProductsJSON = require('./ProductsinJSON/AllProducts.json')
const AllProduct = require('./db/schema')

const updateDataInDb = async ()=> {
    try{
        await AllProduct.deleteMany()
        await AllProduct.create(allProductsJSON)
        console.log('done')
    } catch(err){
        console.log(err)
    }
}

updateDataInDb()