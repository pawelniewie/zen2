UsernameSelector = GraphQL::InputObjectType.define do
  name "UsernameSelector"

  argument :contains, types.String
  argument :starts_with, types.String
end