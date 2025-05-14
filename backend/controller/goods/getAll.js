const GoodsModel = require("../../models/goods");

const getAll = async (req, res) => {
    const goods = await GoodsModel.find();

    res.status(200).json(goods);
};

module.exports = getAll;