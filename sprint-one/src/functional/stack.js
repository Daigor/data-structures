var Stack = function(){
  var someInstance = {}; 
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count = 0;
  someInstance.push = function(value){
    count += 1;
    storage[count] = value;
  };

  someInstance.pop = function(){
    if(count){
      var hold = storage[count];
      delete storage[count];
      count -= 1;
      return hold;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
