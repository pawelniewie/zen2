CommentInput = GraphQL::InputObjectType.define do
  name "CommentInput"
  description "Represents comment input"

  argument :issue_id, !types.ID
  argument :body, !types.String
end
