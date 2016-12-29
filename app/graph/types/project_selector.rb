ProjectSelector = GraphQL::InputObjectType.define do
  name "ProjectSelector"

  argument :key, types.String
  argument :id, types.ID
end