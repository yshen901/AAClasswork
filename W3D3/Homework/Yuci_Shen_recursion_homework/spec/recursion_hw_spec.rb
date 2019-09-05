require "recursion_hw"

describe "Recursion Homework: " do
    describe "sum_to" do
        it "should take in one number as an argument" do
            expect { sum_to(5) }.to_not raise_error
        end
        it "should return the sum of from 1 to n (inclusive)" do
            expect(sum_to(5)).to eq(15)
            expect(sum_to(1)).to eq(1)
            expect(sum_to(9)).to eq(45)
            expect(sum_to(-8)).to eq(nil)
        end
    end

    describe "add_numbers" do
        it "should take in an array of Integers as an argument" do
            expect { add_numbers([1,2,3,4,5]) }.to_not raise_error
        end
        it "should return the sum the array" do
            expect(add_numbers([1,2,3,4])).to eq(10)
            expect(add_numbers([3])).to eq(3)
            expect(add_numbers([-80,34,7])).to eq(-39)
            expect(add_numbers([])).to eq(nil)
        end
    end

    describe "gamma_fnc" do
        it "should take in one number as an argument" do
            expect { gamma_fnc(5) }.to_not raise_error
        end
        it "should return the sum of from 1 to n (inclusive)" do
            expect(gamma_fnc(0)).to eq(nil)
            expect(gamma_fnc(1)).to eq(1)
            expect(gamma_fnc(4)).to eq(6)
            expect(gamma_fnc(8)).to eq(5040)
        end
    end

    describe "ice_cream_shop" do
        it "should take in one array and one string as arguments" do
            expect { ice_cream_shop(['flavor'], 'favorite') }.to_not raise_error
        end
        it "should return the sum of from 1 to n (inclusive)" do
            expect(ice_cream_shop(['vanilla', 'strawberry'], 'blue moon')).to eq(false)
            expect(ice_cream_shop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')).to eq(true)
            expect(ice_cream_shop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio')).to eq(false)
            expect(ice_cream_shop(['moose tracks'], 'moose tracks')).to eq(true)
            expect(ice_cream_shop([], 'honey lavender')).to eq(false)
        end
    end

    describe "reverse" do
        it "should take in one string as an argument" do
            expect { reverse("string") }.to_not raise_error
        end
        it "should return the sum of from 1 to n (inclusive)" do
            expect(reverse("house")).to eq("esuoh")
            expect(reverse("dog")).to eq("god")
            expect(reverse("atom")).to eq("mota")
            expect(reverse("q")).to eq("q")
            expect(reverse("id")).to eq("di")
            expect(reverse("")).to eq("")
        end
    end
end