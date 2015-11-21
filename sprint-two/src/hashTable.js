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
  console.log(index, 'im in retrieve / index')
  for(var j = 0; j < index.length; j++){
    if(index[j][0] === k){
      return index[j][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var index = this._storage.get(i);
  for(var j = 0; j < index.length; j++){
    if(index[j][0] === k){
      index[j][1] = null;
      console.log(index, 'inside for loop of remove');
    }
  }
  console.log(this._limit, 'remove function');
  if(this.count / this._limit <= .25){
    //debugger;
    this._limit = this._limit / 2;
    this.resize();
  }
  this.count--;
};


HashTable.prototype.resize = function(){
  var saveLimit = this._limit;
  var newStorage = LimitedArray(this._limit);
  this._storage.each(function(array, key){
    if(array){
      console.log(array, 'im array in resize')
      for(var i = 0; i < array.length; i++){
        var tuple = array[i];
        console.log(tuple, 'im tuple');
        var newIndex = getIndexBelowMaxForKey(tuple[0], saveLimit);
        var place = newStorage.get(newIndex) || [];
        place.push([tuple[0], tuple[1]]);
        newStorage.set(newIndex, place);
      }
    }
  });
  this._storage = newStorage;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

