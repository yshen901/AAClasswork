class UsersController < ApplicationController

  #this method makes an empty User object
  #then it renders a form that the user will fill out with the info for the new User object
  #then upon clicking the submit button, it will activate the form action to create a
  #     new user object, with the parameters the user put into the form
  def new
    @user = User.new
    render :new
  end

  def create
    # 1) gets these user params from private method...these params though come from
    #        the form the user filled (see above)
    # 2) use new here not create...create makes and saves, 
    #        robbing you of the chance to implement fail logic
    @user = User.new(user_params) 
    if @user.save
      login!(@user) #uses the application controller helpers to login to a session
      redirect_to user_url(@user) #specify which user, when the URI pattern has an ":id" in it
    else
      redirect_to new_user_url
    end
  end


  def show
    # @user in this case is an instance variable, that persists for the lifespan 
    # of the request. A way to think about it, is that the request is the object
    # that contains instance variables, and views/controllers are their methods.

    #TLDR: make it an instance variable if you want to access it in the views
    #ALSO: use find_by because it fails quietly, while find will fail loudly
    #      find_by just returns nil if it can't find it...find crashes the site
    @user = User.find_by(id: params[:id])
    if @user
      render :show
    else
      render json: "User doesn't exist", status: 412
    end
  end

  private

  # without nesting: params = { id: "1", username: "user", password: "pass", ... }
  # with nesting   : params = { id: "1", user: {username: "user", password: "pass"}, ... }
  def user_params
    #stuff a request is allowed to pass in
    #require: states the key of the nested hash in params
    #permit: states the keys that are allowed
    params.require(:user).permit(:username, :password) 
  end
end
