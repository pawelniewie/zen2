# == Schema Information
#
# Table name: teams
#
#  id              :uuid             not null, primary key
#  name            :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  organization_id :uuid
#
# Indexes
#
#  index_teams_on_name_and_organization_id  (name,organization_id) UNIQUE
#  index_teams_on_organization_id           (organization_id)
#

class Team < ApplicationRecord
  belongs_to :organization
  has_and_belongs_to_many :users, join_table: :teams_users

  validates :name, uniqueness: { scope: :organization_id }
end
