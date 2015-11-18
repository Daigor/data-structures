var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.front = 0;
  obj.end = 0;
  obj.storage = {};
  _.extend(obj, queueMethods);
  return obj;
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
  return this.end-this.front >= 0 ? this.end - this.front : 0;
}
// var Queue = function(){
//   var someInstance = {};

//   // Use an object with numeric keys to store values
//   var storage = {};

//   // Implement the methods below
//   var front = 0;
//   var end = 0;
//   someInstance.enqueue = function(value){
//     end += 1;
//     storage[end] = value;
//   };

//   someInstance.dequeue = function(){
//     if(front <= end){
//       front += 1;
//       var hold = storage[front];
//       delete storage[front];
//       return hold;
//     }
//   };

//   someInstance.size = function(){
//     return end-front >=0 ? end - front : 0;
//   };

//   return someInstance;
// };
