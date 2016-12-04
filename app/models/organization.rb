class Organization < ApplicationRecord
  has_many :users

  validates :name, presence: true
  validates :slug, presence: true
end
