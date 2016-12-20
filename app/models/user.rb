class User < ApplicationRecord
  has_and_belongs_to_many :organizations

  accepts_nested_attributes_for :organizations

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :trackable, :validatable,
    :confirmable, :lockable

  validates :email, presence: true, uniqueness: true
end
