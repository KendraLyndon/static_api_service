$(document).ready(function(){
  var list = document.getElementById('users-list');
  var users = {};

  $.ajax({
    url: 'http://localhost:3000/users'
  }).done(function(data){
    data.forEach(function(user,i){
      addUser(data[i].user_data);
      users[data[i].user_data.id] = data[i].user_data;
    })
  });

  function addUser(data){
    var user = document.createElement('dt');
    var link = document.createElement('a');
    $(link).attr('href','profile.html');
    $(link).addClass('profile');
    $(link).attr('id', data.id);
    $(link).text(data.first_name+' '+data.last_name);
    $(user).append(link);
    addUserInfo(data,user);
    $(list).append(user);
  }

  function addUserInfo(data,user){
    var userId = document.createElement('dd'),
        active = document.createElement('dd'),
        ycode = document.createElement('dd');
    $(userId).text('id : '+ data.id);
    $(active).text('active : '+ data.active);
    $(ycode).text('y-code : '+ data.y_code);
    $(user).append(userId, active, ycode);
  }

})
