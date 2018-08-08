var express =  require('express');
var router = express.Router();

/*
router.get('/', function(req, res, next){
    res.send('Welcom manager Page.');
});
*/

router.get('/task', function(req, res, next){
    res.render('taskInput.jade');
});

router.get('/device', function(req, res, next){
    res.send('This is devMgr Page.');
});


module.exports = router;

