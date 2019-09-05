require "byebug"
def my_map (arr, &prc)
    new_map = []
    arr.each {|ele| new_map << prc.call(ele) }
    new_map
end

def my_select (arr, &prc)
    selected = []
    arr.each { |ele| selected << ele if prc.call(ele) }
    selected
end

def my_count (arr, &prc)
    count = 0
    arr.each { |ele| count += 1 if prc.call(ele) }
    count
end

def my_any? (arr, &prc)
    arr.each { |ele| return true if prc.call(ele) }
    return false
end

def my_all? (arr, &prc)
    arr.each { |ele| return false if !prc.call(ele) }
    return true
end

def my_none? (arr, &prc)
    arr.each { |ele| return false if prc.call(ele) }
    return true
end

