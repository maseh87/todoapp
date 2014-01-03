function getToDos(cb){
	$.ajax({
		url: '/get/todos',
		type: 'GET',
		success: function(data) {
			cb(data);
		},
		error: function() {
			console.log('check your get to dos function');
		}
	});
};
function showToDos(todoArray){
	for(var i = 0; i < todoArray.length; i++){
		var li = $('<li>');
		li.html(todoArray[i]);
		$('ul').append(li);
	}
};
getToDos(showToDos);
$(document).ready(function(){
	$('button').on('click', function(e){
		var todo = $('input').val();
		$.ajax({
			url: '/todo',
			type: 'POST', 
			data: {todo: todo},
			success: function(data) {
				console.log('hell yeah');
			},
			error: function(data) {
				console.log('you fucked up');
			}
		});
		var li = $('<li>');
		li.html(todo);
		$('ul').append(li);
		console.log(li);
		$('input').val('');
	});


});
