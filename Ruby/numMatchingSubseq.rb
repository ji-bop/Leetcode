# @param {String} s
# @param {String[]} words
# @return {Integer}
def num_matching_subseq(s, words)
    waiting = Hash.new { |h, k| h[k] = [] }
    words.each { |w| waiting[w[0]] << [w, 1] }
    s.each_char { |c|
        waiting.delete(c)&.each { |w, i| waiting[w[i]] << [w, i+1] }
    }
    waiting[nil].size
end