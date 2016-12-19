CreateOrganizationWithUserMutation = GraphQL::Relay::Mutation.define do
  name "CreateOrganizationWithUser"

  input_field :organization, OrganizationInput
  input_field :user, UserInput

  return_field :organization, !OrganizationInterface
  return_field :user, !UserInterface
  return_field :token, !types.String
  return_field :errors, !types[FieldErrorInterface]

  resolve -> (object, inputs, ctx) {
    {
      "user": User.first,
      "token": "test",
      "errors": []
    }
  }
end