class Employee

  attr_reader :salary, :name, :title
  attr_accessor :boss

  def initialize(name, title, salary, boss)
    @name = name
    @title = title
    @salary = salary
    @boss = boss
  end

  def bonus(multiplier)
    @salary * multiplier
  end
end

class Manager < Employee

  def initialize(name, title, salary, boss)
    super
    @underlings = []
  end

  def bonus(multiplier)
    sub_employees = self.all_subs
    sub_employees.map(&:salary).sum * multiplier
  end

  def add_underling(underling)
    @underlings << underling
    # another thing we can do is make sure old boss and our relationship is cancelled
    underling.boss = self
  end

  def all_subs
    subs = []
    @underlings.each do |underling|
      subs << underling
      subs.concat(underling.all_subs) if underling.is_a?(Manager)
    end
    subs
  end
end

ned = Manager.new("Ned", "Founder", 1000000, nil)
darren = Manager.new("Darren", "TA Manager", 78000, ned)
shawna = Employee.new("Shawna", "TA", 12000, darren) 
david = Employee.new("David", "TA", 10000, darren) 

ned.add_underling(darren)
darren.add_underling(shawna)
darren.add_underling(david)

puts ned.bonus(5)
puts darren.bonus(4)
puts david.bonus(3)