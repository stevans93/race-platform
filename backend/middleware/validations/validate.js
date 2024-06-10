const validate = (schema) => async (req, res, next) => {
    console.log(schema);
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return next();
    } catch (err) {
      return res.status(400).json({ type: err.name, message: err.message });
    }
  };
  module.exports = { validate };