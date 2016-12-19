OrganizationInterface = GraphQL::ObjectType.define do
  name "Organization"
  description "Represents organization"

  field :id, !types.ID
  field :name, !types.String
  field :slug, !types.String
end