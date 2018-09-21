const main = require('./main.js');

module.exports = function(app) {
    app.get('/', main.home);
    app.get('/getJson', main.news);
    app.get('/:page', main.page);
}