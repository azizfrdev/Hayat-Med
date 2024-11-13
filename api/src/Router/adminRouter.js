const { createAdmin, getAllAdmin } = require('../controller/adminController')

const router = require('express').Router()

router
.post('/admin-create', createAdmin)
.get('/admins', getAllAdmin)


module.exports = router