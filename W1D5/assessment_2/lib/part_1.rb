def my_reject(array, &block)
    array.select { |ele| !block.call(ele) }
end

def my_one?(array, &prc)
    array.select { |ele| prc.call(ele) }
         .length == 1
end

def hash_select(hash, &prc)
    new_hash = {}
    hash.each { |key, value| new_hash[key] = value if prc.call(key, value) }
    new_hash
end

def xor_select(array, prc1, prc2)
    array.select { |ele| prc1.call(ele) != prc2.call(ele) }
end

def proc_count(value, prc_array)
    prc_array.count { |prc| prc.call(value) }
end