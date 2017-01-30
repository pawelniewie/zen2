# == Schema Information
#
# Table name: projects
#
#  id              :uuid             not null, primary key
#  name            :string           not null
#  key             :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  organization_id :uuid
#
# Indexes
#
#  index_projects_on_key_and_organization_id   (key,organization_id) UNIQUE
#  index_projects_on_name_and_organization_id  (name,organization_id) UNIQUE
#  index_projects_on_organization_id           (organization_id)
#

class Project < ApplicationRecord
  belongs_to :organization

  has_associated_audits
  
  has_many :issue_types
  has_many :statuses

  validates :name, presence: true, uniqueness: true, length: {
    in: 2..80
  }

  validates :key, presence: true, uniqueness: true, format: {
    with: /[A-Z][A-Z_\-0-9]+/,
    message: 'Only upper case letters allowed'
  }, length: {
    minimum: 2,
    maximum: 10,
  }

  before_validation :upcase_key

  private

  def upcase_key
    self.key = key.upcase
  end
end
