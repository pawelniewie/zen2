# frozen_string_literal: true
class UpdateIssueService < VirtusService

  ALLOWED_FIELDS = %w(summary description)

  attribute :issue, Issue
  attribute :fields, Array

  def call
    try! do
      authorize issue, :update?

      issue.update!(issue_update_params)

      broadcast(:issue_updated, issue)

      OpenStruct.new(issue: issue.reload)
    end
  end

  def issue_update_params
    fields
      .select { |field_input| ALLOWED_FIELDS.include?(field_input[:field_id]) }
      .reduce({}) do |params, field_input|

      field_id = field_input[:field_id]
      serialized_value = field_input[:serialized_value]

      params[field_id.to_sym] = serialized_value
      params
    end
  end
end
