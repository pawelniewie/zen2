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
      Success() { |s| { success: s, errors: [] } }
      Failure() { |exception|
        model_name = exception.record.class.name.downcase

        errors = exception.record.errors.to_h.each_pair.map { |k, v|
          OpenStruct.new(field: "#{model_name}.#{k}", message: v)
        }

        { errors: errors }
      }
    end
  }
end