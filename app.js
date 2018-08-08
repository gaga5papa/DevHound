var express = require("express");
var app = express();
var path = require("path");
var indexRouter = require("./routes/index");
var managerRouter = require("./routes/manager");

//set template  engine
app.set('view engine', 'jade');
app.set('views', './views/pages');

app.use(express.static(path.join(__dirname, './public')));

//set initail router
app.use('/', indexRouter);
app.use('/manager', managerRouter);
app.all('*', function(req, res){
    res.status(404).send('404.  #HOUND# Not Found !!!');
});

//start server
app.listen(2486, function(){
    console.log('The #DevHound# is running...');
    console.log('Port 2486 listening...');
});

