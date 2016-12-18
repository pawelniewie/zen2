OrganizationInput = GraphQL::InputObjectType.define do
  name "OrganizationInput"
  description "Represents organization input"

  argument :name, !types.String
  argument :slug, !types.String
end