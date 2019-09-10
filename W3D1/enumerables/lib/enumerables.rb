class Array
    def my_each(&prc)
        i = 0
        while (i < self.length)
            prc.call(self[i])
            i += 1
        end
        self
    end

    def my_select(&prc)
        result = []
        self.my_each do |ele|
            result << ele if prc.call(ele)
        end
        result
    end

    def my_reject(&prc)
        result = []
        self.my_each do |ele|
            result << ele if !prc.call(ele)
        end
        result
    end

    def my_any?(&prc)
        self.my_each do |ele|
            return true if prc.call(ele)
        end
        false
    end

    def my_all?(&prc)
        self.my_each do |ele|
            return false if !prc.call(ele)
        end
        true
    end

    def my_flatten
        flattened = []
        self.each do |ele|
            if ele.is_a?(Array)
                flattened += ele.my_flatten
            else
                flattened << ele
            end
        end
        flattened
    end

    def my_zip(*arrs)
        result = []
        (0...self.length).each do |i|
            sub_arr = [self[i]]
            arrs.each do |arr|
                sub_arr << arr[i]
            end
            result << sub_arr
        end
        result
    end

    def my_rotate(num = 1)
        if num > 0 
            self.drop(num%self.length) + self.take(num%self.length)
        else
            self.drop((num+self.length)%self.length) + self.take((num+self.length)%self.length)
        end
    end

    def my_join(symbol = "")
        result = ""
        (0...self.length).each do |i|
            i != self.length-1 ? result += self[i] + symbol : result += self[i]
        end
        result
    end

    def my_reverse
        return self if self.length < 2
        self.drop(self.length-1) + self.take(self.length-1).my_reverse
    end
end