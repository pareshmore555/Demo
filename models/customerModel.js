const { model, Schema } = require('mongoose');

const customer = new Schema({
    name: { type: String },
    email: { type: String, unique: true },
    password: String,
    gender: { type: String, enum: ["MALE", 'FEMALE'], default: 'MALE' }
})

const customerModel = model('customers', customer);

module.exports = { customerModel };