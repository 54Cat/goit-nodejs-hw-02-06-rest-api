const { User } = require("../../models")

const updateSubscription = async (req, res) => {
    const { subscription } = req.body
    const { _id } = req.user
    const user = await User.findByIdAndUpdate(_id, { subscription }, { new: true })

    res.json({
        subscription: user.subscription,
    })
}

module.exports = updateSubscription