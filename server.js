var express = require('express');
var platform = require('platform');
var app = express();
app.enable('trust proxy');
app.set('view engine','ejs');
app.get('/',(req,res)=>{
  res.sendFile( __dirname + "/views/index.html" );
})
app.get('/whoami',function(req,res){
	var header = req.headers;
	var ipAdd = req.ip;
	var UA = platform.parse(header["user-agent"]);
	var language = header["accept-language"].split(';')[0];
	var info ={ip:ipAdd,OSInfo:UA.os,language:language};
	res.render('main',{info:info});
})

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
