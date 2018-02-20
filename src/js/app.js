const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const routes = require('./routes');
const Blog = require('./blog').Blog;
const errorHandler = require('express-error-handler')

app.use(bodyParser.json());
routes(router, Blog);
app.use('/api', router);
app.set('port', 3000);
app.set('view engine', 'pug');
app.set('views', '../views');
app.use(errorHandler());

app.listen(app.get('port'));