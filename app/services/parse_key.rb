class ParseKey
  def self.call(key)
    return nil unless key

    last_hyphen = key.rindex('-')
    return nil if !last_hyphen || last_hyphen == 0 || last_hyphen == key.size - 1

    [key[0, last_hyphen], key[last_hyphen + 1, key.size].to_i]
  end
end
