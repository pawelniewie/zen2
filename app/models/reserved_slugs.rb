module ReservedSlugs
  def self.all
    Rails.root.join('app/models/reserved_slugs.txt').readlines.map(&:chomp)
  end
end