const jwt = require('jsonwebtoken')
require('dotenv').config()
JWT_KEY = process.env.JWT_KEY

const createToken = (req, userId) => {
    const token = jwt.sign({ userId }, JWT_KEY, {
        algorithm: "HS256",
        expiresIn: 3600000
    })
    if (token) {
        req.session.token = token
    }
}

const verifyToken = (req, res, next) => {
    let token = req.session.token

    if (!token) {
        return res.status(403).send({ message: 'token not found' })
    }

    jwt.verify(token, JWT_KEY, (err) => {
        if (err) {
            return res.status(401).send({ message: 'unauthorized' })
        }
        next()
    })
}

const clearToken = (req) => {
    req.session = null
}

module.exports = {
    createToken,
    verifyToken,
    clearToken
}