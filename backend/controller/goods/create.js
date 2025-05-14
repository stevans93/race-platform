const GoodsModel = require("../../models/goods");

const create = async (req, res) => {
    const { name, description, quantity } = req.body;

    const newGoods = new GoodsModel({ name, description, quantity });

    await newGoods.save();

    res.status(201).json(newGoods);
};

module.exports = create;