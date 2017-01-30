# == Schema Information
#
# Table name: issue_types
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  position   :integer          not null
#  color      :string           not null
#  project_id :uuid             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_issue_types_on_name_and_project_id  (name,project_id) UNIQUE
#  index_issue_types_on_project_id           (project_id)
#

class IssueType < ApplicationRecord
  belongs_to :project

  audited associated_with: :project

  validates :name, presence: true, uniqueness: { scope: :project_id }
  validates :color, presence: true
  validates :project, presence: true

  acts_as_sequenced column: :position, scope: :project_id
end
