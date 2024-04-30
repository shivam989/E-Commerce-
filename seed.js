const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
    {
        name:"iphone 14pro",
        img:'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price: 140000,
        desc: "bohat mahenga"
    },
    {
        name:"macbook m2",
        img:'https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D',
        price: 250000,
        desc: "aukaat ke bahar"
    },
    {
        name:"iwatch",
        img:'https://images.unsplash.com/photo-1558126319-c9feecbf57ee?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 70000,
        desc: "useless product"
    },
    {
        name:"ipad",
        img:'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D',
        price: 88000,
        desc: "badiya cheez"
    },
    {
        name:"airpods",
        img:'https://images.unsplash.com/photo-1610438235354-a6ae5528385c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
        price: 27000,
        desc: "vahiyaad thuuu radddi"
    }
]

async function seedDB(){
    // await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data seeded successfully")
}

module.exports = seedDB;