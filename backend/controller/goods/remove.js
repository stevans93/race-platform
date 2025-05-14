const GoodsModel = require("../../models/goods");

const remove = async (req, res) => {
    const { id } = req.params;

    const deleteGoods = await GoodsModel.findByIdAndDelete(id);

    res.status(200).json(deleteGoods);
};

module.exports = remove;