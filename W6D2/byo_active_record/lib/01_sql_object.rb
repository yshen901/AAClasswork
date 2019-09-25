require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    @columns ||= []

    if @columns.empty?
      info = DBConnection.execute2(<<-SQL)
        SELECT
          *
        FROM
          #{self.table_name} /*note this down*/
      SQL
      @columns = info.first.map { |ele| ele.to_sym }
    end

    @columns
  end

  def self.finalize!
    columns = self.columns
    columns.each do |column_name|
      define_method(column_name) { attributes[column_name] }
      define_method("#{column_name}=") { |val| attributes[column_name] = val }
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name ||= ActiveSupport::Inflector.tableize(self.name)
    @table_name
  end

  def self.all
    rows = DBConnection.execute(<<-SQL)
      SELECT
        *
      FROM
        #{self.table_name}
    SQL
    rows = self.parse_all(rows)
  end

  def self.parse_all(results)
    results.map do |result|
      self.new(result)
    end
  end

  def self.find(id)
    query_result = DBConnection.execute(<<-SQL, id)
      SELECT
        *
      FROM
        #{self.table_name}
      WHERE
        id = ?
    SQL
    return nil if query_result.empty?
    self.new(query_result.first)
  end

  def initialize(params = {})
    params.each do |attr_name, value|
      column = attr_name.to_sym
      unless self.class.columns.include?(column)
        raise "unknown attribute '#{column}'"
      end

      
      send("#{attr_name}=", value)
    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    self.class.columns.map { |column| send(column) }
  end

  def insert
    col_names = self.class.columns.join(",")
    question_marks = Array.new(self.class.columns.length, "?").join(",")
    DBConnection.execute(<<-SQL, *(self.attribute_values))
      INSERT INTO
        #{self.class.table_name} (#{col_names})
      VALUES
        (#{question_marks})
    SQL
    send("id=", DBConnection.last_insert_row_id)
  end

  def update
    cols = self.class.columns.map { |column| column.to_s + " = ?"}.join(",")
    DBConnection.execute(<<-SQL, *(self.attribute_values), send(:id))
      UPDATE
        #{self.class.table_name}
      SET
        #{cols}
      WHERE
        id = ?
    SQL
  end

  def save
    previous = self.class.find(send(:id))
    puts previous
    if previous
      send(:update)
    else
      send(:insert)
    end
  end
end
