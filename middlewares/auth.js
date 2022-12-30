const { User } = require("../models")
const jwt = require("jsonwebtoken")
const { HttpError } = require("../helpers")

const { SECRET_KEY } = process.env

const auth = async (req, res, next) => {
    const { authorization = "" } = req.headers
    const [bearer, token] = authorization.split(" ")

    if (bearer !== "Bearer" || !token) {
        next(HttpError(401))
    }

    try {
        const { id } = jwt.verify(token, SECRET_KEY)     
        const user = await User.findById(id)
        if (!user || !user.token) {
            next(HttpError(401, `Not authorized`))
        }
        req.user = user
        next()
    } catch (error) {
        if (error.message === "Invalid sugnature") {
            error.status = 401
        }
        next(error)
    }
}

module.exports = auth