module.exports = {
  matchUserById : function (users,id){
    for(var i=0 ; i<users.length ; i++){
      if(Number(id)===users[i].user_data.id){
        return users[i].user_data;
      }
    }
  },
  returnActiveUsers : function (users){
    return users.filter(function(person,i){
      if(users[i].user_data.active === 1){
        return users[i];
      }
    })
  }
}
