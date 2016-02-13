// The PrefixTree that can handle autocomplete for T9-style texting
var keys = {
  'a': 2, 'b': 2, 'c': 2,
  'd': 3, 'e': 3, 'f': 3,
  'g': 4, 'h': 4, 'i': 4,
  'j': 5, 'k': 5, 'l': 5,
  'm': 6, 'n': 6, 'o': 6,
  'p': 7, 'q': 7, 'r': 7, 's': 7,
  't': 8, 'u': 8, 'v': 8,
  'w': 9, 'x': 9, 'y': 9, 'z': 9
};

var PrefixTree = function(value) {
  this.value = value || null;
  this.words = [];
  
};

// Your methods go here! Good luck!

// Traverse the tree to the node where the word should be inserted. If any
// needed nodes do not exist along the way, they are created.
PrefixTree.prototype.insert = function(copy, word) {
  //word is initial string or passed in word
  word = word || copy;
  //if(string exists)
  if(copy.length){
    //index is a number generated from string of key
    var letter = copy[0].toLowerCase();
    var index = keys[letter];
    //take off first letter of string
    copy = copy.slice(1); 
    //Prefixtree.4 if doesnt it exists
    if(!this[index]){
      //set current prefix property to a new prefix tree with that index
      this[index] = new PrefixTree(index);
    }
    // string.length === 0
    if(copy.length === 0){
      //pushes word to word array
      this[index].words.push(word); 
    }
    //recursive function where ello, hello
    this[index].insert(copy, word);
  }
};

// Traverse the tree based on the key digits in keyString, to find the node
// where relevant words are stored.
PrefixTree.prototype.getSuggestions = function(keyString, suggestionDepth) {
  var result = [];
  if(keyString !== null){
    var index = keyString[0];
    if(keyString.length){
      keyString = keyString.slice(1);
    } else {
      keyString = null;
    }
    //debugger;
    if(keyString !== null){
      result = result.concat(this[index].getSuggestions(keyString, suggestionDepth));
    } else {
      if(this.words.length){
        result = result.concat(this.words);
      }
      result = result.concat(this.getSuggestions(keyString, suggestionDepth));
    }
  } else if(suggestionDepth >= 0){
    suggestionDepth--;
    if(this.words.length){
      result = result.concat(this.words);
    }
    for(var i = 2; i < 10; i++){
      if(this[i]){
        result = result.concat(this[i].getSuggestions(keyString, suggestionDepth));
      }
    }
  }

  return result;
};


// var PrefixTree = function(value) {
//   this.value = value;
//   this.children = [];
//   this.words = [];

// };

// // Your methods go here! Good luck!

// // Traverse the tree to the node where the word should be inserted. If any
// // needed nodes do not exist along the way, they are created.
// PrefixTree.prototype.insert = function(word, whole) {
//   whole = whole || word;
//   if(word.length){    
//     var letter = keys[word[0]];
//     var node = new PrefixTree(letter);
//     this.children.push(node);
//     if(word.length > 1){
//       word = word.slice(1);
//       node.insert(word, whole);
//     } else {
//       node.words.push(whole);
//     }
//   }

  
// };

// // Traverse the tree based on the key digits in keyString, to find the node
// // where relevant words are stored.
// PrefixTree.prototype.getSuggestions = function(keyString, suggestionDepth) {
//   var result = [];
//   //iterate through keystring
  
//     //at each keyString

//       //check for completed words in this.words;
//         //return up any completed words

//   //search with suggestionDepth
//     //return any completed words
//     //decrement suggestionDepth

//   return result;
// };