const { Schema, model, models } = require("mongoose");


const OrderSchema = new Schema({
    line_items: Object,
    name: String,
    email: String,
    phoneNumber: String,
    city: String,
    postalCode: String,
    streetAddress: String,
    landmark: String,
    country: String,
    paid: Boolean,
    
    
}, {
    timestamps: true,
});


export const Order = models?.Order || model('Order', OrderSchema);