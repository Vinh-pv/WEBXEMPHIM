const newsRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const usersRouter = require('./users');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    app.use('/users', usersRouter);
    app.use('/', siteRouter);
}

module.exports = route;
