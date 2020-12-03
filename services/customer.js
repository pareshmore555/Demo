const { customerModel } = require("../models/customerModel");

const saveCustomer = (data) => {
    return customerModel(data).save();
}

const getCustomers1 = async () => {
    const customers = await customerModel.find();
    console.log(customers);
    return customers;
}

module.exports = {
    saveCustomer,
    getCustomers1
}