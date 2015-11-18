var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.count = 0;
  obj.storage = {};
  _.extend(obj, stackMethods);

  return obj;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.count += 1;
  this.storage[this.count] = value;
};
stackMethods.pop = function() {
  if(this.count){
    var hold = this.storage[this.count];
    delete this.storage[this.count];
    this.count -= 1; 
    return hold;
  }
};
stackMethods.size = function () {
  return this.count;
}; 
