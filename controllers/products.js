const AllProduct = require('../db/schema')

const allProducts = async (req, res) => {

    try {
        const { company, name, featured, sort, _id, select } = req.query;
        const queryObj = {};

        if (company) {
            queryObj.company = company
        } else if (name) {
            queryObj.name = { $regex: name, $options: 'i' }
        } else if (featured) {
            queryObj.featured = featured
        } else if (_id) {
            queryObj._id = _id;
        }

        let apiData = AllProduct.find(queryObj);
        if (sort) {
            let sortFix = sort.split(',').join(" ");
            apiData = apiData.sort(sortFix)
        }
        if (select) {
            let selectFix = select.split(',').join(" ");
            apiData = apiData.select(selectFix)
        }

        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 4;

        let skip = (page - 1) * limit;

        const allProducts = await apiData.skip(skip).limit(limit);
        res.status(200).json({ allProducts, limit: allProducts.length })

    } catch (error) {
        res.status(400).json({ message: error })
    }
}


module.exports = { allProducts }