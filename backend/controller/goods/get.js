const GoodsModel = require("../../models/goods");
const { BadRequest } = require("../../utils/errors");
const { goodsNotExists } = require("../../utils/messages");

const get = async (req, res) => {
    const { id } = req.params;

    const goods = await GoodsModel.findById(id);

    if(!goods) {
        throw new BadRequest(goodsNotExists)
    }

    res.status(200).json(goods);
};

module.exports = get;