# == Schema Information
#
# Table name: gods
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
#  failed_attempts        :integer          default(0), not null
#  unlock_token           :string
#  locked_at              :datetime
#  first_name             :string           not null
#  last_name              :string           not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_gods_on_email                 (email) UNIQUE
#  index_gods_on_reset_password_token  (reset_password_token) UNIQUE
#  index_gods_on_unlock_token          (unlock_token) UNIQUE
#

class God < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :trackable, :validatable,
    :lockable, :rememberable

  validates :email, presence: true, uniqueness: true

  def full_name
    "#{first_name} #{last_name}".chomp
  end
end
