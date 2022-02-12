const express = require("express");
const cors = require("cors");
const session = require("express-session");
const logger = require("morgan");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(logger('dev'));
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(session({
                     secret: 'secret_string',
                     resave: false,
                     saveUninitialized: false,
                     cookie: { /* can add cookie related info here*/}
                 }));

app.get('/', function(req, res){
    res.header("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header("Access-Control-Allow-Credentials", "true")
  if (!req.session.pageCountByCurrentUser)
    req.session.pageCountByCurrentUser = 0;
  req.session.pageCountByCurrentUser++;
  res.send({
    pageCount: req.session.pageCountByCurrentUser
  });
});



// set port, listen for requests
const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
