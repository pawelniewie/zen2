class IssueType < ApplicationRecord
  belongs_to :project

  validates :name, presence: true, uniqueness: { scope: :project_id }
  validates :color, presence: true
  validates :project, presence: true

  acts_as_sequenced column: :position, scope: :project_id
end
