var express = require('express')
  , http = require('http')
  , hbs = require('handlebars')
  , parser = require('rssparser');
 
var parserOptions = {}; 
var app = express();
var articles = [];

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);

/* 
app.configure('development', function(){
  app.use(express.errorHandler());  //prettier way to show errors
});
*/
// SPECIFY VIEW LOCALE
app.get('/', function(req, res){
  //var ObjectID = require('mongodb').ObjectID;
 
//console.log("test");
//http://rss.cnn.com/rss/cnn_topstories.rss
//http://www.wired.com/wiredscience/feed/
//http://feeds.cnet.com/news/latest
// TODO: add 
	parser.parseURL('http://feeds.cnet.com/news/latest', parserOptions, function(err, out){
    
	//add the source to the articles
	for (var i=0; i<out.items.length; i++){
		out.items[i].source = out.title;
			console.log(out.items[i].source);
	}
	
	var articles = out.items;
	res.render('returnRows', { 'articles' : articles });
    //console.log(out.items.length, ' articles:' , articles.length);
	});
	//res.render('returnRows', { 'articles' : articles });
});


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
