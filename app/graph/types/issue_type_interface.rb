IssueTypeInterface = GraphQL::ObjectType.define do
  name "IssueType"
  description "Represents issue type"

  field :id, !types.ID
  field :name, !types.String
  field :position, !types.Int
  field :color, !types.String
  field :created_at, types.String
  field :updated_at, types.String
end