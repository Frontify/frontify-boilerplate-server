function process(req, res, next) {
    res.send('hello from api: ' + req.params.name);
}

module.exports.process = process;