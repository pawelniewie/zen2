CreateOrganizationWithUserMutation = GraphQL::Relay::Mutation.define do
  name "CreateOrganizationWithUser"

  input_field :organization, OrganizationInput
  input_field :user, UserInput

  return_field :organization, !OrganizationInterface
  return_field :user, !UserInterface
  return_field :token, !types.String
  return_field :errors, !types[FieldErrorInterface]

  resolve -> (object, inputs, ctx) {
    org = Organization.create(inputs[:organization].to_h.slice('name', 'slug'))
    if org.valid?
      user = org.users.create(inputs[:user].to_h.slice('email', 'password'))
      if user.valid?
        return {
          user: user,
          organization: org,
          token: "test"
        }
      else
      end
    else
    end

    {
      "user": User.first,
      "token": "test",
      "errors": []
    }
  }
end