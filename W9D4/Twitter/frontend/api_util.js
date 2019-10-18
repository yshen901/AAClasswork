const APIUtil = {
  followUser: id => {
    return $.ajax({
      method: "POST",
      url: `/users/${id}/follow`, //use ` for JS interpolation
      dataType: 'json' //removing this breaks it as then the respond_to won't format json
    });
  },

  unfollowUser: id => {
    return $.ajax({
      method: 'DELETE',
      url: `/users/${id}/follow`, //use ` for JS interpolation
      dataType: 'json'
    });
  },

  searchUsers: queryVal => {
    return $.ajax({
      method: 'GET',
      url: `/users/search`, //use ` for JS interpolation
      data: { query: queryVal }, //data contains params
      // data: { queryVal },
      dataType: 'json'
    });
  }


};

module.exports = APIUtil;