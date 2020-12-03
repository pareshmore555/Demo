const startServer = (app) => {
    app.listen(3000, () => console.log('server listening'));
}

module.exports = { startServer }
