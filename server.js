var express = require('express'),
    server = express();
var OUT = "www-build/";
server.use('/', express.static(OUT));
server.listen(8000);
