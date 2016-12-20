UserInterface = GraphQL::ObjectType.define do
  name "User"
  description "Represents user"

  field :id, !types.ID
  field :email, !types.String

  field :organizations, !types[OrganizationInterface]
end