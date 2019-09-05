def my_reject(array, &prc)
  new_array = []

  array.each do |el|
    new_array << el if !prc.call(el)
  end

  new_array
end

def my_one?(array, &prc)
  array.count(&prc) == 1
end

def hash_select(hash, &prc)
  selected = {}

  hash.each do |k, v|
    selected[k] = v if prc.call(k, v)
  end

  selected
end

def xor_select(array, prc_1, prc_2)
  array.select do |el|
    (prc_1.call(el) || prc_2.call(el)) && !(prc_1.call(el) && prc_2.call(el))
  end
end

def proc_count(val, procs)
  procs.count { |prc| prc.call(val) }
end
