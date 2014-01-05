var express = require('express');
var app = express();
var todos = [];




app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));

  // development only
  if ('development' == app.get('env')) {
     app.use(express.errorHandler());
  }
});

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/public/index.html');
});
app.get('/get/todos', function(req, res) {
	res.send(todos);
});
app.get('/newpage', function(req, res) {
	res.send('yo bitch');
});

app.post('/todo', function(req, res) {

	todos.push(req.body.todo);
	console.log(todos)
	res.send(201);
});
app.put('/update/todo', function(req, res) {
	
	for(var i = 0; i < todos.length; i++){
		if(todos[i].value === req.body.value){
			todos[i] = req.body;
		}
	}
	console.log(todos);
	res.send(201);
});


app.listen(app.get('port'));
console.log('serving port 3k');
