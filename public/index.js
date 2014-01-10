
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
    li.html(todoArray[i].value);
    if(todoArray[i].check === 'true'){
      li.addClass('strikethrough');
    }
    $('ul').append(li);
  }
};
$('ul').on('click', 'li', function() {
  var value = $(this).text();
  console.log(value);
  $(this).toggleClass('strikethrough');
  var check = $(this).hasClass('strikethrough');
  $.ajax({
    url: '/update/todo',
    type: 'PUT',
    data: {value: value, check: check},
    success: function() {
      console.log('to do has been updated');
    },
    error: function() {
      console.log('to do has not been updated');
    }
  });
});

getToDos(showToDos);
$(document).ready(function(){

  $('button').on('click', function(e){
    var todo = $('input').val();
    if(todo.length > 0) {
      $.ajax({
        url: '/todo',
        type: 'POST', 
        data: {todo: {value: todo, check: false}},
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
    } 
  });
});
