//declaring variables
const express = require("express");
const morgan = require('morgan')
const path = require("path");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const Twitter = require('twitter');
const secret = require("./config/Secret")
//setting port
const PORT = process.env.PORT || 3001;
var client = new Twitter({
  consumer_key: secret.secret.consumer_key,
  consumer_secret: secret.secret.consumer_secret,
  access_token_key: secret.secret.access_token_key,
  access_token_secret: secret.secret.access_token_secret
});

const app = express();
//tools
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

if(process.env.NODE_ENV === "production"){
	app.use(express.static("client/build"))
}
app.post("/api/contact",function(req,res){
  console.log(req.body);
  res.send(200);
})
app.get("/api/twitter",function(req,res){
	var params = {
    screen_name: "baggio_shehadi"
  };
  client.get("statuses/user_timeline", params, function(error, tweets, response) {
    if (!error) {
      var twitters = []
      for (var i = 0; i < 5; i++) {
        twitters.push(tweets[i])
      }
      res.json(twitters);
    }
    else{
    	console.log(error);
    }
  });
})
//react route
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT,function(){
	console.log(`Serving on port ${PORT}`);
});