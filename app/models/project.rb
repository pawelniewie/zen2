class Project < ApplicationRecord
  belongs_to :organization

  validates :name, presence: true, uniqueness: true
  validates :key, presence: true, uniqueness: true, format: {
    with: /[A-Z][A-Z_\-0-9]+/,
    message: 'Only upper case letters allowed'
  }

  before_validation :upcase_key

  private

  def upcase_key
    self.key = key.upcase
  end
end
