class ApplicationController < ActionController::Base

  skip_before_action :verify_authenticity_token #we will change this once we do the csrf stuff from W7D2

  helper_method :current_user, :logged_in? #lets you access these from views

  #returns nil if there is no session
  #otherwise, it finds the user associated with the ongoing session by session_token
  #              saves that user into an instance variable so you don't have to query again
  def current_user
    return nil unless session[:session_token]

    #make this an instance variable to save the results of the first query
    #so any subsequent calls of this method can just return the instance variable
    #instead of making another query (this is a tactic to avoid N+1 queries)
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    #same as !!current_user
    !current_user.nil?
  end

  #sets the session token equal to the user's token
  #resets the user's token everytime you log in so it's always different...harder to hack
  def log_in_user!(user)
    @current_user = user #this is just an optimization, so you don't have to query for it
    session[:session_token] = @current_user.reset_session_token!
  end

  #unlinks the user and session...effectively logging out
  #make sure to set the session token to nil AFTER you reset the current_user
  #   otherwise you wouldn't be able to find the logged in user!
  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil     #used for logic in current_user
  end

end
