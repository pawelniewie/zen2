# == Schema Information
#
# Table name: issues
#
#  id              :uuid             not null, primary key
#  no              :integer          not null
#  summary         :string           not null
#  description     :text
#  project_id      :uuid
#  organization_id :uuid
#  assignee_id     :uuid
#  reporter_id     :uuid
#  status          :string
#  created_at      :datetime         default("2017-01-22 11:05:01.621278"), not null
#  updated_at      :datetime         default("2017-01-22 11:05:01.644787"), not null
#
# Indexes
#
#  index_issues_on_assignee_id        (assignee_id)
#  index_issues_on_no_and_project_id  (no,project_id) UNIQUE
#  index_issues_on_organization_id    (organization_id)
#  index_issues_on_project_id         (project_id)
#  index_issues_on_reporter_id        (reporter_id)
#

class Issue < ApplicationRecord
  # include AASM

  belongs_to :organization
  belongs_to :project
  belongs_to :assignee, class_name: 'User'
  belongs_to :reporter, class_name: 'User'

  acts_as_sequenced column: :no, scope: :project_id

  before_validation :set_organization

  validates :summary, presence: true
  validates :project, presence: true
  validates :organization, presence: true

  # Workflow
  # aasm :column => 'status' do
  # end

  def key
    @key ||= self.project.key + '-' + self.no.to_s
  end

  protected

  def set_organization
    self.organization_id = self.project.organization_id if self.project
  end
end
