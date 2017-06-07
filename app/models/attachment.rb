# == Schema Information
#
# Table name: attachments
#
#  id                      :uuid             not null, primary key
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  attachment_file_name    :string           not null
#  attachment_content_type :string           not null
#  attachment_file_size    :integer          not null
#  attachment_updated_at   :datetime         not null
#  organization_id         :uuid
#  issue_id                :uuid
#
# Indexes
#
#  index_attachments_on_issue_id         (issue_id)
#  index_attachments_on_organization_id  (organization_id)
#

class Attachment < ApplicationRecord
	acts_as_tenant :organization
	
	belongs_to :issue
	belongs_to :user
	
	has_attached_file :attachment
end
