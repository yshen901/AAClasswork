class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true

  attr_reader :password

  #done before validation so we don't fail the null session token check
  before_validation :ensure_session_token

  #finds the user associated with the email (and whether there is one)
  #if you find one, then check if the password is correct/matches the password_digest for that user
  #if both match, then return the user
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    
    #ternary logic version
    #user && user.is_password?(password) ? user : nil 

    if user && user.is_password?(password)
      return user
    else
      return nil
    end

  end

  #just a helper method to dry up code
  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end
  
  #generates a new token, and updates the session_token column for this user
  def reset_session_token!
    new_token = self.generate_session_token
    self.update!(session_token: new_token)
    new_token
  end

  #sets a token if it's not already there
  def ensure_session_token
    self.session_token ||= self.generate_session_token
  end

  #saves the user's password in an instance variable
  #also turns the password into a digest, for saving in the database
  #note: the password_digest is a string, so when you save the BCrypt object, it's automatically converted to a string
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  #converts the password_digest (a string) into a BCrypt::Password object
  #then uses a BCrypt::Password method to check to see if the inputted password matches
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

end
