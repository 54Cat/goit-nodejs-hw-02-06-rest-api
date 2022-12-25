const fs = require("fs")
const path = require("path")
const { User } = require("../../models")
const Jimp = require('jimp')

const avatarsDir = path.join(__dirname, "../../", "public", "avatars")

const updateAvatar = async (req, res) => {
    const { path: tempUpload, originalname } = req.file
    const { _id: id } = req.user
    const imageName = `${id}_${originalname}`
    
    try {
        const resultUpload = path.join(avatarsDir, imageName)
        await fs.rename(tempUpload, resultUpload, () => {});
        const avatarURL = path.join("public", "avatars", originalname)

        const image = await Jimp.read(resultUpload)
        await image.resize(250, 250)
        await image.writeAsync(`public/avatars/${imageName}`)

        await User.findByIdAndUpdate(req.user._id, { avatarURL })
        res.json({ avatarURL })
    } catch (error) {
        await fs.unlink(tempUpload, () => {})
        throw error
    }
}
  
module.exports = updateAvatar