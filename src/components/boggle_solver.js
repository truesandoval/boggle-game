
function boggle_solver(grid, dict){
    var newTrie = dictTrie(dict);
    var solutions = gridSolutions(grid, newTrie, isVisited(grid));
    return solutions;
};
var TrieNode = function() {
      this.keys = new Map();
      this.end = false;
      this.setEnd = function() {
          this.end = true;
      };
      this.isEnd = function() {
          return this.end;
      };
  };
var MakeTrie = function(){
    this.root = new TrieNode();
      this.add = function(input, node = this.root){
      if(input.length === 0){
        node.setEnd();
        return;
      }
      else if(!node.keys.has(input[0])){
        node.keys.set(input[0], new TrieNode());
        return this.add(input.substr(1), node.keys.get(input[0]));
      }
      else{
        return this.add(input.substr(1), node.keys.get(input[0]));
      }
    };
    this.isValidWord = function(word){
      let node = this.root;
      while(word.length > 1)
        if(!node.keys.has(word[0]))
        return false;
        else{
          node = node.keys.get(word[0]);
          word = word.substr(1);
        }
      return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
    };
  };
  function dictTrie(dict){
    var newTrie = new MakeTrie();
    for(var i = 0; i < dict.length; i++)
        if(dict[i].length >= 3)
          newTrie.add(dict[i]);
    return newTrie;
  };
  function isVisited(grid){
    var visited = [];
    var temp = [];
    for(var i = 0;i<grid.length;i++){
      for(var x = 0; x<grid[0].length;x++){
        temp.push(false);
      }
      visited.push(temp);
      temp = [];
    }
    return visited;
  };
  function recursivelyTraverseGrid(newTrie, row, col, grid, visited, solutions, newString){
      //check to see if the coordinates are in bound and unvisited
    if(row<0||col<0||row >= grid.length||col >= grid[0].length|| visited[row][col])
      return;
    newString += grid[row][col];
    if(newTrie.isValidWord(newString))
      solutions.push(newString);
    visited[row][col]=true;
    recursivelyTraverseGrid(newTrie, row-1, col, grid, visited, solutions, newString);
    recursivelyTraverseGrid(newTrie, row+1, col, grid, visited, solutions, newString);
    recursivelyTraverseGrid(newTrie, row, col+1, grid, visited, solutions, newString);
    recursivelyTraverseGrid(newTrie, row, col-1, grid, visited, solutions, newString);
    recursivelyTraverseGrid(newTrie, row-1, col+1, grid, visited, solutions, newString);
    recursivelyTraverseGrid(newTrie, row+1, col+1, grid, visited, solutions, newString);
    recursivelyTraverseGrid(newTrie, row-1, col-1, grid, visited, solutions, newString);
    recursivelyTraverseGrid(newTrie, row+1, col-1,  grid, visited, solutions, newString);
    visited[row][col] = false;
  };
  
  function gridSolutions(grid, newTrie, visited){
    var solutions = [];
    var newString = "";
    for(var i = 0; i < grid.length;i++){
        for(var x = 0; x < grid[0].length;x++){
            recursivelyTraverseGrid(newTrie, i, x, grid, visited, solutions,"");
        }
    }
    const uniqueSolutions = Array.from(new Set(solutions));
    return uniqueSolutions;
  };

  exports.findAllSolutions = boggle_solver;
//   var dict = ["ARE", "BLISS", "LOVE", "DIE"];
//   var grid = [["A", "R", "C", "L"], 
//               ["E", "D", "S", "O"], 
//               ["I", "J", "I", "V"], 
//               ["D", "B", "L", "E"]];
//   console.log(boggle_solver(grid,dict));