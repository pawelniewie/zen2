CommentInterface = GraphQL::ObjectType.define do
  name "Comment"
  description "Represents comment"

  field :id, !types.ID
  field :body, types.String
  field :author, UserInterface
end
