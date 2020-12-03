const { saveCustomer, getCustomers1 } = require("../services/customer")

const createCustomer = async (req, res) => {
    try {
        await saveCustomer(req.body);
        res.send('customer created')
    } catch (error) {
        return error;
    }
}

const getCustomers = async (req, res) => {
    try {
        const customers = await getCustomers1();
        res.send({ msg: 'retriving customers', customers })
    } catch (error) {
        return error;
    }
}

module.exports = {
    createCustomer,
    getCustomers
}
