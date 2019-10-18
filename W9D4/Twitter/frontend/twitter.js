const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

// $() => { } or $(document).ready(function () {}); also work

$(() => {
  $('.follow-toggle').each(function(index,el) {
    new FollowToggle(el);
  });
  $('.users-search').each(function (index, el) {
    new UsersSearch(el);
  });
});
  
