class Project < ApplicationRecord
  belongs_to :organization
  
  has_many :issue_types
  has_many :statuses

  validates :name, presence: true, uniqueness: true, length: {
    in: 2..80
  }

  validates :key, presence: true, uniqueness: true, format: {
    with: /[A-Z][A-Z_\-0-9]+/,
    message: 'Only upper case letters allowed'
  }, length: {
    minimum: 2,
    maximum: 10,
  }

  before_validation :upcase_key

  private

  def upcase_key
    self.key = key.upcase
  end
end
