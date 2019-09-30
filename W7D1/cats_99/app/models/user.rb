class User < ApplicationRecord
  validates :user_name, :password_digest, :session_token, presence: true
  validates :session_token, uniqueness: true

  after_initialize :ensure_session_token

  #finds a user given a password and a user_name
  #both have to be correct or it returns nil
  def self.find_by_credentials(user_name, password)
    user = User.find_by(username: user_name)
    user && user.is_password?(password) ? user : nil
  end

  #updates the value...do this with update instead of with two lines, because
  #you also want to make sure the incoming value conforms with validations
  def reset_session_token!
    self.update!(session_token: SecureRandom.urlsafe_basic(16))
    self.session_token
  end

  #run to make sure use has a session token
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_basic(16)
  end

  #sets the password and password_digest given a string
  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password #makes an instance variable...why?
  end

  #checks a given password with the password_digest
  def is_password?(password)
    BCrypt::Password.new(self.password_digest) #converts password_digest back to a BCrypt Password
                    .is_password?(password) #this is a BCrypt method that checks if they match
  end


end
