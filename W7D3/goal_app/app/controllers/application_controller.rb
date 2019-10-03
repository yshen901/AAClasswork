class ApplicationController < ActionController::Base

  #these are methods you'll need in views
  helper_method :current_user, :logged_in?

  # returns the user that's currently logged in
  def current_user
    #returns nil unless session[:s.t.] is a truthy...aka not nil
    #if there is a session token, then that means there's someone logged in
    return nil unless session[:session_token] 
    
    #finds the currently logged in user...aka the user that has this session's session token
    #use lazy instantialization to only run a query the first time you call this method
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  #ends the session by resetting the user/session session tokens
  #reset current_user BEFORE setting session[s.t.] to nil, otherwise 
  #      you'll lose access to current_user
  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil #this is done so current_user works properly
  end

  #starts a session by setting the server's session token equal to the user's session token
  #make sure to use reset_session_token! to make sure the user never has the same token
  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def is_logged_in?
    !!current_user ## all !! does is turn a truthy/falsey into true/false
  end

  #place this under a "before_action" in all controllers of resources you want to 
  #      limit to logged in users only. This will force users to login before having
  #      access to a url path.
  def require_login
    # debugger
    redirect_to new_session_url unless is_logged_in?
  end
end
