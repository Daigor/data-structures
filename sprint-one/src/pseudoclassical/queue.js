var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.front = 0;
  this.end = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  this.end += 1;
  this.storage[this.end] = value;
};

Queue.prototype.dequeue = function(){
  if(this.front < this.end){
    this.front += 1;
    var hold = this.storage[this.front];
    delete this.storage[this.front];
    return hold;
  }
};

Queue.prototype.size = function(){
  return this.end - this.front >= 0 ? this.end - this.front : 0;
};