const app = require('./app');
const port = 3004;

app.listen(port, function() 
{
    console.log('Express server listening on port ' + port);
});