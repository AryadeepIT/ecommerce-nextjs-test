import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";

const stripe = require('stripe')(process.env.STRIPE_SK);

export default async function handler(req, res){
    if(req.method !== 'POST'){
        res.json('should be a post request');
        return;
    }
    const {
        name, 
        email, 
        phoneNumber, 
        city, 
        postalCode, 
        streetAddress, 
        landmark, 
        country,
        bagProducts, } = req.body;

    await mongooseConnect();

    const productIds = bagProducts;
    const uniqueIds = [...new Set(productIds)];
    const productsInfos = await Product.find({_id: uniqueIds});

    let line_items = [];
    for (const productId of uniqueIds) {
        const productInfo = productsInfos.find(p => p._id.toString() === productId);
        const quantity = productIds.filter(id => id === productId)?.length || 0;

        if (quantity > 0 && productInfo) {

            line_items.push({
                quantity,
                price_data: {
                    currency: 'INR',
                    product_data: {name: productInfo.title},
                    unit_amount: quantity * productInfo.price * 100,
                },

            });

        }
        
    }

    const orderDoc = await Order.create({
        line_items,
        name,
        email,
        phoneNumber,
        city,
        postalCode,
        streetAddress,
        landmark,
        country,
        paid: false,

    });

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        customer_email: email,
        success_url: process.env.PUBLIC_URL+ '/checkout?success=1',
        cancel_url: process.env.PUBLIC_URL+ '/checkout?canceled=1',
        metadata: {orderId: orderDoc._id.toString(), test:'ok'
},
    });

    res.json({
        url: session.url,
    })
}
