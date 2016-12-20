CreateOrganizationWithUserMutationSuccessInterface = GraphQL::ObjectType.define do
  name 'CreateOrganizationWithUserMutationSuccess'

  field :organization, !OrganizationInterface
  field :user, !UserInterface
  field :token, !types.String
end

CreateOrganizationWithUserMutation = GraphQL::Relay::Mutation.define do
  name "CreateOrganizationWithUser"

  input_field :organization, OrganizationInput
  input_field :user, UserInput

  return_field :errors, !types[FieldErrorInterface]
  return_field :success, CreateOrganizationWithUserMutationSuccessInterface

  resolve -> (_, inputs, _) {
    result = CreateOrganizationWithUserService.(organization: inputs[:organization].to_h, user: inputs[:user].to_h)
    FormatMutationResultService.(result: result)
  }
end