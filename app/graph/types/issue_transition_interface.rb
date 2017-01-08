IssueTransitionInterface = GraphQL::ObjectType.define do
  name "IssueTransition"
  description "Represents issue transition"

  field :name, !types.String
  field :position, !types.Int
end