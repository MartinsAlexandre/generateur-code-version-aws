var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(7070, function(){
    console.log('Server running on 8080...', 'http://localhost:7070/');
});

// commande = yarn start