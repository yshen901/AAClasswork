require "employee"

class Startup
  attr_accessor :name, :funding, :salaries, :employees

  def initialize(name, funding, salaries)
    @name = name
    @salaries = salaries
    @funding = funding
    @employees = []
  end

  def valid_title?(title)
    @salaries.has_key?(title)
  end

  def >(other_startup)
    @funding > other_startup.funding
  end

  def hire(employee_name, title)
    raise "title does not exist" if !self.valid_title?(title)

    @employees << Employee.new(employee_name, title)
  end

  def size
    @employees.length
  end

  def pay_employee(employee)
    amount = self.salaries[employee.title]
    raise "not enough funding" if amount > @funding

    employee.pay(amount)
    @funding -= amount
  end

  def payday
    @employees.each { |employee| self.pay_employee(employee) }
  end

  def average_salary
    sum = 0
    @employees.each { |employee| sum += salaries[employee.title] }
    sum / @employees.length
  end

  def close
    @employees = []
    @funding = 0
  end

  def acquire(other_startup)
    @funding += other_startup.funding

    other_startup.salaries.each do |title, amount|
      if !@salaries.has_key?(title)
        @salaries[title] = amount
      end
    end

    @employees = @employees + other_startup.employees
    other_startup.close()
  end
end
