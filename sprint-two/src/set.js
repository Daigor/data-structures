var Set = function(){
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(!this.contains(item)){
    this.storage[item] = true;
  }
};

setPrototype.contains = function(item){
  for(var key in this.storage){
    if(item === key){
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  delete this.storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
