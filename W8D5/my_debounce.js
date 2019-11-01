Function.prototype.myDebounce = function(interval) {
  let timer;

  return () => {
    let action = () => {
      timer = null;
      this();
      //Again, we could put (...args) here and in the return for more robustness
    }

    clearTimeout(timer); //clears the original timeout (set by setTimeout)
    timer = setTimeout(action, interval); //calls the action only after interval time
  }
}


class SearchBar {
  constructor() {
    this.query = "";

    this.type = this.type.bind(this);
    this.search = this.search.bind(this);
  }

  type(letter) {
    this.query += letter;
    this.search();
  }

  search() {
    console.log(`searching for ${this.query}`);
  }
}

const searchBar = new SearchBar();
searchBar.search = searchBar.search.myDebounce(500);

const queryForHelloWorld = () => {
  searchBar.type("h");
  searchBar.type("e");
  searchBar.type("l");
  searchBar.type("l");
  searchBar.type("o");
  searchBar.type(" ");
  searchBar.type("w");
  searchBar.type("o");
  searchBar.type("r");
  searchBar.type("l");
  searchBar.type("d");
};

queryForHelloWorld();
