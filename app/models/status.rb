# == Schema Information
#
# Table name: statuses
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  position   :integer          not null
#  category   :string           not null
#  project_id :uuid             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_statuses_on_name_and_project_id  (name,project_id) UNIQUE
#  index_statuses_on_project_id           (project_id)
#

class Status < ApplicationRecord
  belongs_to :project

  audited associated_with: :project

  validates :name, presence: true, uniqueness: { scope: :project_id }
  validates :category, inclusion: { in: StatusCategory.all }
  validates :project, presence: true

  acts_as_sequenced column: :position, scope: :project_id
end
