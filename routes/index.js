var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var arr = [];

    for (var i = 0; i < 10; i++) {
        arr.push({
            id: i,
            name: 'teste' + i
        });
    }

    res.render('index', {
        title: 'É nois mano222',
        name: 'Henrique Ferraz',
        data: arr
    });
});


module.exports = router;