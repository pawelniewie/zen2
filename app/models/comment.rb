# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  author_id  :uuid             not null
#  issue_id   :uuid             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_comments_on_author_id  (author_id)
#  index_comments_on_issue_id   (issue_id)
#

class Comment < ApplicationRecord
  belongs_to :author, class_name: 'User'
  belongs_to :issue

  validates :body, presence: true
  validates :author, presence: true
  validates :issue, presence: true
end
