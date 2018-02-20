module.exports = (router, Blog) => {
    router.post('/blogs', (req, res) => {
        console.log('post');

        Blog.create(JSON.parse(JSON.stringify(req.body)), (err, data) => {
            res.json(req.body);
        });
    });
    router.get('/blogs', (req, res) => {
        console.log('get');

        Blog.find({}, (err, data) => {
            res.json(data);
        });
    });
    router.get('/blogs/:blogId', (req, res) => {
        console.log('getId');

        Blog.find({ _id: req.params.blogId }, (err, data) => {
            res.json(data);
        });
    });
    router.put('/blogs/:blogId', (req, res) => {
        console.log('put');

        Blog.findByIdAndUpdate(req.params.blogId, JSON.parse(JSON.stringify(req.body)), (err, data) => {
            res.json(data ? data : { status: "object not found" });
        });
    });
    router.delete('/blogs/:blogId', (req, res) => {
        console.log('delete');

        Blog.findByIdAndRemove(req.params.blogId, (err, data) => {
            res.json({
                data: data,
                status: "ok"
            });
        });
    });

    router.get('/other', (req, res) => {
        console.log('other');
        res.json({
            "value": "other"
        });
    });
};