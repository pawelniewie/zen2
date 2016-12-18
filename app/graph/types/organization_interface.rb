OrganizationInterface = GraphQL::ObjectType.define do
  name "Organization"
  description "Represents organization"

  field :name, !types.String
  field :slug, !types.String
end