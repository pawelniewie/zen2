ProjectInterface = GraphQL::ObjectType.define do
  name "Project"
  description "Represents project"

  field :id, !types.ID
  field :key, !types.String
  field :name, !types.String
end