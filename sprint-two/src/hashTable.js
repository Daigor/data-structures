var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var index = this._storage.get(i) || [];
  var overwrite = false;
  _.each(index, function(pair){
    if(pair[0] === k){
      pair[1] = v;
      overwrite = true;
    }
  });
  if(!overwrite){
    index.push([k,v]);
  }
  this._storage.set(i, index);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var index = this._storage.get(i);
  for(var i = 0; i < index.length; i++){
    if(index[i][0] === k){
      return index[i][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  this.insert(k, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
