//declaring variables
const express = require("express");
const morgan = require('morgan')
const path = require("path");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
//setting port
const PORT = process.env.PORT || 3001;


const app = express();
//tools
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());


if(process.env.NODE_ENV === "production"){
	app.use(express.static("client/build"))
}

//react route
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT,function(){
	console.log(`Serving on port ${PORT}`);
});