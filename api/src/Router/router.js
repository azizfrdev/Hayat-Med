const adminRoouter = require('./adminRouter')

exports.appRouter = (app) => {
    app.use('/api', adminRoouter)
}

