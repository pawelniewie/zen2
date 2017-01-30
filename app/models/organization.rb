# == Schema Information
#
# Table name: organizations
#
#  id         :uuid             not null, primary key
#  name       :string
#  slug       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_organizations_on_slug  (slug) UNIQUE
#

class Organization < ApplicationRecord
  has_many :users
  has_many :projects
  has_many :issues

  has_associated_audits

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
