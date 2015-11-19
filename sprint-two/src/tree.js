var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target, branch){
    branch = branch || this;
    if(branch.value === target){
      return true;
    } 
    for(var i = 0; i < branch.children.length; i++){
      var hold = branch.children[i].contains(target, branch.children[i]); 
      if(hold) {
        return true;
      }
    }
    

  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
