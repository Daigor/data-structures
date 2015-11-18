var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.front = 0;
  newQueue.end = 0;
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.end += 1;
  this.storage[this.end] = value;
};

queueMethods.dequeue = function(){
  if(this.front < this.end){
    this.front += 1;
    var hold = this.storage[this.front];
    delete this.storage[this.front];
    return hold;
  }
};

queueMethods.size = function(){
  return this.end - this.front >= 0 ? this.end - this.front : 0;
};