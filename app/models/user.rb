class User < ApplicationRecord
  belongs_to :organization

  accepts_nested_attributes_for :organization

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :trackable, :validatable,
    :confirmable, :lockable, :rememberable

  validates :email, presence: true, uniqueness: true
end
