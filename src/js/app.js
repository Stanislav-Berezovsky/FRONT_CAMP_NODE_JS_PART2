const express = require('express');
const app = express();
const router = express.Router();
const routes = require('./routes');
const Blog = require('./blog').Blog;

routes(router,Blog);
app.use('/api', router);

app.set('port', 3000);
app.set('view engine', 'pug');
app.set('views', '../views');
app.use(function (err,req,res,next) {
    const errorHandler = express.errorHandler();
    errorHandler(err,req,res,next);
});

app.listen(app.get('port'));