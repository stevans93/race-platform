const bcrypt = require('bcrypt');

const bcryptFunctions = {
  hashPassword: async (password) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      return hash;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  comparePassword: async (password, hashedPassword) => {
    try {
      let compare = await bcrypt.compare(password, hashedPassword);
      return compare;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};

module.exports = bcryptFunctions;