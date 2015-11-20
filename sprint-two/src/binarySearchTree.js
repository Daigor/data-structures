var BinarySearchTree = function(value){

  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(number){
  // check if value is greater or smaller
  var child = new BinarySearchTree(number);
  if(number < this.value){
    if(this.left === null){
      this.left = child;
    } else {
      this.left.insert(number);
    }
  } else {
    if(this.right === null){
      this.right = child;
    } else {
      this.right.insert(number);
    }
  }
  //check existence of child

  //if no child set recurse
};

BinarySearchTree.prototype.contains = function(number){
  if(this.value === number){
    return true;
  }
  if(number < this.value){
    if(this.left === null){
      return false;
    }else{
      return this.left.contains(number);
    }
  }else{
    if(this.right === null){
      return false;
    }else{
      return this.right.contains(number);
    }
  }

};

BinarySearchTree.prototype.depthFirstLog = function(callback){
  callback(this.value)
  if(this.left){
    this.left.depthFirstLog(callback);
  }
  if(this.right){
    this.right.depthFirstLog(callback);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
