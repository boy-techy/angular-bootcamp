var express = require('express');
app = express();

app.
    use(express.static('app'))
    .listen(3000,function (req,res) {
        console.log("App is running at port: 3000");
    })