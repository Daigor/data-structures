var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var count = 0;
  var storage = {};

  
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



// var Stack = function(){
//   var someInstance = {}; 
//   // Use an object with numeric keys to store values
//   var storage = {};

//   // Implement the methods below
//   var count = 0;
//   someInstance.push = function(value){
//     count += 1;
//     storage[count] = value;
//   };

//   someInstance.pop = function(){
//     if(count){
//       var hold = storage[count];
//       delete storage[count];
//       count -= 1;
//       return hold;
//     }
//   };

//   someInstance.size = function(){
//     return count;
//   };

//   return someInstance;
// };
