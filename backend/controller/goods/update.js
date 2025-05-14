const GoodsModel = require("../../models/goods");
const { BadRequest } = require("../../utils/errors");
const { goodsNotFound } = require("../../utils/messages");

const update = async (req, res) => {
    const { id } = req.params;
    const { name, description, quantity } = req.body;

    const updatedGoods = await GoodsModel.findByIdAndUpdate(id, { name, description, quantity }, { new: true });

    if(!updatedGoods) {
        throw new BadRequest(goodsNotFound);
    }

    res.status(200).json(updatedGoods);
};

module.exports = update;