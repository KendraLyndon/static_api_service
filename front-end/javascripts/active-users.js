$(document).ready(function(){
  var list = document.getElementById('user-list');
  $.ajax({
    url: 'http://localhost:3000/active_users'
  }).done(function(data){
    console.log(data);
    data.forEach(function(user,i){
        addUser(data[i].user_data);
    })
  });

  function addUser(data){
    var user = document.createElement('dt');
    $(user).text(data.first_name+' '+data.last_name);
    addUserInfo(data,user);
    $(user).appendTo(list);
  }

  function addUserInfo(data,user){
    var userId = document.createElement('dd'),
        ycode = document.createElement('dd');
    $(userId).text('id : '+ data.id);
    $(ycode).text('y-code : '+ data.y_code);
    $(user).append(userId, ycode);
  }
})
