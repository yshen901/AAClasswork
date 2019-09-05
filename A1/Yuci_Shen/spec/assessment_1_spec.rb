require "assessment_1"

describe "my_map!" do
    it "should accept an array and a block as args" do
        expect { my_map!([1,2,3,4]) { |n| n * n } }.to_not raise_error
    end

    it "should mutate elements of the input array by replacing them with their result when passed into the block" do
        arr_1 = [1,2,3,4]
        my_map!(arr_1) { |n| n * n }
        expect(arr_1).to eq([1, 4, 9, 16])

        arr_2 = ['give', 'more', 'take', 'less']
        my_map!(arr_2) { |s| s.capitalize + '!' }
        expect(arr_2).to eq(['Give!', 'More!', 'Take!', 'Less!'])
    end

    it "should not use the built-in Array#map or Array#map!" do
        arr_1 = [1,2,3,4]
        expect(arr_1).to_not receive(:map)
        expect(arr_1).to_not receive(:map!)

        my_map!(arr_1) { |n| n * n }  
    end
end

describe "two?" do
    it "should accept an array and a block as args" do
        expect { two?([7, 4, 10, 3, 1]) { |x| x.even? } }.to_not raise_error
    end
    
    it "should return a boolean indicating if there are exactly two elements of the array that return true when passed into the block" do
        expect(two?([7, 4, 10, 3, 1]) { |x| x.even? }).to eq(true)
        expect(two?([7, -5, 0, -1, 1]) { |x| x > 0 }).to eq(true)

        expect(two?([2019, 121, 10]) { |x| x.even? }).to eq(false)
        expect(two?([4, 5, 6, 7, -8]) { |x| x > 0 }).to eq(false)
    end
end

describe "nor_select" do
    it "should accept an array and two procs as args" do
        even = Proc.new { |n| n.even? }
        positive = Proc.new { |n| n > 0 }

        expect { nor_select([2, 5, 3, 7, 6, -8, -1], even, positive) }.to_not raise_error
    end

    it "should return a new array containing elements of the original array that result in false when passed into both procs" do
        even = Proc.new { |n| n.even? }
        positive = Proc.new { |n| n > 0 }
        expect(nor_select([-2, -4, 7, -7, -5], even, positive)).to match_array([-7, -5])
        expect(nor_select([10, 11, 13], even, positive)).to match_array([])

        all_uppercase = Proc.new { |x| x == x.upcase }
        starts_with_a = Proc.new { |x| x[0].downcase == 'a' }
        expect(nor_select(['potato', 'ORANGE', 'toMATO', 'apple'], all_uppercase, starts_with_a)).to match_array(['potato', 'toMATO'])
        expect(nor_select(['app', 'academy', 'bootcamp', 'CODING', 'DeVeloper'], all_uppercase, starts_with_a)).to match_array(['bootcamp', 'DeVeloper'])
    end
end

describe "array_of_hash_sum" do
    it "should accept an array containing hashes as an arg" do
        arr = [
            { matt: 17, polina: 19, erin: 18 },
            { jj: 9, anna: 17}
        ]
        expect { array_of_hash_sum(arr) }.to_not raise_error
    end

    it "should return the total sum of all values in the hashes" do
        arr_1 = [
            { matt: 17, polina: 19, erin: 18 },
            { jj: 9, anna: 17}
        ]
        expect(array_of_hash_sum(arr_1)).to eq(80)

        arr_2 = [
            { a: -3, b: 4 },
            { a: 10, b: 12 },
            {}
        ]
        expect(array_of_hash_sum(arr_2)).to eq(23)

        expect(array_of_hash_sum([])).to eq(0)
    end
end

describe "slangify" do
    it "should accept a sentence string as an arg" do
        expect { slangify("follow the yellow brick road") }.to_not raise_error
    end
    
    it "should return a new sentence where every word of the original sentence has its first vowel (a,e,i,o,u) removed." do
        expect(slangify("follow the yellow brick road")).to eq("fllow th yllow brck rad")
        expect(slangify("try to stay awake please")).to eq("try t sty wake plase")
        expect(slangify("hey programmers")).to eq("hy prgrammers")
    end
end

describe "char_counter" do
    it "should accept a string as the first arg and any number of additional args of single characters" do
        expect { char_counter('mississippi', 'm', 'i') }.to_not raise_error
        expect { char_counter('mississippi', 'm', 'i', 'p') }.to_not raise_error
        expect { char_counter('christine ma') }.to_not raise_error
    end

    it "should return a hash containing the counts of the additional character args in the first string arg" do
        expect(char_counter('mississippi', 'm', 'i')).to eq({'m'=>1, 'i'=>4})
        expect(char_counter('mississippi', 'm', 'i', 'p')).to eq({'m'=>1, 'i'=>4, 'p'=>2})
        expect(char_counter('christine ma', 'c')).to eq({"c"=>1})
        expect(char_counter('christine ma', 'i', 't', 'x')).to eq({"i"=>2, "t"=>1, "x"=>0})
    end

    context "when only a single string arg is passed" do
        it "should return a hash containing the counts of all characters in the string" do
            expect(char_counter('christine')).to eq({"c"=>1, "h"=>1, "r"=>1, "i"=>2, "s"=>1, "t"=>1, "n"=>1, "e"=>1 })
        end
    end
end
