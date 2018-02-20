module.exports = function (router, Blog) {
    router.post('/blogs', function (req, res) {
        console.log('post');

        Blog.create(JSON.parse(JSON.stringify(req.body)), function (err, data) {
            res.json(data);
        });
    });
    router.get('/blogs', function (req, res) {
        console.log('get');

        Blog.find({}, function (err, data) {
            res.json(data ? data : {statusCode: "404"});
        });
    });
    router.get('/blogs/:blogId', function (req, res) {
        console.log('getId');

        Blog.find({_id: req.params.blogId}, function (err, data) {
            res.json(data);
        });
    });
    router.put('/blogs/:blogId', function (req, res) {
        console.log('put');

        Blog.findByIdAndUpdate(req.params.blogId, JSON.parse(JSON.stringify(req.body)), function (err, data) {
            res.json(data ? data : {status: "object not found"});
        });
    });
    router.delete('/blogs/:blogId', function (req, res) {
        console.log('delete');

        Blog.findByIdAndRemove(req.params.blogId, function (err, data) {
            res.json({
                data: data,
                status: "ok"
            });
        });
    });

    router.get('/other', function (req, res) {
        console.log('other');
        res.json({
            "value": "other"
        });
    });
};