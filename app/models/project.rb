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
#  visibility      :integer          not null
#
# Indexes
#
#  index_projects_on_key_and_organization_id   (key,organization_id) UNIQUE
#  index_projects_on_name_and_organization_id  (name,organization_id) UNIQUE
#  index_projects_on_organization_id           (organization_id)
#

class Project < ApplicationRecord
  acts_as_tenant :organization
  
  enum visibility: [ :private, :public ], _suffix: true

  has_associated_audits
  
  has_many :issue_types
  has_many :statuses
  has_many :issues
  has_many :roles, class_name: "ProjectRole"
  
  has_many :issue_custom_fields, class_name: "CustomField", as: :owner, dependent: :delete_all
  
  has_many :custom_fields_values, class_name: "CustomFieldValue", as: :owner, dependent: :delete_all

  validates_uniqueness_to_tenant [:name, :key]
  
  validates :name, presence: true, length: {
    in: 2..80
  }

  validates :key, presence: true, format: {
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
