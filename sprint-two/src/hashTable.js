var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.count = 0;
};

HashTable.prototype.insert = function(k, v){
  this.count++;
  if(this.count / this._limit >= .75){
    this._limit *= 2; 
    this.resize();
  } 
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
  for(var j = 0; j < index.length; j++){
    if(index[j][0] === k){
      return index[j][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  this.insert(k, null);
};


HashTable.prototype.resize = function(){
  var newStorage = LimitedArray(this._limit);
  this._storage.each(function(array, key){
    if(array){
      for(var i = 0; i < array.length; i++){
        var tuple = array[i];
        var newIndex = getIndexBelowMaxForKey(tuple[0], this._limit);
        newStorage.set(newIndex, tuple[1]);
      }
    }
  });
  this._storage = newStorage;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

