class Issue < ApplicationRecord
  belongs_to :organization
  belongs_to :project
  belongs_to :assignee, class_name: 'User'
  belongs_to :reporter, class_name: 'User'

  acts_as_sequenced column: :no, scope: :project_id

  validates :summary, presence: true

  def key
    @key ||= self.project.key + '-' + self.no.to_s
  end
end