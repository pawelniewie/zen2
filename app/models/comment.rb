class Comment < ApplicationRecord
  belongs_to :author, class_name: 'User'
  belongs_to :issue

  validates :body, presence: true
  validates :author, presence: true
  validates :issue, presence: true
end
