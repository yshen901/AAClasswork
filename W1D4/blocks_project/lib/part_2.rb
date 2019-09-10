require "byebug"
def all_words_capitalized?(words)
    words.all? do |word|
        word.length > 0 && word[0].upcase + word[1..-1].downcase == word
    end
end

def no_valid_url?(urls)
    valid = [".com", ".net", ".io", ".org"]
    urls.none? do |url|
        url.index('.') != nil && valid.include?( url[url.index('.')..-1] )
    end
end

def any_passing_students?(students)
    students.any? do |student| 
        student[:grades].sum.to_f / student[:grades].length > 75
    end
end