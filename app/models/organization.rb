class Organization < ApplicationRecord
  has_many :users

  validates :name, presence: true
  validates :slug, presence: true, uniqueness: true, format: {
    with: /[a-z][a-z_\-0-9]+/,
    message: 'Only letters and digits allowed'
  }, exclusion: {
    in: ReservedSlugs.all,
    message: "Subdomain %{value} is reserved"
  }

  before_validation :downcase_slug

  private

  def downcase_slug
    self.slug = slug.downcase
  end
end
