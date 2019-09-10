require "employee"

class Startup
    attr_reader :name, :funding, :salaries, :employees
    def initialize (name, funding, salaries)
        @name = name
        @funding = funding
        @salaries = salaries
        @employees = []
    end

    def valid_title? (title)
        @salaries.has_key?(title)
    end

    def > (startup2)
        self.funding > startup2.funding
    end

    def hire (name, title)
        raise 'invalid title' if !self.valid_title?(title)
        @employees << Employee.new(name, title)
    end

    def size
        @employees.length
    end

    def pay_employee (employee)
        raise 'no money' if @funding < @salaries[employee.title]
        employee.pay(@salaries[employee.title])
        @funding -= @salaries[employee.title]
    end

    def payday
        @employees.each { |employee| pay_employee(employee) }
    end

    def average_salary
        sum = 0
        @employees.each { |employee| sum += @salaries[employee.title] }
        sum / @employees.length
    end

    def close
        @employees = []
        @funding = 0
    end

    def acquire (startup_2)
        @funding += startup_2.funding
        @salaries = startup_2.salaries.merge(@salaries)
        @employees.push(*startup_2.employees)
        startup_2.close
    end
end
