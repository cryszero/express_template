const path = require('path');
const fs = require('fs');

exports.home = (req, res) => {
    res.send('imma home');
};

exports.news = (req, res) => {
    res.sendFile(__dirname + '/../views/main/news.html');
};

exports.page = (req, res, next) => {
    const filePath = path.resolve(__dirname + '/../views/main/' + req.params.page + '.html');
    console.log(filePath);
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.type('text/plain');
        res.status('404');
        res.send('404 - Не найдено');
    }
};

