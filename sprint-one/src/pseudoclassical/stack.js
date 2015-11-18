var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.count += 1;
  this.storage[this.count] = value;
};
Stack.prototype.pop = function() {
  if(this.count){
    var hold = this.storage[this.count];
    delete this.storage[this.count];
    this.count -= 1;
    return hold;
  }
};
Stack.prototype.size = function() {
  return this.count;
};


