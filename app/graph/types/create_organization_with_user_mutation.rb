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
    CreateOrganizationWithUserService.(organization: inputs[:organization].to_h, user: inputs[:user].to_h).match do
      Success() { |s| {success: s} }
      Failure() { |f| {errors: f.each_pair.map {|k, v| OpenStruct.new(field: k, message: v) } } }
    end
  }
end