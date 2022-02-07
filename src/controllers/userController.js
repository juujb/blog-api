const userService = require('../services/userService');

const create = async (req, res) => {
    const { body } = req;
    const { message, code, token } = await userService.create(body);
    
    if (message) return res.status(code).json({ message });

    res.status(code).json({ token });
};

module.exports = { create }; 