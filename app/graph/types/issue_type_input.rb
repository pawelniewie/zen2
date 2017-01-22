IssueTypeInput = GraphQL::InputObjectType.define do
  name "IssueTypeInput"
  description "Represents issue input"

  argument :summary, !types.String
  argument :description, types.String
  argument :assignee, types.ID
  argument :reporter, types.ID
end
