//declare dependencies here
var express = require('express'),
    app     = express();

//App configuration
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"))


app.get('/', function(req, res){
    res.render("landing");
})

// IF YOU DONT SEE THE CONSOLE LOG BELOW, make sure to set your environment variable for port.
//To do this, in your terminal (in the project root folder) type "export PORT=3000" then after
//Starting the app server, go to localhost:3000 in your browser
    app.listen(process.env.PORT, process.env.IP, function(req, res){
        console.log("Server started");
    })