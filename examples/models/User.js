
Model.define('User', {
  
  collection : 'test_user',
  
  types: {
    _id : Object,
    username: String,
    first : String,
    last : String,
    bio: {
      age: Number
    }
  },
  setters: {
    first: function(v){
      return v.toUpperCase();
    }
  },
  getters: {
    username: function(v){
      return v.toUpperCase();
    },
    
    legalDrinkingAge : function(){
      return (this.bio.age >= 21) ? true : false;
    },
    
    first_last : function(){
      return this.first + ' ' + this.last;
    }
  }
  
});