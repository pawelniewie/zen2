class Organization < ApplicationRecord
  has_and_belongs_to_many :users

  validates :name, presence: true
  validates :slug, presence: true, uniqueness: true

  before_validation :downcase_slug

  private

  def downcase_slug
    self.slug = slug.downcase
  end
end
