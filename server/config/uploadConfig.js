// const multer = require('multer')

// //file storage
// const storage = multer.diskStorage({
//     destination: function (req, res, cb) {
//         cb(null, 'public/assets')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)
//     }
// })
// const upload = multer({ storage })

// module.exports = upload

require('dotenv').config()

//multer config
const multer = require('multer')
const storage = multer.memoryStorage()
//export to routes
const upload = multer({ storage: storage })

//cloudinary config
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

//export to auctionController
const uploadImage = (image) => {

    const b64 = Buffer.from(image.buffer).toString("base64")
    let dataURI = "data:" + image.mimetype + ";base64," + b64

    cloudinary.uploader.upload(dataURI, {
        resource_type: "auto",
        folder: 'auctionPhoto'
    }).then(result => {
        console.log(result)
        return result.secure_url
    }).catch(err => {
        console.log(err)
    })

    //console.log(cldRes)

    //return cldRes.secure_url
}

module.exports = {
    upload,
    uploadImage
}