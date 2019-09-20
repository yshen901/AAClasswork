require 'sqlite3'
require 'singleton'

class QuestionsDatabase < SQLite3::Database
  include Singleton

  def initialize
    super('questions.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end

class Question
  attr_accessor :id, :body, :author_id, :title
  def self.find_by_id(id)
    question = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        questions
      WHERE
        id = ?
    SQL
    return nil if question.empty? 

    Question.new(question.first) #selects first row of query result
  end

  def self.find_by_author_id(author_id)
    #gives an array of hashes, where each hash is a row
    questions = QuestionsDatabase.instance.execute(<<-SQL, author_id)
      SELECT  
        *
      FROM 
        questions
      WHERE
        author_id = ?
    SQL

    questions.map { |question| Question.new(question) }

    # results = []
    # questions.each do |question|
    #   results << Questions.new(question)
    # end
    # results
  end
  
  def initialize(data) #data is a hash 
    @id = data['id']
    @body = data['body']
    @author_id = data['author_id']
    @title = data['title']
  end

  def author
    User.find_by_id(@author_id)
  end

  def replies
    Reply.find_by_question_id(@id)
  end

  def followers
    QuestionFollow.followers_for_question_id(self.id)
  end
end

class User
  attr_accessor :id, :fname, :lname
  def self.find_by_id(id)
    user = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT 
        *
      FROM
        users
      WHERE
        id = ?
    SQL
    return nil if user.empty?

    User.new(user.first)
  end

  def self.find_by_name(fname, lname)
    users = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
      SELECT
        *
      FROM
        users
      WHERE
        fname = ? AND lname = ?
    SQL
    users.map { |user| User.new(user) }
  end

  def initialize(data)
    @id = data['id']
    @fname = data['fname']
    @lname = data['lname']
  end

  def authored_questions
    Question.find_by_author_id(@id)
  end

  def authored_replies
    Reply.find_by_user_id(@id)
  end

  def followed_questions
    QuestionFollow.followed_questions_for_user_id(self.id)
  end
end

class QuestionFollow
  attr_accessor :id, :user_id, :question_id
  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        question_follows
      WHERE
        id = ?
    SQL
    return nil if data.empty?
    QuestionFollow.new(data.first)
  end 

  def self.followers_for_question_id(question_id)
    followers = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      SELECT
        users.id, users.fname, users.lname
      FROM
        users
      JOIN
        question_follows ON users.id = question_follows.user_id
      WHERE
        question_id = ?
    SQL
    followers.map { |user| User.new(user) }
  end

  def self.followed_questions_for_user_id(user_id)
    questions = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      SELECT
        questions.id, questions.body, questions.author_id, questions.title
      FROM
        question_follows
      JOIN
        questions ON question_follows.question_id = questions.id
      WHERE
        user_id = ?
    SQL
    questions.map { |question| Question.new(question) }
  end

  def initialize(data)
    @id = data['id']
    @user_id = data['user_id']
    @question_id = data['question_id']
  end
end

class QuestionLike
  attr_accessor :id, :user_id, :question_id
  def self.find_by_id(id)
    question_likes = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        question_likes
      WHERE
        id = ?
    SQL
    return nil if question_likes.empty?
    QuestionLike.new(question_likes.first)
  end
  
  def initialize(data)
    @id = data['id']
    @user_id = data['user_id']
    @question_id = data['question_id']
  end
end

class Reply
  attr_accessor :id, :user_id, :question_id, :parent_id, :body
  def self.find_by_id(id)
    replies = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        replies
      WHERE
        id = ?
    SQL
    return nil if replies.empty?
    Reply.new(replies.first)
  end
  
  def self.find_by_user_id(user_id)
    replies = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      SELECT
        *
      FROM
        replies
      WHERE
        user_id = ?
    SQL
    replies.map { |reply| Reply.new(reply) }
  end

  def self.find_by_question_id(question_id)
    replies = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      SELECT
        *
      FROM
        replies
      WHERE
        question_id = ?
    SQL
    replies.map { |reply| Reply.new(reply) }
  end
    
  def initialize(data)
    @id = data['id']
    @user_id = data['user_id']
    @question_id = data['question_id']
    @parent_id = data['parent_id']
    @body = data['body']
  end

  def author
    User.find_by_id(@user_id)
  end

  def question
    Question.find_by_id(@question_id)
  end

  def parent_reply
    Reply.find_by_id(@parent_id)
  end

  def child_replies
    replies = QuestionsDatabase.instance.execute(<<-SQL, @id)
      SELECT
        *
      FROM
        replies
      WHERE
        parent_id = ?
    SQL
    return nil if replies.empty?

    replies.map { |reply| Reply.new(reply) }
  end
end

