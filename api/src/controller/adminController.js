const { adminModel } = require('../models/adminModel')

// admin yaratish
exports.createAdmin = async (req, res) => {
    try {
        const body = req.body        
        const admin = await adminModel.create({
            firstName: body.firstName,
            lastName: body.lastName,
            username: body.username,
            password: body.password
        })
    
        return res.status(200).send({
            admin,
            message: 'admin create successfull!'
        })
    } catch (error) {
        console.log(error);
        if (error.message) {
            return res.status(400).send({
                error: error.message
            })
        }
        return res.status(500).send('Internal server error!')
    }
}

// barcha adminlarni ko'rish
exports.getAllAdmin = async (req, res) => {
    try {
        const admins = await adminModel.find()

        if (!admins) {
            return res.status(400).send('admins not found')
        }

        return res.status(200).send({admins})
    } catch (error) {
        console.log(error);
        if (error.message) {
            return res.status(400).send({
                error: error.message
            })
        }
        return res.status(500).send('Internal server error!')
    }
}
