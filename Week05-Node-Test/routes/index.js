var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Node-Test Tembo'
    });
});


router.get('/getNine', function(request, response) {
    'use strict';
    response.send({'result': 9});
});


router.get('/feetFromMiles', function(request, response) {
    'use strict';
    console.log('feet from miles called with query:', request.query);
    response.send({result: request.query.miles * 5280});
});

module.exports = router;
