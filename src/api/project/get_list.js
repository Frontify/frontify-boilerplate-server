function process(req, res, next) {
    res.send('project list from api: ' + req.params.name);
}

module.exports.process = process;