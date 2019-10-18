const APIUtil = require("./api_util.js");

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find('input[name= query]');
    // this.$input = $(this.$el.children("input")); //this.$input.attr("value")
    this.$ul = $(".users");
    
    this.$el.on("keypress", e => this.handleInput(e));
  }

  handleInput(e) {
    return APIUtil.searchUsers(this.$input.val())
                  .then( users => {
                    //clear the <ul>
                    //append all results of AJAX
                    // debugger

                    // console.log(this.$input.val());
                    this.renderResults(users);
                  })
                  .fail( () => console.log("failed") );
  }

  renderResults(users) {
    this.$ul.empty();

    for(let i=0; i < users.length; i++) {
      let $li = $('<li></li>');
      let $a = $('<a></a>');
      $a.text(users[i].username);
      $a.attr('href',`/users/${users[i].id}`);
      $li.appendTo(this.$ul);
      $a.appendTo($li);
    }

  }

}



module.exports = UsersSearch;