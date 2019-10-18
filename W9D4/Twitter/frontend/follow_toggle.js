const APIUtil = require("./api_util.js");

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');
    this.render();
    this.$el.on('click', (e) => this.handleClick(e));
  }
  
  render() {
    if(this.followState === "unfollowed") {
      this.$el.prop("disabled", false);
      this.$el.text("Follow!");
    } 
    else if (this.followState === "followed") {
      this.$el.prop("disabled", false);
      this.$el.text("Unfollow!");
    }
    else if (this.followState === "following"){
      this.$el.text("Following!");
      this.$el.prop("disabled", true);
    }
    else if (this.followState === "unfollowing") {
      this.$el.text("Unfollowing!");
      this.$el.prop("disabled", true);
    }
  }
  
  handleClick(e) {
    e.preventDefault();
    let that = this;
    if (this.followState === 'unfollowed') {
      this.followState = 'following';
      that.render();
      return APIUtil.followUser(this.userId).then(function(){
        that.followState = 'followed';
        that.render();
      });
    }
    this.followState = 'unfollowing';
    that.render();
    return APIUtil.unfollowUser(this.userId).then(function () {
      that.followState = 'unfollowed';
      that.render();
    });
  }
}

module.exports = FollowToggle;