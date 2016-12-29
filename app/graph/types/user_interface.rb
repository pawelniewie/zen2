UserInterface = GraphQL::ObjectType.define do
  name "User"
  description "Represents user"

  field :id, !types.ID
  field :email, !types.String

  field :first_name, types.String
  field :last_name, types.String
  field :full_name, types.String

  field :username, !types.String

  field :organization, !OrganizationInterface
end