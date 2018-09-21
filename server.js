const express = require('express');
const app = express();
const routes = require('./routes/index.js')(app);

app.use(express.json());
app.use(require('body-parser').urlencoded({ extended: true }));
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/views'));

function startServer() {
    app.listen(app.get('port'), function() {
        console.log('Express zapushen na ' + app.get('port'));
    });
}

if (require.main === module) {
    startServer();
} else {
    module.exports = startServer;
}