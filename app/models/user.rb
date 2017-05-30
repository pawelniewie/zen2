# == Schema Information
#
# Table name: users
#
#  id                     :uuid             not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :inet
#  last_sign_in_ip        :inet
#  confirmation_token     :string
#  confirmed_at           :datetime
#  confirmation_sent_at   :datetime
#  unconfirmed_email      :string
#  failed_attempts        :integer          default(0), not null
#  unlock_token           :string
#  locked_at              :datetime
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  organization_id        :uuid
#  username               :string           not null
#  first_name             :string
#  last_name              :string
#  invitation_token       :string
#  invitation_created_at  :datetime
#  invitation_sent_at     :datetime
#  invitation_accepted_at :datetime
#  invitation_limit       :integer
#  invited_by_id          :integer
#  invited_by_type        :string
#
# Indexes
#
#  index_users_on_confirmation_token            (confirmation_token) UNIQUE
#  index_users_on_email                         (email) UNIQUE
#  index_users_on_invitation_token              (invitation_token) UNIQUE
#  index_users_on_organization_id               (organization_id)
#  index_users_on_reset_password_token          (reset_password_token) UNIQUE
#  index_users_on_unlock_token                  (unlock_token) UNIQUE
#  index_users_on_username_and_organization_id  (username,organization_id) UNIQUE
#

class User < ApplicationRecord
  belongs_to :organization

  has_and_belongs_to_many :teams, join_table: :teams_users

  audited associated_with: :organization, only: [:email, :username, :first_name, :last_name]

  accepts_nested_attributes_for :organization

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :trackable, :validatable,
    :confirmable, :lockable, :rememberable,
    :invitable

  validates :email, presence: true, uniqueness: true
  validates :organization, presence: true
  validates :username, presence: true, uniqueness: { scope: :organization_id }, format: {
    with: /[a-zA-Z][\w-]+/,
    message: 'Only letters and digits allowed'
  }

  def full_name
    "#{first_name} #{last_name}".chomp
  end

end
