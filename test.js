var parser = require('rssparser');
var options = {};
//rss feeds
var articles = [];
parser.parseURL('http://rss.cnn.com/rss/cnn_topstories.rss', options, function(err, out){
    articles.push(out);
    console.log(articles.pop());
});


