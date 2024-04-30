const express = require("express");
const { isLoggedIn } = require("../middleware");
const User = require("../models/User");
const Product = require("../models/Product");
const router = express.Router();
const stripe = require("stripe")('sk_test_51OdSmGSJl8cdegQ67ujn07ezjBRaezwUSIYRHEDl7KesVhAucSgbgOsnAFjvfbNEZDTpGbsOs5ANxRSXCzIh7lXC00jkNSYvpS');

router.get("/user/cart", isLoggedIn, async (req, res) => {
  let userId = req.user._id;
  let user = await User.findById(userId).populate("cart");
  //   console.log(user, "sam");
  let totalAmount = user.cart.reduce((sum, curr) => sum + curr.price, 0);
  //   console.log(totalAmount);

  res.render("cart/cart", { user, totalAmount });
});

router.get('/checkout/:id',async function(req,res){
 let userId = req.params.id;
 let user = await User.findById(userId).populate('cart');
 let totalAmount = user.cart.reduce((sum,curr)=>sum+curr.price,0);
 let quantity = user.cart.length;
 const session = await stripe.checkout.sessions.create({
    line_items: [{
      price_data: {
        currency: 'inr',
        product_data: {
          name: 'T-shirt',
        },
        unit_amount: totalAmount*100,
      },
      quantity:1,
    }],
    mode: 'payment',
    // # These placeholder URLs will be replaced in a following step.
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  })

  res.redirect (session.url, 303);
})

router.post("/user/:productId/add", isLoggedIn, async (req, res) => {
  let { productId } = req.params;
  let userId = req.user._id;
  let user = await User.findById(userId);
  //   console.log(user, "sam");
  let product = await Product.findById(productId);
  user.cart.push(product);
  await user.save();
  res.redirect("/user/cart");
});

module.exports = router;