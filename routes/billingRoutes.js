const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const stripe = require("stripe")(keys.stripeSecretKey);
const login = require('../middlewares/requireLogin');


module.exports = (app) => {
    app.post("/api/stripe",requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 5000,
            currency: "usd",
            source: req.body.id,
            description: "5$ for 5 credits"
        })
        req.user.credits += 5;  // add 5 credits to user
        const user = await req.user.save();

        res.send(user);
    })
}