ProjectInput = GraphQL::InputObjectType.define do
  name "ProjectInput"
  description "Represents project input"

  argument :key, !types.String
  argument :name, !types.String
end